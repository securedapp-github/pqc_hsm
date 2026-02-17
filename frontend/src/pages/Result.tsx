export default function Result({ result, onBack }: any) {

    const getSeverityStyle = (severity: string) => {
        switch (severity?.toLowerCase()) {
            case "severe":
                return "bg-red-100 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-900/50";
            case "moderate":
                return "bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-900/50";
            default:
                return "bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-900/50";
        }
    };

    return (
        <div className="flex justify-center items-center min-h-[70vh]">
            <div className="glass-card w-full max-w-2xl rounded-2xl overflow-hidden animate-float" style={{ animationDuration: '8s' }}>

                {/* Header / Condition */}
                <div className="bg-[rgba(var(--color-bg-main),0.5)] p-8 border-b border-[rgba(var(--color-text-muted),0.1)]">
                    <div className="flex justify-between items-start gap-4 flex-wrap">
                        <div>
                            <h2 className="text-sm font-semibold text-[rgb(var(--color-text-muted))] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                Diagnosis
                            </h2>
                            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))]">
                                {result.condition}
                            </h1>
                        </div>

                        <span className={`px-4 py-1.5 rounded-full text-sm font-bold border ${getSeverityStyle(result.severity)}`}>
                            {result.severity} Severity
                        </span>
                    </div>
                </div>

                <div className="p-8 space-y-8">

                    {/* Medicines Cards */}
                    <div>
                        <h3 className="flex items-center gap-2 text-lg font-bold text-[rgb(var(--color-text-main))] mb-4">
                            <svg className="w-5 h-5 text-[rgb(var(--color-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.691.387a6 6 0 01-3.86.517l-2.387-.477a2 2 0 00-1.022.547l-1.162 1.626a2 2 0 00.339 2.547l.9.72a2 2 0 002.547-.339l1.162-1.626z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11l4-4m0 0l-4-4m4 4H7" />
                            </svg>
                            Prescribed Medicines
                        </h3>

                        <div className="grid gap-4 sm:grid-cols-2">
                            {result.medicines.map((med: any, i: number) => (
                                <div key={i} className="bg-[rgba(var(--color-bg-main),0.5)] p-4 rounded-xl border border-[rgba(var(--color-text-muted),0.1)] hover:border-[rgba(var(--color-primary),0.3)] transition-colors group">
                                    <div className="font-bold text-[rgb(var(--color-primary))] text-lg mb-1 group-hover:translate-x-1 transition-transform">{med.name}</div>
                                    <div className="text-sm text-[rgb(var(--color-text-muted))] flex flex-col gap-1">
                                        <span className="flex items-center gap-1.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[rgb(var(--color-secondary))]"></span>
                                            {med.dosage}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[rgb(var(--color-accent))]"></span>
                                            {med.duration}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Advice List */}
                    <div>
                        <h3 className="flex items-center gap-2 text-lg font-bold text-[rgb(var(--color-text-main))] mb-4">
                            <svg className="w-5 h-5 text-[rgb(var(--color-secondary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Medical Advice
                        </h3>
                        <div className="bg-[rgba(var(--color-bg-main),0.3)] rounded-xl p-6 border border-[rgba(var(--color-text-muted),0.1)]">
                            <ul className="space-y-3">
                                {result.advice.map((a: string, i: number) => (
                                    <li key={i} className="flex items-start gap-3 text-[rgb(var(--color-text-main))]">
                                        <span className="mt-1 text-[rgb(var(--color-primary))] flex-shrink-0">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        <span className="text-[15px] leading-relaxed">{a}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Doctor Alert Warning */}
                    {result.doctor_alert && (
                        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4 flex items-center gap-4 animate-pulse-slow">
                            <div className="bg-red-100 dark:bg-red-900/40 p-2 rounded-lg text-red-600 dark:text-red-400">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-red-700 dark:text-red-400">Consultation Required</h4>
                                <p className="text-sm text-red-600 dark:text-red-300">Please consult a doctor immediately for further evaluation.</p>
                            </div>
                        </div>
                    )}

                    {/* Action Buttons */}
                    <div className="pt-4 flex flex-col gap-3">
                        <button
                            onClick={onBack}
                            className="w-full bg-[rgba(var(--color-text-muted),0.1)] hover:bg-[rgba(var(--color-text-muted),0.2)] text-[rgb(var(--color-text-main))] font-semibold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 group"
                        >
                            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Analyze Another Patient
                        </button>
                        <button
                            className="w-full py-2 text-xs font-medium text-[rgb(var(--color-text-muted))] uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity"
                            onClick={() => window.print()}
                        >
                            Print Prescription
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}
