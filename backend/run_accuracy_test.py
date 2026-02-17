import sys, os, json, time
sys.path.append(os.path.abspath("c:/Users/Asus-2025/Documents/SecuredApp/cdss/backend"))
from rules.ai_handler import generate_diagnosis, model_name

print("Model:", model_name)

tests = [
    ("Viral Fever", {"age":28,"temperature":101.5,"spo2":98,"heart_rate":88,"bp_systolic":120,"bp_diastolic":80,"headache":True,"body_pain":True,"cough":False,"vomiting":False,"dizziness":False,"fatigue":True,"fever_duration_hours":24,"height":175,"weight":70}, "Moderate", ["viral","fever","flu","influenza"]),
    ("Respiratory Infection", {"age":45,"temperature":102.0,"spo2":95,"heart_rate":95,"bp_systolic":130,"bp_diastolic":85,"headache":True,"body_pain":True,"cough":True,"vomiting":False,"dizziness":False,"fatigue":True,"fever_duration_hours":72,"height":165,"weight":80}, "Severe", ["respiratory","bronchitis","cold","pharyngitis","flu","influenza","pneumonia"]),
    ("Mild Cold", {"age":22,"temperature":99.5,"spo2":99,"heart_rate":72,"bp_systolic":115,"bp_diastolic":75,"headache":True,"body_pain":False,"cough":True,"vomiting":False,"dizziness":False,"fatigue":False,"fever_duration_hours":8,"height":180,"weight":65}, "Mild", ["cold","mild","rhinitis","respiratory","viral"]),
    ("Gastroenteritis", {"age":35,"temperature":100.5,"spo2":97,"heart_rate":92,"bp_systolic":110,"bp_diastolic":70,"headache":False,"body_pain":True,"cough":False,"vomiting":True,"dizziness":True,"fatigue":True,"fever_duration_hours":12,"height":170,"weight":75}, "Moderate", ["gastroenteritis","food","stomach","gastric","gastrointestinal","viral"]),
    ("Hypertensive+Fever", {"age":55,"temperature":101.0,"spo2":96,"heart_rate":100,"bp_systolic":160,"bp_diastolic":100,"headache":True,"body_pain":True,"cough":False,"vomiting":False,"dizziness":True,"fatigue":True,"fever_duration_hours":36,"height":168,"weight":90}, "Severe", ["hypertens","fever","viral","flu"]),
]

passed = 0
for name, data, sev, expected in tests:
    print(f"\n--- {name} ---")
    r = generate_diagnosis(data, sev)
    if r:
        cond = r.get("condition", "?")
        meds = r.get("medicines", [])
        adv = r.get("advice", [])
        match = any(e in cond.lower() for e in expected)
        ok = match and len(meds) > 0 and len(adv) > 0
        if ok:
            passed += 1
        status = "PASS" if ok else "CHECK"
        print(f"  Condition: {cond} {'[MATCH]' if match else '[MISMATCH]'}")
        print(f"  Meds: {len(meds)} | Advice: {len(adv)} | Status: {status}")
        for m in meds:
            print(f"    - {m.get('name','?')} | {m.get('dosage','?')} | {m.get('duration','?')}")
    else:
        print("  FAIL: None returned")
    time.sleep(1)

print(f"\n=== RESULT: {passed}/{len(tests)} passed ({passed*100//len(tests)}%) ===")
