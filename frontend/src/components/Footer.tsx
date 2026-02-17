export default function Footer() {
    return (
        <footer className="mt-12 py-8 border-t border-[rgba(var(--color-text-muted),0.1)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-sm text-[rgb(var(--color-text-muted))] mb-2">
                    AI Health Assistant provides information for educational purposes only.
                </p>
                <p className="text-xs text-[rgb(var(--color-text-muted))] opacity-75">
                    Always consult a qualified healthcare professional for medical advice, diagnosis, or treatment.
                </p>
                <div className="mt-4 text-xs font-semibold text-[rgb(var(--color-primary))] opacity-80">
                    © {new Date().getFullYear()} AI Health Assistant. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

