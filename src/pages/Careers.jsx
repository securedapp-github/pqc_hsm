import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, Send, ShieldCheck, Cpu, Database, Layout, Search, GraduationCap } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Careers = () => {
    const opportunities = [
        { title: "Post-Quantum Cryptography Engineer", icon: ShieldCheck },
        { title: "Blockchain Security Engineer", icon: Cpu },
        { title: "Hybrid Cryptography Researcher", icon: Search },
        { title: "Web3 Infrastructure Engineer", icon: Database },
        { title: "Security Analyst", icon: Layout },
        { title: "Blockchain Industry Interns", icon: GraduationCap }
    ];

    return (
        <div className="min-h-screen">
            <Navbar />
            <main className="pt-20">
                {/* 1️⃣ Page Header */}
                <section className="relative pt-24 pb-20 overflow-hidden flex items-center">
                    <div className="absolute inset-0 bg-slate-50 dark:bg-slate-900/50 -z-10"></div>
                    <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-5xl md:text-7xl font-bold text-balance leading-tight text-slate-900 dark:text-white mb-6 tracking-tight"
                        >
                            Careers at Quantum Vault
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-xl md:text-2xl text-brand-accent dark:text-brand-primary max-w-2xl mx-auto font-bold uppercase tracking-widest"
                        >
                            Open Opportunities
                        </motion.p>
                    </div>
                </section>

                {/* 2️⃣ Intro Section */}
                <section className="max-w-7xl mx-auto px-6 py-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed text-center"
                    >
                        <p className="mb-8">
                            <strong className="text-slate-900 dark:text-white">Quantum Vault</strong> is building next-generation quantum-resistant and hybrid cryptographic security solutions for Web3, enterprises, and decentralized applications. We are expanding our team and hiring passionate professionals who want to work at the forefront of post-quantum security innovation.
                        </p>
                    </motion.div>
                </section>

                {/* 3️⃣ Hiring For Section */}
                <section className="max-w-7xl mx-auto px-6 py-24 border-t border-slate-200 dark:border-slate-800">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16 text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
                            Currently Hiring For:
                        </h2>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {opportunities.map((role, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass rounded-[2rem] p-8 border border-brand-primary/10 dark:border-brand-primary/5 hover:bg-white/50 dark:hover:bg-slate-900/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-primary/10 group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-brand-primary/5 dark:bg-brand-primary/10 text-brand-accent dark:text-brand-primary flex items-center justify-center mb-6 border border-brand-primary/10 transition-colors group-hover:bg-brand-primary group-hover:text-slate-950">
                                    <role.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
                                    {role.title}
                                </h3>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* 4️⃣ Position Details Section */}
                <section className="max-w-7xl mx-auto px-6 py-24 border-t border-slate-200 dark:border-slate-800">
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass rounded-3xl p-8 flex items-center border border-slate-200 dark:border-slate-800/50"
                        >
                            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mr-6 shrink-0">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Location</p>
                                <p className="text-xl font-bold text-slate-900 dark:text-white">Remote / Onsite</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass rounded-3xl p-8 flex items-center border border-slate-200 dark:border-slate-800/50"
                        >
                            <div className="w-12 h-12 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mr-6 shrink-0">
                                <Clock size={24} />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Position Type</p>
                                <p className="text-xl font-bold text-slate-900 dark:text-white">Full-Time / Internship</p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* 5️⃣ Connect Section */}
                <section className="max-w-7xl mx-auto px-6 py-24 border-t border-slate-200 dark:border-slate-800">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed mb-12">
                            If you have a strong foundation in cryptography, blockchain systems, distributed architecture, or cybersecurity and you’re excited about building quantum-safe solutions for the future we would love to connect with you.
                        </p>

                        <div className="bg-brand-primary/10 dark:bg-brand-primary/5 rounded-[2rem] p-12 md:p-16 border border-brand-primary/20 dark:border-brand-primary/10 shadow-xl shadow-brand-primary/5 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 blur-[80px] rounded-full group-hover:bg-brand-primary/30 transition-colors duration-700 pointer-events-none -mr-20 -mt-20"></div>

                            <div className="relative z-10">
                                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6">
                                    Join Quantum Vault and be part of a team securing the decentralized world against next-generation threats.
                                </h3>
                                <div className="flex flex-col items-center justify-center space-y-4">
                                    <p className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest text-sm">Send your resume to:</p>
                                    <a
                                        href="mailto:hello@securedapp.in"
                                        className="inline-flex items-center space-x-3 text-2xl md:text-4xl font-black text-brand-accent dark:text-brand-primary hover:text-slate-900 dark:hover:text-white transition-colors duration-300"
                                    >
                                        <span>hello@securedapp.in</span>
                                        <Send size={24} className="md:w-8 md:h-8" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Careers;
