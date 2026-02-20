import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';

const CTASection = ({ type }) => {
    if (type === 'mid') {
        return (
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden rounded-[1rem] p-8 md:p-12 text-center bg-blue-100 dark:bg-blue-900/30"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-balance leading-tight text-slate-900 dark:text-white">
                            Develop with post-quantum cryptography for <br />free.
                            <br />
                            <span className="text-blue-600 dark:text-blue-400">Go production with HSM-backed, quantum-safe security.</span>
                        </h2>
                    </motion.div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-24 px-4 relative">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-[1rem] p-8 md:p-12 text-center bg-blue-100 dark:bg-blue-900/30"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-slate-900 dark:text-white">
                        Ready to Secure Your Future?
                    </h2>
                    <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base mb-10 max-w-2xl mx-auto">
                        Start developing with post-quantum cryptography today. Free software-based APIs, no credit card required.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <button className="w-full sm:w-auto px-8 py-3 rounded-lg font-bold text-white flex items-center justify-center space-x-2 transition-all hover:opacity-90 active:scale-95" style={{ backgroundColor: 'rgb(45, 81, 179)' }}>
                            <span>Start Free Trial</span>
                            <ArrowRight size={18} />
                        </button>
                        <button className="w-full sm:w-auto px-8 py-3 rounded-lg font-bold text-white flex items-center justify-center transition-all hover:opacity-90 active:scale-95" style={{ backgroundColor: 'rgb(10, 132, 140)' }}>
                            <span>View Documentation</span>
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;
