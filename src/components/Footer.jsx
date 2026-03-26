import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, X, Github, Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
    const { theme } = useTheme();

    return (
        <footer className="bg-slate-100 dark:bg-slate-900/40 pt-16 pb-12 px-6 border-t border-slate-200 dark:border-slate-800 transition-colors duration-500">
            <div className="max-w-9xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-10 mb-12">
                    {/* Brand Section - Hidden on mobile, shown on desktop */}
                    <div className="hidden md:flex col-span-1 sm:col-span-2 lg:col-span-7 flex-col items-center md:items-start text-center md:text-left">
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

                        {/* Social Media Icons (Desktop) */}
                        <div className="flex items-center gap-3 mt-6">
                            <SocialIcons />
                        </div>
                    </div>

                    {/* Footer Sections */}
                    <FooterSection 
                        title="Product" 
                        links={[
                            { label: "Features", href: "/#features" },
                            { label: "PQC APIs", href: "/#resources" },
                            { label: "Pricing", href: "/#pricing" },
                            { label: "Documentation", href: "/documentation", isLink: true }
                        ]} 
                    />

                    <FooterSection 
                        title="Solutions" 
                        links={[
                            { label: "Financial Services", href: "/#solutions" },
                            { label: "Healthcare", href: "/#solutions" },
                            { label: "Government", href: "/#solutions" },
                            { label: "Cloud & SaaS", href: "/#solutions" }
                        ]} 
                    />

                    <FooterSection 
                        title="Resources" 
                        links={[
                            { label: "Blog", href: "#" },
                            { label: "Security Architecture", href: "/#features" },
                            { label: "Compliance", href: "/#compliance" },
                            { label: "FAQ", href: "/#faq" }
                        ]} 
                    />

                    <FooterSection 
                        title="Company" 
                        links={[
                            { label: "About", href: "/about", isLink: true },
                            { label: "Contact", href: "/#contact" },
                            { label: "Careers", href: "/careers", isLink: true }
                        ]} 
                    />

                    <FooterSection 
                        title="Legal" 
                        links={[
                            { label: "Privacy Policy", href: "/privacy-policy", isLink: true },
                            { label: "Terms of Service", href: "/terms-of-service", isLink: true },
                            { label: "Security Policy", href: "/security-policy", isLink: true }
                        ]} 
                    />
                </div>

                {/* Social Media Icons (Mobile Only) */}
                <div className="flex md:hidden items-center justify-center gap-6 mt-4 mb-10 pb-8 border-b border-slate-200 dark:border-slate-800">
                    <SocialIcons />
                </div>

                <div className="pt-8 text-center">
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4 md:hidden">
                       <Link to="/privacy-policy" className="text-xs text-slate-500 hover:text-brand-primary">Privacy Policy</Link>
                       <Link to="/terms-of-service" className="text-xs text-slate-500 hover:text-brand-primary">Terms & Conditions</Link>
                    </div>
                    <p className="text-slate-500 text-[10px] md:text-sm font-medium">
                        © 2026 QuantumVault. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

const FooterSection = ({ title, links }) => (
    <div className="col-span-1 lg:col-span-1.5">
        <h4 className="font-bold text-slate-900 dark:text-white mb-4 text-sm md:text-base">
            {title}
        </h4>
        <ul className="space-y-2 md:space-y-2.5 text-slate-500 text-xs md:text-[13px]">
            {links.map((link, i) => (
                <li key={i}>
                    {link.isLink ? (
                        <Link to={link.href} className="hover:text-brand-accent transition-colors">{link.label}</Link>
                    ) : (
                        <a href={link.href} className="hover:text-brand-accent transition-colors">{link.label}</a>
                    )}
                </li>
            ))}
        </ul>
    </div>
);

const SocialIcons = () => (
    <>
        <a
            href="https://www.linkedin.com/company/89940681/admin/dashboard/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-brand-primary hover:text-brand-primary transition-colors duration-200"
        >
            <Linkedin size={16} />
        </a>
        <a
            href="https://x.com/Secure_DApp?s=20"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter / X"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-brand-primary hover:text-brand-primary transition-colors duration-200"
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
            className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-brand-primary hover:text-brand-primary transition-colors duration-200"
        >
            <Github size={16} />
        </a>
        <a
            href="mailto:hello@securedapp.in"
            aria-label="Email"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-brand-primary hover:text-brand-primary transition-colors duration-200"
        >
            <Mail size={16} />
        </a>
    </>
);

export default Footer;
