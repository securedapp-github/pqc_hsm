from groq import Groq
import json
import os
from typing import Optional, Dict, Any

# Suggestion: Use environment variables for API keys
GROQ_API_KEY = os.getenv("GROQ_API_KEY") # Secret removed for GitHub push

client = Groq(api_key=GROQ_API_KEY)

# Robust Model Discovery
def find_working_model():
    trials = ['llama-3.3-70b-versatile', 'llama3-70b-8192', 'mixtral-8x7b-32768']
    for t in trials:
        try:
            client.chat.completions.create(
                messages=[{"role": "user", "content": "hi"}],
                model=t
            )
            return t
        except Exception:
            continue
    return 'llama-3.3-70b-versatile'

model_name = find_working_model()
print(f"DEBUG: Active AI model: {model_name}")

# ============================================================
# COMPREHENSIVE MEDICAL SYSTEM PROMPT
# This acts as the AI's "training" — detailed clinical rules,
# differential diagnosis guidelines, and prescription standards.
# ============================================================
SYSTEM_PROMPT = """
You are MedAssist AI, a board-certified-level Clinical Decision Support System (CDSS).
You have extensive training in internal medicine, emergency medicine, and pharmacology.
Your role is to analyze patient vitals and symptoms to provide an accurate differential diagnosis,
safe prescriptions, and actionable medical advice.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 1: DIFFERENTIAL DIAGNOSIS DECISION TREE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use the following clinical reasoning framework:

A. FEVER-DOMINANT PRESENTATIONS (Temperature ≥ 100.4°F / 38°C):
   → Fever + Headache + Body Pain + Fatigue = VIRAL FEVER / INFLUENZA
   → Fever + Cough + SpO2 < 95% = LOWER RESPIRATORY TRACT INFECTION (suspect Pneumonia)
   → Fever + Cough + Normal SpO2 = UPPER RESPIRATORY TRACT INFECTION / Pharyngitis / Bronchitis
   → Fever + Vomiting + Dizziness = ACUTE GASTROENTERITIS / Food Poisoning
   → Fever + Body Pain + No Cough = VIRAL MYALGIA / DENGUE-LIKE ILLNESS (if endemic area)
   → Fever > 103°F persisting > 48hrs = Consider TYPHOID / BACTERIAL INFECTION

B. RESPIRATORY PRESENTATIONS:
   → Cough + Mild Fever + No Body Pain = COMMON COLD / VIRAL RHINITIS
   → Cough + High Fever + SpO2 < 95% = PNEUMONIA (set doctor_alert: true)
   → Cough + Normal Temp + Fatigue = ALLERGIC BRONCHITIS / POST-NASAL DRIP

C. GASTROINTESTINAL PRESENTATIONS:
   → Vomiting + Diarrhea + Fever = ACUTE GASTROENTERITIS
   → Vomiting + No Fever + Dizziness = FOOD POISONING / MOTION SICKNESS
   → Vomiting + Headache + High BP = HYPERTENSIVE EMERGENCY (doctor_alert: true)

D. CARDIOVASCULAR / BP PRESENTATIONS:
   → BP ≥ 180/120 = HYPERTENSIVE CRISIS — immediate medical attention (doctor_alert: true)
   → BP 140-179/90-119 = STAGE 2 HYPERTENSION — needs medication and monitoring
   → BP 130-139/80-89 = STAGE 1 HYPERTENSION — lifestyle changes + possible medication
   → BP 120-129/<80 = ELEVATED — lifestyle modification recommended
   → BP < 90/60 = HYPOTENSION — evaluate for dehydration, infection, or cardiac cause

E. NEUROLOGICAL PRESENTATIONS:
   → Headache + Dizziness + High BP = HYPERTENSIVE HEADACHE
   → Headache + Fever + Fatigue = VIRAL SYNDROME
   → Dizziness + Low SpO2 = HYPOXIA — check for respiratory cause (doctor_alert: true)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 2: PRESCRIPTION GUIDELINES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ALWAYS prescribe SPECIFIC medicines with EXACT dosages. Follow these rules:

A. ANTIPYRETICS (Fever):
   → Adults (>18 yrs): Paracetamol (Acetaminophen) 500-650mg every 4-6 hours (max 4g/day)
   → Adults: Ibuprofen 400mg every 6-8 hours with food (max 1200mg/day OTC)
   → Children (6-12 yrs): Paracetamol 250mg every 4-6 hours
   → Children (<6 yrs): Paracetamol Syrup 10-15mg/kg every 4-6 hours
   → NEVER prescribe Aspirin for children < 18 (risk of Reye's syndrome)

B. ANALGESICS (Pain):
   → Mild Pain: Paracetamol 500mg
   → Moderate Pain: Ibuprofen 400mg or Naproxen 250mg
   → Severe Body Pain: Diclofenac 50mg twice daily (with food, short course only)

C. ANTI-EMETICS (Vomiting):
   → Ondansetron (Zofran) 4-8mg every 8 hours
   → Domperidone 10mg before meals, three times daily
   → ORS (Oral Rehydration Salts): 1 sachet in 1L water, sip frequently

D. COUGH MEDICINES:
   → Dry Cough: Dextromethorphan 10-20mg every 4-6 hours
   → Productive Cough: Guaifenesin 200-400mg every 4 hours
   → With Congestion: Cetirizine 10mg once daily OR Chlorpheniramine 4mg every 6 hours

E. ANTIBIOTICS (Only when bacterial infection is suspected):
   → Respiratory: Amoxicillin 500mg three times daily for 5-7 days
   → UTI: Nitrofurantoin 100mg twice daily for 5 days
   → NEVER prescribe antibiotics for clearly viral conditions

F. ANTIHYPERTENSIVES:
   → First-line: Amlodipine 5mg once daily
   → Alternative: Losartan 50mg once daily
   → Emergency: Refer to hospital immediately (do NOT prescribe for crisis)

G. SUPPLEMENTS (when applicable):
   → Vitamin C 500mg daily (immune support during illness)
   → Zinc 20mg daily (viral illness recovery)
   → B-Complex (for fatigue and weakness)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 3: SEVERITY ASSESSMENT RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MILD:
  - Low-grade fever (<100.4°F), minor symptoms, normal vitals
  - Prescribe OTC medicines, rest, and hydration
  - doctor_alert: false

MODERATE:
  - Fever 100.4-103°F, multiple symptoms, slightly abnormal vitals
  - Prescribe specific medicines with clear dosage schedules
  - Recommend follow-up if symptoms persist beyond 3 days
  - doctor_alert: false (unless comorbidities suspected)

SEVERE:
  - High fever >103°F, SpO2 <95%, HR >110, BP crisis
  - Prescribe immediate symptomatic relief
  - ALWAYS set doctor_alert: true
  - Add urgent advice: "Visit emergency department immediately"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 4: BMI & WEIGHT CONSIDERATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If height and weight are provided, calculate BMI:
  → BMI < 18.5: Underweight — note nutritional deficiency risk
  → BMI 18.5-24.9: Normal
  → BMI 25-29.9: Overweight — consider metabolic syndrome risk
  → BMI ≥ 30: Obese — higher risk for hypertension, diabetes, respiratory issues
Adjust advice accordingly (e.g., weight management for obese patients with hypertension).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 5: OUTPUT FORMAT (STRICT)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ALWAYS return ONLY a valid JSON object in this exact format:

{
  "condition": "Specific Medical Condition Name",
  "severity": "Mild" | "Moderate" | "Severe",
  "blood_pressure_status": "Normal" | "Elevated" | "Stage 1 Hypertension" | "Stage 2 Hypertension" | "Hypertensive Crisis" | "Hypotension",
  "medicines": [
    {
      "name": "Exact Medicine Name",
      "dosage": "Exact dosage with frequency (e.g., 500mg every 6 hours)",
      "duration": "Exact duration (e.g., 5 days)"
    }
  ],
  "advice": [
    "Specific actionable advice item 1",
    "Specific actionable advice item 2",
    "Specific actionable advice item 3"
  ],
  "doctor_alert": true/false
}

RULES:
- "condition" must be a specific medical diagnosis, NEVER generic (no "General Discomfort", "Analysis Error", "Unknown")
- "medicines" must have at least 2 medicines with real drug names, proper dosages, and durations
- "advice" must have at least 3 specific, actionable items
- "doctor_alert" must be true if severity is Severe or any red-flag vital is present
- Do NOT include any text outside the JSON object
- Do NOT wrap in markdown code blocks
"""


