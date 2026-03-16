import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, FileCheck, RefreshCw, Key, ShieldCheck } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
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
                            About <span className="text-gradient">QuantumVault</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium"
                        >
                            Building Security for the Quantum Era
                        </motion.p>
                    </div>
                </section>

                {/* 2️⃣ Our Story Section */}
                <section className="max-w-7xl mx-auto px-6 py-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed space-y-6"
                    >
                        <p>
                            <strong className="text-slate-900 dark:text-white">QuantumVault</strong> was founded with a simple but urgent realization: today's encryption was never designed for tomorrow's quantum computers.
                        </p>
                        <p>
                            As advancements in quantum computing accelerate, the foundations of modern cryptography face a structural shift. Sensitive financial records, healthcare data, intellectual property, and government archives encrypted today may be vulnerable in the future.
                        </p>
                        <p>
                            Recognizing this long-term risk, QuantumVault was built to provide practical, enterprise-ready post-quantum cryptography infrastructure.
                        </p>
                        <p>
                            Our mission is not driven by fear but by foresight.
                        </p>
                        <p>
                            We are committed to enabling organizations to transition from legacy encryption systems to quantum-safe infrastructure in a seamless, compliant, and future-proof manner.
                        </p>
                        <p>
                            QuantumVault exists to ensure that innovation continues without compromising long-term trust.
                        </p>
                    </motion.div>
                </section>

                {/* 3️⃣ Infrastructure Vision Section */}
                <section className="max-w-7xl mx-auto px-6 py-24 border-t border-slate-200 dark:border-slate-800">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-5xl mx-auto text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight text-center">
                            Creating a Future-Ready Security Infrastructure
                        </h2>
                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-12 text-center">
                            At QuantumVault, we approach security as infrastructure not as a feature.
                        </p>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {[
                                "HSM-backed post-quantum cryptography",
                                "ML-KEM for quantum-resistant key exchange",
                                "ML-DSA for digital signatures",
                                "Hybrid cryptography (Classical + PQC)",
                                "Crypto-agile architecture for future upgrades",
                                "Immutable and verifiable audit systems"
                            ].map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-start glass rounded-2xl p-6 border border-brand-primary/10 dark:border-brand-primary/5 hover:bg-white/50 dark:hover:bg-slate-900/50 transition-all duration-300 shadow-sm"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-brand-primary/10 dark:bg-brand-primary/10 text-brand-accent dark:text-brand-primary flex items-center justify-center mr-4 shrink-0">
                                        <ShieldCheck size={20} />
                                    </div>
                                    <span className="text-[15px] md:text-base text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                                        {feature}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed space-y-6 max-w-4xl mx-auto text-center md:text-left">
                            <p>
                                We design systems that integrate smoothly with existing enterprise environments while preparing organizations for evolving global standards.
                            </p>
                            <p>
                                Our infrastructure supports regulated industries where compliance, resilience, and long-term data protection are non-negotiable.
                            </p>
                        </div>
                    </motion.div>
                </section>

                {/* 4️⃣ Culture Section */}
                <section className="max-w-7xl mx-auto px-6 py-24 border-t border-slate-200 dark:border-slate-800">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">
                            Building a Culture of Responsibility and Precision
                        </h2>
                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-16">
                            QuantumVault operates at the intersection of cryptography, compliance, and infrastructure reliability.<br className="hidden md:block" />
                            That demands discipline, integrity, and long-term thinking.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
                        {[
                            { title: "Security First", icon: Shield },
                            { title: "Engineering Excellence", icon: FileCheck },
                            { title: "Transparency", icon: RefreshCw },
                            { title: "Accountability", icon: Key },
                            { title: "Continuous Innovation", icon: ShieldCheck },
                            { title: "Long-Term Responsibility", icon: Lock }
                        ].map((value, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass rounded-[2rem] p-8 text-center border border-brand-primary/10 dark:border-brand-primary/5 hover:bg-white/50 dark:hover:bg-slate-900/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-primary/10 group"
                            >
                                <div className="w-14 h-14 mx-auto rounded-2xl bg-brand-primary/5 dark:bg-brand-primary/10 text-brand-accent dark:text-brand-primary flex items-center justify-center mb-6 border border-brand-primary/10 transition-colors group-hover:bg-brand-primary group-hover:text-slate-950">
                                    <value.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">{value.title}</h3>
                            </motion.div>
                        ))}
                    </div>

                    <div className="max-w-3xl mx-auto text-center bg-slate-50 dark:bg-slate-900/40 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-800/50">
                        <p className="text-xl md:text-2xl font-medium text-slate-800 dark:text-slate-200 leading-relaxed mb-4">
                            We believe security must evolve proactively not reactively.
                        </p>
                        <p className="text-xl md:text-2xl font-bold text-brand-accent dark:text-cyan-400">
                            And every decision we make reflects that philosophy.
                        </p>
                    </div>
                </section>

                {/* 5️⃣ Team Section */}
                <section className="max-w-7xl mx-auto px-6 py-24 border-t border-slate-200 dark:border-slate-800">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight text-center">
                            Our Team
                        </h2>
                        <div className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed space-y-6 glass rounded-[2rem] p-8 md:p-12 border border-slate-200 dark:border-brand-primary/10 shadow-sm">
                            <p>
                                QuantumVault brings together engineers, cryptography specialists, and security architects focused on building resilient digital infrastructure for the next generation.
                            </p>
                            <p>
                                Our leadership combines deep expertise in cybersecurity, enterprise systems, and compliance-driven environments.
                            </p>
                            <div className="pt-8 mt-8 border-t border-slate-200 dark:border-slate-700/50">
                                <p className="font-bold text-slate-900 dark:text-white mb-3 text-base uppercase tracking-wider">
                                    We are united by a shared commitment:
                                </p>
                                <p className="text-xl md:text-2xl font-semibold text-brand-accent dark:text-brand-primary italic">
                                    "To build cryptographic systems that remain secure not just today but decades into the future."
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* 6️⃣ Closing Brand Statement */}
                <section className="max-w-4xl mx-auto px-6 pb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="rounded-[2rem] p-12 md:p-16 text-center bg-brand-primary/10 dark:bg-brand-primary/5 transition-colors duration-300 border border-brand-primary/20 dark:border-brand-primary/10 shadow-xl shadow-brand-primary/5 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 blur-[80px] rounded-full group-hover:bg-brand-primary/30 transition-colors duration-700 pointer-events-none -mr-20 -mt-20"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full group-hover:bg-cyan-500/20 transition-colors duration-700 pointer-events-none -ml-20 -mb-20"></div>

                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
                                QuantumVault
                            </h2>
                            <p className="text-xl md:text-2xl font-semibold text-brand-accent dark:text-cyan-400 mb-8">
                                Post-Quantum Cryptography as a Service
                            </p>
                            <div className="inline-block px-6 py-3 rounded-full bg-slate-900/5 dark:bg-white/5 border border-slate-900/10 dark:border-white/10">
                                <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 font-bold uppercase tracking-[0.2em]">
                                    Built for tomorrow. Secure today.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default About;
