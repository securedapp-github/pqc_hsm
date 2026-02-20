import React from 'react';
import { Atom } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-100 dark:bg-slate-900/40 pt-16 pb-12 px-4 border-t border-slate-200 dark:border-slate-800 transition-colors duration-500">
            <div className="max-w-9xl mx-auto px-20">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-10 mb-12">
                    {/* Brand Section */}
                    <div className="col-span-2 lg:col-span-5 text-left">
                        <a href="#home" className="flex items-center space-x-3 mb-4 group cursor-pointer">
                            <Atom className="text-blue-600 dark:text-blue-400" size={28} />
                            <span className="text-xl font-bold tracking-tight">QuantumVault</span>
                        </a>
                        <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
                            Post-quantum cryptography as a service. Built for the quantum era.
                        </p>
                    </div>

                    {/* Columns */}
                    <div className="col-span-1 lg:col-span-2 text-sm lg:text-[15px]">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-4">Product</h4>
                        <ul className="space-y-2.5 text-slate-500">
                            <li><a href="#features" className="hover:text-blue-600 transition-colors">Features</a></li>
                            <li><a href="#pricing" className="hover:text-blue-600 transition-colors">Pricing</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Documentation</a></li>
                        </ul>
                    </div>

                    <div className="col-span-1 lg:col-span-2 text-sm lg:text-[15px]">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-4">Company</h4>
                        <ul className="space-y-2.5 text-slate-500">
                            <li><a href="#" className="hover:text-blue-600 transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div className="col-span-2 md:col-span-1 lg:col-span-3 text-sm lg:text-[15px]">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-4">Legal</h4>
                        <ul className="space-y-2.5 text-slate-500">
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Security</a></li>
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
