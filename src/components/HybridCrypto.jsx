import React from 'react';
import { motion } from 'framer-motion';

const HybridCrypto = () => {
    return (
        <section className="py-32 px-4 relative overflow-hidden">
            <div className="max-w-5xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-balance leading-tight mb-6 tracking-tight"
                    >
                        Hybrid <span className="text-gradient">Cryptography</span>
                    </motion.h2>
                    <p className="text-slate-500 dark:text-slate-400 font-medium text-base md:text-lg leading-relaxed">
                        Ensuring quantum-safe security today while maintaining seamless compatibility with legacy classical systems.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass rounded-[2rem] p-8 md:p-16 text-center transition-colors duration-300"
                >
                    <h3 className="text-2xl md:text-4xl font-bold mb-2 text-slate-900 dark:text-white">Hybrid Cryptography</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-12">Classical + Post-Quantum Crypto</p>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {[
                            "RSA/ECC + ML-KEM",
                            "ECDSA + ML-DSA"
                        ].map((tech, i) => (
                            <div
                                key={i}
                                className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-[1.5rem] shadow-sm flex items-center justify-center transition-colors duration-300 border border-slate-100 dark:border-slate-800"
                            >
                                <span className="text-xl md:text-2xl font-medium text-slate-900 dark:text-white">{tech}</span>
                            </div>
                        ))}
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                        Enables quantum-safe security without breaking legacy systems
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default HybridCrypto;
