import React from 'react';
import { Atom, Linkedin, X, Github, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-100 dark:bg-slate-900/40 pt-16 pb-12 px-4 border-t border-slate-200 dark:border-slate-800 transition-colors duration-500">
            <div className="max-w-9xl mx-auto px-20">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-10 mb-12">
                    {/* Brand Section */}
                    <div className="col-span-2 lg:col-span-7 text-left">
                        <a href="#home" className="flex items-center space-x-3 mb-4 group cursor-pointer">
                            <Atom className="text-blue-600 dark:text-blue-400" size={28} />
                            <span className="text-xl font-bold tracking-tight">QuantumVault</span>
                        </a>
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
                                className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors duration-200"
                            >
                                <Linkedin size={16} />
                            </a>
                            <a
                                href="https://x.com/Secure_DApp?s=20"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Twitter / X"
                                className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors duration-200"
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
                                className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors duration-200"
                            >
                                <Github size={16} />
                            </a>
                            <a
                                href="mailto:hello@securedapp.in"
                                aria-label="Email"
                                className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors duration-200"
                            >
                                <Mail size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Product */}
                    <div className="col-span-1 lg:col-span-1.5 text-sm">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-4">
                            <a href="#features" className="hover:text-blue-600 transition-colors">Product</a>
                        </h4>
                        <ul className="space-y-2.5 text-slate-500 text-[13px]">
                            <li><a href="#features" className="hover:text-blue-600 transition-colors">Features</a></li>
                            <li><a href="#resources" className="hover:text-blue-600 transition-colors">PQC APIs</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Managed Key Services</a></li>
                            <li><a href="#pricing" className="hover:text-blue-600 transition-colors">Pricing</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Documentation</a></li>
                        </ul>
                    </div>

                    {/* Solutions */}
                    <div className="col-span-1 lg:col-span-1.5 text-sm">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-4">
                            <a href="#solutions" className="hover:text-blue-600 transition-colors">Solutions</a>
                        </h4>
                        <ul className="space-y-2.5 text-slate-500 text-[13px]">
                            <li><a href="#solutions" className="hover:text-blue-600 transition-colors">Financial Services</a></li>
                            <li><a href="#solutions" className="hover:text-blue-600 transition-colors">Healthcare</a></li>
                            <li><a href="#solutions" className="hover:text-blue-600 transition-colors">Government</a></li>
                            <li><a href="#solutions" className="hover:text-blue-600 transition-colors">Cloud & SaaS</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="col-span-1 lg:col-span-1.5 text-sm">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-4">
                            <a href="#resources" className="hover:text-blue-600 transition-colors">Resources</a>
                        </h4>
                        <ul className="space-y-2.5 text-slate-500 text-[13px]">
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Blog</a></li>
                            <li><a href="#features" className="hover:text-blue-600 transition-colors">Security Architecture</a></li>
                            <li><a href="#compliance" className="hover:text-blue-600 transition-colors">Compliance</a></li>
                            <li><a href="#faq" className="hover:text-blue-600 transition-colors">FAQ</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="col-span-1 lg:col-span-1 text-sm">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-4">Company</h4>
                        <ul className="space-y-2.5 text-slate-500 text-[13px]">
                            <li><a href="#" className="hover:text-blue-600 transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Contact</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Careers</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="col-span-1 lg:col-span-1.5 text-sm">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-4">Legal</h4>
                        <ul className="space-y-2.5 text-slate-500 text-[13px]">
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Security Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
                    <p className="text-slate-500 text-sm font-medium">
                        © 2026 QuantumVault. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