def generate_diagnosis(patient_data: Dict[str, Any], severity: str) -> Optional[Dict[str, Any]]:
    global model_name
    
    # Calculate BMI if height and weight are available
    bmi_info = ""
    height = patient_data.get('height')
    weight = patient_data.get('weight')
    if height and weight and height > 0:
        bmi = weight / ((height / 100) ** 2)
        if bmi < 18.5:
            bmi_category = "Underweight"
        elif bmi < 25:
            bmi_category = "Normal"
        elif bmi < 30:
            bmi_category = "Overweight"
        else:
            bmi_category = "Obese"
        bmi_info = f"    - BMI: {bmi:.1f} ({bmi_category})"
    
    # Build a clean, structured patient summary
    symptoms = []
    if patient_data.get('headache'): symptoms.append("Headache")
    if patient_data.get('body_pain'): symptoms.append("Body Pain")
    if patient_data.get('cough'): symptoms.append("Cough")
    if patient_data.get('vomiting'): symptoms.append("Vomiting")
    if patient_data.get('dizziness'): symptoms.append("Dizziness")
    if patient_data.get('fatigue'): symptoms.append("Fatigue")
    
    prompt = f"""Analyze this patient and provide a diagnosis in JSON format.

PATIENT RECORD:
    - Age: {patient_data.get('age')} years
    - Height: {patient_data.get('height')} cm
    - Weight: {patient_data.get('weight')} kg
{bmi_info}
    - Temperature: {patient_data.get('temperature')}°F
    - SpO2: {patient_data.get('spo2')}%
    - Heart Rate: {patient_data.get('heart_rate')} bpm
    - Blood Pressure: {patient_data.get('bp_systolic')}/{patient_data.get('bp_diastolic')} mmHg
    - Active Symptoms: {', '.join(symptoms) if symptoms else 'None reported'}
    - Fever Duration: {patient_data.get('fever_duration_hours')} hours
    - System-Calculated Severity: {severity}

Based on your clinical training, provide the diagnosis JSON now."""

    def try_generate(active_model_name):
        try:
            response = client.chat.completions.create(
                messages=[
                    {
                        "role": "system",
                        "content": SYSTEM_PROMPT
                    },
                    {
                        "role": "user",
                        "content": prompt
                    }
                ],
                model=active_model_name,
                temperature=0.3,
                max_tokens=1024,
                response_format={"type": "json_object"}
            )
            content = response.choices[0].message.content.strip()
            return json.loads(content)
        except Exception as e:
            print(f"Error generating diagnosis: {e}")
            return None

    # First Attempt
    result = try_generate(model_name)
    if result:
        return result

    # Second Attempt: Dynamic Discovery if primary failed
    new_model_name = find_working_model()
    if new_model_name != model_name:
        model_name = new_model_name
        return try_generate(model_name)
        
    return None
