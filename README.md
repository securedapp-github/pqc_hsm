# MedAssist AI: Advanced Clinical Decision Support System (CDSS)

MedAssist AI is a state-of-the-art Clinical Decision Support System designed to assist healthcare professionals with real-time vitals analysis, AI-driven differential diagnosis, and evidence-based clinical recommendations.

![MedAssist AI Banner](https://img.shields.io/badge/MedAssist_AI-Clinical_Decision_Support-blue?style=for-the-badge&logo=mediamarkt)

## 🚀 Key Features

- **🧠 AI-Powered Diagnosis**: Leveraging Llama-3 (via Groq Cloud) for high-accuracy differential diagnoses based on clinical guidelines.
- **📊 Vitals Analysis**: Comprehensive tracking of SpO2, Heart Rate, Temperature, and Blood Pressure.
- **⚖️ BMI Calculation**: Integrated Body Mass Index assessment for metabolic risk evaluation.
- **🚨 Severity Assessment**: Real-time risk stratification with automated "Doctor Alerts" for critical cases.
- **🔒 Secure Authentication**: Dual-layer security with JWT-based local auth and Google OAuth 2.0 integration.
- **🎨 Modern Dashboard**: Beautifully designed UI with interactive charts (Recharts) and Tailwind CSS 4.

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 19 + Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4 (with @react-oauth/google)
- **Visualization**: Recharts

### Backend
- **API Framework**: FastAPI (Python 3.10+)
- **AI Engine**: Groq Cloud SDK (Llama series)
- **Database**: SQLite
- **Security**: JWT (passlib, python-jose), Google Auth Library

## 📂 Project Structure

```text
cdss/
├── backend/            # FastAPI Backend
│   ├── api/            # API Routes & Auth Utilities
│   ├── rules/          # Clinical Logic & AI Handlers
│   ├── main.py         # Entry point
│   └── users.db        # SQLite Database
└── frontend/           # React Frontend
    ├── src/            # Source Code
    │   ├── components/ # Reusable UI Components
    │   └── pages/      # Main Application Pages
    └── index.html      # Entry Template
```

## ⚙️ Getting Started

### Prerequisites
- Python 3.10 or higher
- Node.js 18 or higher
- Groq API Key (from [Groq Console](https://console.groq.com/))
- Google Client ID (optional, for Google Login)

### 1. Backend Setup
1. Navigate to the backend directory: `cd backend`
2. Create a virtual environment: `python -m venv .venv`
3. Activate the environment: `.\.venv\Scripts\activate` (Windows)
4. Install dependencies: `pip install fastapi uvicorn passlib[bcrypt] python-multipart python-jose[cryptography] groq google-auth requests pydantic`
5. Create a `.env` file (or set environment variables):
   ```env
   GROQ_API_KEY=your_groq_api_key_here
   GOOGLE_CLIENT_ID=your_google_client_id_here
   ```
6. Run the server: `python main.py`

### 2. Frontend Setup
1. Navigate to the frontend directory: `cd frontend`
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`

## 🩺 Clinical Logic
The system uses a robust reasoning framework defined in `backend/rules/ai_handler.py`. It evaluates patient data against established clinical standards for:
- Fever-dominant presentations (Infection vs. Viral)
- Respiratory distress (Pneumonia vs. URI)
- Cardiovascular status (Hypertension vs. Hypotension)
- Neurological symptoms

## 📜 License
This project is licensed under the MIT License - see the LICENSE file for details.

---
*Disclaimer: This system is for educational and supportive purposes only and should not replace professional medical judgment.*
