import { useState } from "react";
import robotDoctor from "../assets/robot_doctor.png";

export default function HealthForm({ onResult, user, onAuthRequest }: any) {

    const [form, setForm] = useState({
        age: "",
        temperature: "",
        spo2: "",
        headache: false,
        body_pain: false,
        cough: false,
        vomiting: false,
        dizziness: false,
        fatigue: false,
        fever_duration_hours: "",
        height: "",
        weight: "",
        heart_rate: "",
        bp_systolic: "",
        bp_diastolic: ""
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async () => {
        setIsLoading(true);
        try {
            const cleanData = {
                ...form,
                temperature: form.temperature ? Number(form.temperature) : null,
                spo2: form.spo2 ? Number(form.spo2) : null,
                height: form.height ? Number(form.height) : null,
                weight: form.weight ? Number(form.weight) : null,
                heart_rate: form.heart_rate ? Number(form.heart_rate) : null,
                bp_systolic: form.bp_systolic ? Number(form.bp_systolic) : null,
                bp_diastolic: form.bp_diastolic ? Number(form.bp_diastolic) : null,
                age: Number(form.age),
                fever_duration_hours: Number(form.fever_duration_hours)
            };

            const res = await fetch("http://127.0.0.1:8000/evaluate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(cleanData)
            });

            onResult(await res.json());
        } catch (error) {
            console.error("Error analyzing health:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-16 gap-8 min-h-[80vh] relative">

            {/* Hero Section with Robot */}
            <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
                <div className="relative animate-float">
                    {/* Professional 3D Robot Doctor Image */}
                    <img
                        src={robotDoctor}
                        alt="Dr. Bot"
                        className="w-64 h-auto drop-shadow-[0_20px_50px_rgba(var(--color-primary),0.3)]"
                    />
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-32 h-4 bg-black/10 blur-xl rounded-[100%]"></div>
                </div>

                <div>
                    <h1 className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] mb-4">
                        Hello, I'm Dr. Bot
                    </h1>
                    <div className="space-y-4">
                        <p className="text-2xl font-bold text-[rgb(var(--color-text-main))] italic">
                            "Welcome, {user?.username || 'Guest'}!"
                        </p>
                        <p className="text-xl text-[rgb(var(--color-text-muted))] max-w-md">
                            I'm your AI health companion. I'm here to help analyze your symptoms and provide quick medical insights. Let's check your vitals together.
                        </p>
                    </div>
                </div>
            </div>

            {/* Health Form Card */}
            <div className="w-full max-w-md lg:w-1/2">
                <div className="glass-card p-8 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))]"></div>

                    <h2 className="text-2xl font-bold mb-6 text-[rgb(var(--color-text-main))] flex items-center gap-2">
                        <svg className="w-6 h-6 text-[rgb(var(--color-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Patient Details
                    </h2>

                    <div className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-[rgb(var(--color-text-muted))] mb-1 flex items-center gap-1.5">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                Age
                            </label>
                            <div className="relative">
                                <input
                                    type="number"
                                    className="w-full bg-[rgba(var(--color-bg-main),0.5)] border border-[rgba(var(--color-text-muted),0.2)] rounded-lg px-4 py-3 focus:ring-2 focus:ring-[rgb(var(--color-primary))] focus:border-transparent outline-none transition-all placeholder-[rgba(var(--color-text-muted),0.4)]"
                                    value={form.age}
                                    onFocus={() => !user && onAuthRequest()}
                                    onChange={e => setForm({ ...form, age: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-[rgb(var(--color-text-muted))] mb-1 flex items-center gap-1.5">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                                    </svg>
                                    Height (cm)
                                </label>
                                <input
                                    type="number"
                                    value={form.height}
                                    onFocus={() => !user && onAuthRequest()}
                                    className="w-full bg-[rgba(var(--color-bg-main),0.5)] border border-[rgba(var(--color-text-muted),0.2)] rounded-lg px-4 py-3 focus:ring-2 focus:ring-[rgb(var(--color-primary))] outline-none transition-all"
                                    onChange={e => setForm({ ...form, height: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[rgb(var(--color-text-muted))] mb-1 flex items-center gap-1.5">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                    </svg>
                                    Weight (kg)
                                </label>
                                <input
                                    type="number"
                                    value={form.weight}
                                    onFocus={() => !user && onAuthRequest()}
                                    className="w-full bg-[rgba(var(--color-bg-main),0.5)] border border-[rgba(var(--color-text-muted),0.2)] rounded-lg px-4 py-3 focus:ring-2 focus:ring-[rgb(var(--color-primary))] outline-none transition-all"
                                    onChange={e => setForm({ ...form, weight: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-[rgb(var(--color-text-muted))] mb-1 flex items-center gap-1.5">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                    Temp (°F)
                                </label>
                                <input
                                    type="number"
                                    value={form.temperature}
                                    onFocus={() => !user && onAuthRequest()}
                                    className="w-full bg-[rgba(var(--color-bg-main),0.5)] border border-[rgba(var(--color-text-muted),0.2)] rounded-lg px-4 py-3 focus:ring-2 focus:ring-[rgb(var(--color-primary))] outline-none transition-all"
                                    onChange={e => setForm({ ...form, temperature: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[rgb(var(--color-text-muted))] mb-1 flex items-center gap-1.5">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                    SpO₂ (%)
                                </label>
                                <input
                                    type="number"
                                    value={form.spo2}
                                    onFocus={() => !user && onAuthRequest()}
                                    className="w-full bg-[rgba(var(--color-bg-main),0.5)] border border-[rgba(var(--color-text-muted),0.2)] rounded-lg px-4 py-3 focus:ring-2 focus:ring-[rgb(var(--color-primary))] outline-none transition-all"
                                    onChange={e => setForm({ ...form, spo2: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-[rgb(var(--color-text-muted))] mb-1 flex items-center gap-1.5">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                    Heart Rate (BPM)
                                </label>
                                <input
                                    type="number"
                                    value={form.heart_rate}
                                    onFocus={() => !user && onAuthRequest()}
                                    className="w-full bg-[rgba(var(--color-bg-main),0.5)] border border-[rgba(var(--color-text-muted),0.2)] rounded-lg px-4 py-3 focus:ring-2 focus:ring-[rgb(var(--color-primary))] outline-none transition-all"
                                    onChange={e => setForm({ ...form, heart_rate: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[rgb(var(--color-text-muted))] mb-1 flex items-center gap-1.5">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                    BP (Sys/Dia)
                                </label>
                                <div className="flex items-center gap-2">
                                    <input
                                        type="number"
                                        placeholder="Sys"
                                        value={form.bp_systolic}
                                        onFocus={() => !user && onAuthRequest()}
                                        className="w-1/2 bg-[rgba(var(--color-bg-main),0.5)] border border-[rgba(var(--color-text-muted),0.2)] rounded-lg px-2 py-3 focus:ring-2 focus:ring-[rgb(var(--color-primary))] outline-none transition-all placeholder:text-[10px]"
                                        onChange={e => setForm({ ...form, bp_systolic: e.target.value })}
                                    />
                                    <span className="text-[rgb(var(--color-text-muted))]">/</span>
                                    <input
                                        type="number"
                                        placeholder="Dia"
                                        value={form.bp_diastolic}
                                        onFocus={() => !user && onAuthRequest()}
                                        className="w-1/2 bg-[rgba(var(--color-bg-main),0.5)] border border-[rgba(var(--color-text-muted),0.2)] rounded-lg px-2 py-3 focus:ring-2 focus:ring-[rgb(var(--color-primary))] outline-none transition-all placeholder:text-[10px]"
                                        onChange={e => setForm({ ...form, bp_diastolic: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-[rgb(var(--color-text-muted))] mb-3 flex items-center gap-1.5">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                                Symptoms
                            </label>
                            <div className="grid grid-cols-2 gap-3">
                                {["headache", "body_pain", "cough", "vomiting", "dizziness", "fatigue"].map(sym => (
                                    <label key={sym}
                                        onClick={() => !user && onAuthRequest()}
                                        className={`
                    flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all
                    ${(form as any)[sym]
                                                ? "bg-[rgba(var(--color-primary),0.1)] border-[rgb(var(--color-primary))]"
                                                : "bg-[rgba(var(--color-bg-main),0.3)] border-[rgba(var(--color-text-muted),0.2)] hover:border-[rgba(var(--color-primary),0.5)]"
                                            }
                  `}>
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4 rounded text-[rgb(var(--color-primary))]"
                                            checked={(form as any)[sym]}
                                            onChange={e => setForm({ ...form, [sym]: e.target.checked })}
                                        />
                                        <span className="capitalize font-medium text-[rgb(var(--color-text-main))] text-sm">
                                            {sym.replace("_", " ")}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-[rgb(var(--color-text-muted))] mb-1 flex items-center gap-1.5">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Fever Duration (hours)
                            </label>
                            <input
                                type="number"
                                value={form.fever_duration_hours}
                                onFocus={() => !user && onAuthRequest()}
                                className="w-full bg-[rgba(var(--color-bg-main),0.5)] border border-[rgba(var(--color-text-muted),0.2)] rounded-lg px-4 py-3 focus:ring-2 focus:ring-[rgb(var(--color-primary))] outline-none transition-all"
                                onChange={e => setForm({ ...form, fever_duration_hours: e.target.value })}
                            />
                        </div>

                        <button
                            onClick={handleSubmit}
                            disabled={isLoading}
                            className="w-full btn-primary py-3.5 rounded-xl font-bold text-lg mt-4 flex justify-center items-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <div className="flex items-center gap-2">
                                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Analyzing...
                                </div>
                            ) : (
                                <>
                                    Analyze Health
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
