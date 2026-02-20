import React from 'react';
import { Shield, Lock, FileCheck, RefreshCw, Key, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const SecurityModel = () => {
    const features = [
        {
            title: "Quantum-Safe Auth",
            desc: "Public-key cryptography using ML-DSA. No passwords, no static API keys.",
            icon: Shield
        },
        {
            title: "HSM-Isolated Keys",
            desc: "Keys generated and used only inside HSMs. Non-exportable and tamper-resistant.",
            icon: Lock
        },
        {
            title: "Immutable Audit",
            desc: "Signed, tamper-evident audit trails for every operation with full compliance.",
            icon: FileCheck
        },
        {
            title: "Crypto-Agile Design",
            desc: "Enforced algorithms and future-ready policies for seamless upgrades.",
            icon: RefreshCw
        },
        {
            title: "Policy-Controlled",
            desc: "Granular access control per key and per operation with RBAC policies.",
            icon: Key
        },
        {
            title: "Auto Key Rotation",
            desc: "Zero downtime rotation including emergency rotation capabilities.",
            icon: Users
        }
    ];

    return (
        <section id="features" className="py-32 px-4 relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-balance leading-tight mb-6 tracking-tight"
                    >
                        Enterprise-Grade <span className="text-gradient">Security Model</span>
                    </motion.h2>
                    <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium text-lg mb-4">
                        A defense-in-depth architecture designed for the most demanding security requirements.
                    </p>
                    <div className="inline-block glass px-4 py-2 rounded-xl text-xs font-bold text-slate-500 uppercase tracking-widest">
                        Zero-Trust Architecture
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05, duration: 0.3 }}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            className="bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl rounded-3xl p-8 border border-slate-200 dark:border-slate-800/50 hover:shadow-2xl dark:hover:bg-slate-900/60 transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-slate-800 flex items-center justify-center mb-8 border border-blue-100 dark:border-slate-700 group-hover:bg-blue-600 transition-colors duration-200">
                                <f.icon className="text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-200" size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-balance leading-tight mb-4 tracking-tight">{f.title}</h3>
                            <p className="text-slate-500 dark:text-slate-400 font-leading-relaxed text-sm">
                                {f.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <p className="text-center mt-16 text-sm font-text-balance leading-tight text-slate-400 flex items-center justify-center gap-2">
                    <Shield size={14} />
                    Shared Responsibility Model: Customer manages application-level data.
                </p>
            </div>
        </section>
    );
};

export default SecurityModel;
