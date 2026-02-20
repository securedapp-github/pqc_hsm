import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="relative pt-44 pb-32 overflow-hidden min-h-screen flex items-center">
            <div className="bg-mesh"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full text-primary-indigo dark:text-cyan-400 text-xs font-bold uppercase tracking-widest mb-12 shadow-sm"
                    >
                        <ShieldCheck size={16} />
                        <span>Post-Quantum Ready Infrastructure</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-6xl md:text-7xl font-bold text-balance leading-tight text-slate-900 dark:text-white"
                    >
                        Quantum-Safe Security <br />
                        <span className="text-gradient">Built for Tomorrow</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 mb-14 max-w-2xl mx-auto font-medium"
                    >
                        HSM-backed post-quantum cryptography APIs for key exchange, digital signatures, and key management. Protect your data against quantum threats.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-14"
                    >
                        <button className="group w-full sm:w-auto text-white px-8 py-4 rounded-lg font-bold flex items-center justify-center space-x-2 transition-all duration-300 hover:opacity-90 active:scale-95" style={{ backgroundColor: 'rgb(45, 81, 179)' }}>
                            <span>Start Free Trial</span>
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="w-full sm:w-auto text-white px-8 py-4 rounded-lg font-bold flex items-center justify-center space-x-2 transition-all duration-300 hover:opacity-90 active:scale-95" style={{ backgroundColor: 'rgb(10, 132, 140)' }}>
                            <span>View Documentation</span>
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="flex justify-center"
                    >
                        <p className="text-slate-600 dark:text-slate-400 font-medium text-sm">
                            Free software-based APIs for development • No credit card required
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-1/4 -right-20 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-1/4 -left-20 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none"></div>
        </section>
    );
};

export default Hero;
