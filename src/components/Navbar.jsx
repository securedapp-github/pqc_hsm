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
            <div className="max-w-9xl mx-auto px-10">
                <div className="flex justify-between items-center h-16">
                    <Link
                        to="/"
                        onClick={() => {
                            if (location.pathname === '/') {
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }
                        }}
                        className="flex items-center group cursor-pointer"
                    >
                        <img
                            src={theme === 'dark' ? '/img/3.png' : '/img/4.png'}
                            alt="QuantumVault Logo"
                            className="h-40 w-auto object-contain"
                        />
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        {['Features', 'Pricing', 'Compliance'].map((item) => (
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

                    <div className="md:hidden flex items-center space-x-4">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-slate-600 dark:text-slate-300"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
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
                                {['Features', 'Pricing', 'Compliance'].map((item) => (
                                    <a
                                        key={item}
                                        href={`/#${item.toLowerCase()}`}
                                        className="block px-6 py-4 text-lg font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 border-l-4 border-transparent hover:border-brand-primary transition-all"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item}
                                    </a>
                                ))}
                                <div className="px-4 py-4">
                                    <a
                                        href="https://app.quantumvault.tech"
                                        className="w-full bg-brand-primary text-slate-950 py-3 rounded-lg font-bold shadow-lg flex items-center justify-center hover:bg-brand-accent transition-all"
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
