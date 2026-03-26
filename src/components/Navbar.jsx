import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const { theme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${scrolled
            ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md border-slate-200 dark:border-slate-700/60'
            : 'bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/30'
            }`}>
            <div className="max-w-9xl mx-auto px-4 md:px-10">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-1 flex md:hidden items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-slate-600 dark:text-slate-300 -ml-2"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>

                    <Link
                        to="/"
                        onClick={() => {
                            if (location.pathname === '/') {
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }
                        }}
                        className="flex items-center group cursor-pointer absolute left-1/2 -translate-x-1/2 md:relative md:left-0 md:translate-x-0"
                    >
                        <img
                            src={theme === 'dark' ? '/img/3.png' : '/img/4.png'}
                            alt="QuantumVault Logo"
                            className="h-32 md:h-40 w-auto object-contain"
                        />
                    </Link>

                    <div className="flex-1 md:hidden" /> {/* Spacer for right side on mobile */}

                    <div className="hidden md:flex items-center space-x-8">
                        {['Features', 'Pricing', 'Compliance', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`/#${item.toLowerCase()}`}
                                className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                        <ThemeToggle />
                        <a
                            href="https://app.quantumvault.tech"
                            className="bg-brand-primary text-slate-950 px-4 py-1.5 rounded-md font-bold text-sm hover:bg-brand-accent transition-all flex items-center justify-center"
                        >
                            Get Started
                        </a>
                    </div>

                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 overflow-hidden"
                        >
                            <div className="py-4 space-y-1">
                                <div className="px-6 py-2 flex items-center justify-between border-b border-slate-100 dark:border-slate-800 mb-2 pb-4">
                                    <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Settings</span>
                                    <ThemeToggle />
                                </div>
                                {['Features', 'Pricing', 'Compliance', 'Contact'].map((item) => (
                                    <a
                                        key={item}
                                        href={`/#${item.toLowerCase()}`}
                                        className="block px-6 py-3 text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 border-l-4 border-transparent hover:border-brand-primary transition-all"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item}
                                    </a>
                                ))}
                                <div className="px-4 py-4 mt-2">
                                    <a
                                        href="https://app.quantumvault.tech"
                                        className="w-full bg-brand-primary text-slate-950 py-3 rounded-lg font-bold shadow-lg flex items-center justify-center hover:bg-brand-accent transition-all text-sm"
                                    >
                                        Get Started
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
