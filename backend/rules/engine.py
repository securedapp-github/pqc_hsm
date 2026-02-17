from rules.ai_handler import generate_diagnosis


# ===========================
# 🚨 Emergency detection (safe with missing vitals)
# ===========================

def high_risk(data):

    if data.spo2 is not None and data.spo2 < 92:
        return "Oxygen level dangerously low"

    if data.temperature is not None and data.temperature >= 104:
        return "Extremely high fever"

    if data.fever_duration_hours > 72:
        return "Fever lasting too long"

    if data.heart_rate is not None and data.heart_rate > 120:
        return "Tachycardia (High heart rate)"

    if data.bp_systolic is not None and data.bp_systolic >= 180:
        return "Hypertensive Crisis (Extremely High BP)"
    
    if data.bp_diastolic is not None and data.bp_diastolic >= 120:
        return "Hypertensive Crisis (Extremely High BP)"

    return None


# ===========================
# 📊 Severity calculation (hybrid logic)
# ===========================

def get_severity(data):

    # Use vitals if present
    if data.spo2 is not None and data.spo2 < 94:
        return "Severe"

    if data.temperature is not None and data.temperature >= 103:
        return "Severe"

    if data.heart_rate is not None and (data.heart_rate > 110 or data.heart_rate < 50):
        return "Severe"

    if data.bp_systolic is not None and data.bp_systolic >= 160:
        return "Severe"

    if data.bp_diastolic is not None and data.bp_diastolic >= 100:
        return "Severe"

    # Symptom-based fallback
    if data.temperature is not None and data.temperature >= 100:
        return "Moderate"

    if data.fever_duration_hours > 24 or data.body_pain or data.fatigue:
        return "Moderate"

    if data.bp_systolic is not None and data.bp_systolic >= 140:
        return "Moderate"

    if data.bp_diastolic is not None and data.bp_diastolic >= 90:
        return "Moderate"

    return "Mild"


# ===========================
# 🩺 Main AI engine
# ===========================

def evaluate_patient(data):

    # 🚑 1. Emergency always first (Deterministic Safety Layer)
    danger = high_risk(data)
    if danger:
        return {
            "condition": "Emergency risk",
            "severity": "Severe",
            "medicines": [],
            "advice": [
                danger,
                "Seek immediate medical care"
            ],
            "doctor_alert": True
        }

    severity = get_severity(data)

    # 🤖 2. Primary: AI-Driven Diagnosis
    patient_dict = data.dict() if hasattr(data, 'dict') else vars(data)
    ai_result = generate_diagnosis(patient_dict, severity)
    
    if ai_result:
        return ai_result

    # 🤷 3. Safe fallback (If AI fails)
    return {
        "condition": "AI Engine Busy",
        "severity": severity,
        "medicines": [
            {
                "name": "General Wellness Advice",
                "dosage": "As needed",
                "duration": "Until better"
            }
        ],
        "advice": [
            "Your AI assistant is currently over-taxed.",
            "Please rest and stay hydrated.",
            "If symptoms persist or worsen, consult a doctor immediately."
        ],
        "doctor_alert": True
    }
