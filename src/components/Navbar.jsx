import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { BsShieldLockFill } from 'react-icons/bs';
import { FiSun, FiMoon, FiMonitor, FiCheck } from 'react-icons/fi';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  const themes = [
    { id: 'light', icon: FiSun, label: 'Light' },
    { id: 'dark', icon: FiMoon, label: 'Dark' },
    { id: 'navy', icon: FiMoon, label: 'Navy Dark' },
    { id: 'system', icon: FiMonitor, label: 'System' },
  ];

  const currentThemeIcon = themes.find(t => t.id === theme)?.icon || FiSun;

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/80 border-b border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <BsShieldLockFill className="text-primary w-6 h-6" />
            <span className="font-bold text-lg tracking-tight text-foreground">
              SecuredApp <span className="text-muted-foreground font-normal">QuantumHSM</span>
            </span>
          </div>

          {/* Theme Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-foreground/5 transition-colors text-foreground/80 focus:outline-none"
              aria-label="Theme Menu"
            >
              <FiSun className="w-5 h-5 hidden dark:hidden" />
              <FiMoon className="w-5 h-5 hidden dark:block" />
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-lg bg-card text-card-foreground shadow-lg border border-border py-1 z-50 animate-in fade-in zoom-in-95 duration-200">
                {themes.map((t) => {
                  const Icon = t.icon;
                  const isActive = theme === t.id;
                  return (
                    <button
                      key={t.id}
                      onClick={() => {
                        setTheme(t.id);
                        setIsOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-sm flex items-center gap-3 transition-colors ${
                        isActive 
                          ? 'bg-primary/10 text-primary font-medium' 
                          : 'text-foreground/80 hover:bg-muted'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="flex-1">{t.label}</span>
                      {isActive && <FiCheck className="w-4 h-4 text-primary" />}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
