import sqlite3
import re
from fastapi import FastAPI, HTTPException, Depends, status
from schemas import PatientInput, UserSignup, UserLogin, GoogleLogin
from rules.engine import evaluate_patient
from fastapi.middleware.cors import CORSMiddleware
from .auth_utils import get_password_hash, verify_password, create_access_token
from google.oauth2 import id_token
from google.auth.transport import requests as google_requests
import requests

import os
GOOGLE_CLIENT_ID = os.getenv("GOOGLE_CLIENT_ID") # Secret removed for GitHub push

app = FastAPI(title="AI Medicine Assistant")

# Database setup
def init_db():
    conn = sqlite3.connect("users.db")
    cursor = conn.cursor()
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL
        )
    """)
    conn.commit()
    conn.close()

init_db()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def is_strong_password(password: str):
    # Min 8 characters, at least one uppercase, one lowercase, one number, and one special character
    if len(password) < 8:
        return False
    if not re.search("[a-z]", password):
        return False
    if not re.search("[A-Z]", password):
        return False
    if not re.search("[0-9]", password):
        return False
    if not re.search("[!@#$%^&*(),.?\":{}|<>]", password):
        return False
    return True

@app.post("/signup")
def signup(user: UserSignup):
    if user.password != user.confirm_password:
        raise HTTPException(status_code=400, detail="Passwords do not match")
    
    if not is_strong_password(user.password):
        raise HTTPException(status_code=400, detail="Password is not strong enough")

    conn = sqlite3.connect("users.db")
    cursor = conn.cursor()
    
    try:
        hashed_pw = get_password_hash(user.password)
        cursor.execute("INSERT INTO users (username, email, password) VALUES (?, ?, ?)", 
                       (user.username, user.email, hashed_pw))
        conn.commit()
    except sqlite3.IntegrityError:
        raise HTTPException(status_code=400, detail="Email or Username already exists")
    finally:
        conn.close()
    
    return {"message": "User created successfully"}

@app.post("/login")
def login(user: UserLogin):
    conn = sqlite3.connect("users.db")
    cursor = conn.cursor()
    cursor.execute("SELECT id, username, password FROM users WHERE email = ?", (user.email,))
    db_user = cursor.fetchone()
    conn.close()

    if not db_user or not verify_password(user.password, db_user[2]):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    
    access_token = create_access_token(data={"sub": user.email, "username": db_user[1]})
    return {
        "access_token": access_token, 
        "token_type": "bearer",
        "username": db_user[1]
    }

@app.post("/auth/google")
def google_auth(data: GoogleLogin):
    try:
        email = None
        username = None

        if data.id_token:
            # Verify the ID token
            idinfo = id_token.verify_oauth2_token(data.id_token, google_requests.Request(), GOOGLE_CLIENT_ID)
            email = idinfo['email']
            username = idinfo.get('name', email.split('@')[0])
        elif data.access_token:
            # Verify using access_token
            response = requests.get(
                "https://www.googleapis.com/oauth2/v3/userinfo",
                params={"access_token": data.access_token}
            )
            if not response.ok:
                raise HTTPException(status_code=401, detail="Invalid Google access token")
            
            user_info = response.json()
            email = user_info['email']
            username = user_info.get('name', email.split('@')[0])
        else:
            raise HTTPException(status_code=400, detail="No token provided")

        if not email:
            raise HTTPException(status_code=401, detail="Could not retrieve email from Google")

        conn = sqlite3.connect("users.db")
        cursor = conn.cursor()
        cursor.execute("SELECT id, username FROM users WHERE email = ?", (email,))
        db_user = cursor.fetchone()

        if not db_user:
            # Create a new user for Google login
            cursor.execute("INSERT INTO users (username, email, password) VALUES (?, ?, ?)", 
                           (username, email, "GOOGLE_AUTH_PROVIDER"))
            conn.commit()
            cursor.execute("SELECT id, username FROM users WHERE email = ?", (email,))
            db_user = cursor.fetchone()
        
        conn.close()

        access_token = create_access_token(data={"sub": email, "username": db_user[1]})
        return {
            "access_token": access_token, 
            "token_type": "bearer",
            "username": db_user[1]
        }
    except ValueError:
        raise HTTPException(status_code=401, detail="Invalid Google token")

@app.post("/evaluate")
def evaluate(data: PatientInput):
    return evaluate_patient(data)
