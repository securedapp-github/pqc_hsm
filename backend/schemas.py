from typing import Optional
from pydantic import BaseModel

class PatientInput(BaseModel):
    age: int
    temperature: Optional[float] = None
    spo2: Optional[int] = None
    height: Optional[float] = None
    weight: Optional[float] = None
    heart_rate: Optional[int] = None
    bp_systolic: Optional[int] = None
    bp_diastolic: Optional[int] = None
    headache: bool
    body_pain: bool
    cough: bool
    vomiting: bool
    dizziness: bool
    fatigue: bool
    fever_duration_hours: int

class UserSignup(BaseModel):
    username: str
    email: str
    password: str
    confirm_password: str

class UserLogin(BaseModel):
    email: str
    password: str

class GoogleLogin(BaseModel):
    id_token: Optional[str] = None
    access_token: Optional[str] = None
