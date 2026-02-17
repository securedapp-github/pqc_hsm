import { useState, useEffect } from "react";

interface NavigationProps {
    user?: any;
    onLogout?: () => void;
    onAuthRequest?: () => void;
}

export default function Navigation({ user, onLogout, onAuthRequest }: NavigationProps) {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDark(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        if (isDark) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
            setIsDark(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
            setIsDark(true);
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-[rgba(var(--color-primary),0.1)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onClick={() => window.location.reload()}>
                        <div className="bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] p-1.5 rounded-lg shadow-lg">
                            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="11" width="18" height="10" rx="2" />
                                <circle cx="12" cy="5" r="2" />
                                <path d="M12 7v4" />
                                <line x1="8" y1="16" x2="8" y2="16" />
                                <line x1="16" y1="16" x2="16" y2="16" />
                            </svg>
                        </div>
                        <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))]">
                            AI Health Assistant
                        </span>
                    </div>

                    <div className="flex items-center gap-4">
                        {user && (
                            <div className="hidden sm:flex items-center gap-3 px-4 py-1.5 rounded-full bg-[rgba(var(--color-primary),0.1)] border border-[rgba(var(--color-primary),0.2)]">
                                <span className="text-xs font-bold text-[rgb(var(--color-primary))] uppercase tracking-widest">Active session</span>
                                <span className="text-sm font-bold text-[rgb(var(--color-text-main))]">{user.username}</span>
                            </div>
                        )}

                        {!user && (
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={onAuthRequest}
                                    className="px-4 py-1.5 text-sm font-bold text-[rgb(var(--color-text-main))] hover:text-[rgb(var(--color-primary))] transition-colors"
                                >
                                    Login
                                </button>
                                <button
                                    onClick={onAuthRequest}
                                    className="btn-primary px-5 py-1.5 rounded-full text-sm font-bold shadow-lg shadow-[rgb(var(--color-primary))/20]"
                                >
                                    Sign up
                                </button>
                            </div>
                        )}

                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-[rgba(var(--color-text-muted),0.1)] transition-colors duration-200 focus:outline-none"
                            aria-label="Toggle Dark Mode"
                        >
                            {isDark ? (
                                <svg className="w-6 h-6 text-[rgb(var(--color-accent))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6 text-[rgb(var(--color-secondary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            )}
                        </button>

                        {user && (
                            <button
                                onClick={onLogout}
                                className="text-sm font-bold text-red-500 hover:text-red-600 transition-colors flex items-center gap-1"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                                <span className="hidden xs:inline">Logout</span>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
