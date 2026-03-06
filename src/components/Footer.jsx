import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, X, Github, Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import ContactModal from './ContactModal';

const Footer = () => {
    const { theme } = useTheme();
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    return (
        <footer className="bg-slate-100 dark:bg-slate-900/40 pt-16 pb-12 px-6 border-t border-slate-200 dark:border-slate-800 transition-colors duration-500">
            <div className="max-w-9xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-10 mb-12">
                    {/* Brand Section */}
                    <div className="col-span-1 sm:col-span-2 lg:col-span-7 flex flex-col items-center md:items-start text-center md:text-left">
                        <Link to="/" className="flex items-center space-x-3 mb-4 group cursor-pointer">
                            <img
                                src={theme === 'dark' ? "img/2.png" : "img/1.png"}
                                alt="QuantumVault Logo"
                                className="h-8 w-auto object-contain transition-all duration-300"
                            />
                            <span className="text-xl font-bold tracking-tight">QuantumVault</span>
                        </Link>
                        <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
                            Post-quantum cryptography as a service. Built for the quantum era.
                        </p>

                        {/* Social Media Icons */}
                        <div className="flex items-center gap-3 mt-6">
                            <a
                                href="https://www.linkedin.com/company/89940681/admin/dashboard/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-brand-primary hover:text-brand-primary dark:hover:border-brand-primary dark:hover:text-brand-primary transition-colors duration-200"
                            >
                                <Linkedin size={16} />
                            </a>
                            <a
                                href="https://x.com/Secure_DApp?s=20"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Twitter / X"
                                className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-brand-primary hover:text-brand-primary dark:hover:border-brand-primary dark:hover:text-brand-primary transition-colors duration-200"
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                                </svg>
                            </a>
                            <a
                                href="https://share.google/mtAIKzt8PNMQ76ezY"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-brand-primary hover:text-brand-primary dark:hover:border-brand-primary dark:hover:text-brand-primary transition-colors duration-200"
                            >
                                <Github size={16} />
                            </a>
                            <a
                                href="mailto:hello@securedapp.in"
                                aria-label="Email"
                                className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-brand-primary hover:text-brand-primary dark:hover:border-brand-primary dark:hover:text-brand-primary transition-colors duration-200"
                            >
                                <Mail size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Product */}
                    <div className="col-span-1 lg:col-span-1.5 text-sm">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-4">
                            <a href="/#features" className="hover:text-brand-accent transition-colors">Product</a>
                        </h4>
                        <ul className="space-y-2.5 text-slate-500 text-[13px]">
                            <li><a href="/#features" className="hover:text-brand-accent transition-colors">Features</a></li>
                            <li><a href="/#resources" className="hover:text-brand-accent transition-colors">PQC APIs</a></li>
                            <li><a href="/#pricing" className="hover:text-brand-accent transition-colors">Pricing</a></li>
                            <li><Link to="/documentation" className="hover:text-brand-accent transition-colors">Documentation</Link></li>
                        </ul>
                    </div>

                    {/* Solutions */}
                    <div className="col-span-1 lg:col-span-1.5 text-sm">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-4">
                            <a href="/#solutions" className="hover:text-brand-accent transition-colors">Solutions</a>
                        </h4>
                        <ul className="space-y-2.5 text-slate-500 text-[13px]">
                            <li><a href="/#solutions" className="hover:text-brand-accent transition-colors">Financial Services</a></li>
                            <li><a href="/#solutions" className="hover:text-brand-accent transition-colors">Healthcare</a></li>
                            <li><a href="/#solutions" className="hover:text-brand-accent transition-colors">Government</a></li>
                            <li><a href="/#solutions" className="hover:text-brand-accent transition-colors">Cloud & SaaS</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="col-span-1 lg:col-span-1.5 text-sm">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-4">
                            <a href="/#resources" className="hover:text-brand-accent transition-colors">Resources</a>
                        </h4>
                        <ul className="space-y-2.5 text-slate-500 text-[13px]">
                            <li><a href="#" className="hover:text-brand-accent transition-colors">Blog</a></li>
                            <li><a href="/#features" className="hover:text-brand-accent transition-colors">Security Architecture</a></li>
                            <li><a href="/#compliance" className="hover:text-brand-accent transition-colors">Compliance</a></li>
                            <li><a href="/#faq" className="hover:text-brand-accent transition-colors">FAQ</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="col-span-1 lg:col-span-1 text-sm">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-4">Company</h4>
                        <ul className="space-y-2.5 text-slate-500 text-[13px]">
                            <li><Link to="/about" className="hover:text-brand-accent transition-colors">About</Link></li>
                            <li>
                                <button
                                    onClick={() => setIsContactModalOpen(true)}
                                    className="hover:text-brand-accent transition-colors cursor-pointer outline-none"
                                >
                                    Contact
                                </button>
                            </li>
                            <li><Link to="/careers" className="hover:text-brand-accent transition-colors">Careers</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="col-span-1 lg:col-span-1.5 text-sm">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-4">Legal</h4>
                        <ul className="space-y-2.5 text-slate-500 text-[13px]">
                            <li><a href="#" className="hover:text-brand-accent transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-brand-accent transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-brand-accent transition-colors">Security Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
                    <p className="text-slate-500 text-sm font-medium">
                        © 2026 QuantumVault. All rights reserved.
                    </p>
                </div>
            </div>

            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
        </footer>
    );
};

export default Footer;
