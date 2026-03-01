import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Atom } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
            }`}>
            <div className="max-w-9xl mx-auto px-10">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="flex items-center space-x-3 group cursor-pointer">
                        <div className="relative">
                            <Atom className="text-[#3b82f6] dark:text-teal-accent" size={28} />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                            QuantumVault
                        </span>
                    </a>

                    <div className="hidden md:flex items-center space-x-8">
                        {['Features', 'Pricing', 'Compliance'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                        <ThemeToggle />
                        <a
                            href="https://app.quantumvault.tech"
                            className="text-white px-4 py-1.5 rounded-md font-bold text-sm hover:opacity-90 transition-all flex items-center justify-center"
                            style={{ backgroundColor: 'rgb(45, 81, 179)' }}
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
                                        href={`#${item.toLowerCase()}`}
                                        className="block px-4 py-3 text-base font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item}
                                    </a>
                                ))}
                                <div className="px-4 py-4">
                                    <a
                                        href="https://app.quantumvault.tech"
                                        className="w-full bg-[#2563eb] text-white py-3 rounded-lg font-bold shadow-lg flex items-center justify-center"
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
