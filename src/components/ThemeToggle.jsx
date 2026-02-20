import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="relative p-2.5 rounded-xl glass hover:scale-110 active:scale-95 transition-all duration-300 group"
            aria-label="Toggle theme"
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={theme}
                    initial={{ y: -20, opacity: 0, rotate: -90 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: 20, opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.3, ease: "backOut" }}
                >
                    {theme === 'light' ? (
                        <Sun size={20} className="text-amber-500 group-hover:rotate-45 transition-transform duration-500" />
                    ) : (
                        <Moon size={20} className="text-blue-400 group-hover:-rotate-12 transition-transform duration-500" />
                    )}
                </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 rounded-xl bg-blue-400/0 group-hover:bg-blue-400/5 transition-colors"></div>
        </button>
    );
};

export default ThemeToggle;
