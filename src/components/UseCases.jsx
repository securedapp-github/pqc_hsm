import React from 'react';
import { Landmark, Activity, Wallet, Cloud, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

const UseCases = () => {
    const cases = [
        {
            title: "Financial Services",
            desc: "Protect transactions and long-term financial records from quantum decryption.",
            icon: Landmark,
            color: "text-blue-600 dark:text-blue-400",
            bg: "bg-blue-50 dark:bg-blue-900/20"
        },
        {
            title: "Healthcare",
            desc: "Secure patient data with quantum-resistant encryption.",
            icon: Activity,
            color: "text-emerald-600 dark:text-emerald-400",
            bg: "bg-emerald-50 dark:bg-emerald-900/20"
        },
        {
            title: "Web3 & Blockchain",
            desc: "Quantum-safe wallet signatures and smart contract protection.",
            icon: Wallet,
            color: "text-purple-600 dark:text-purple-400",
            bg: "bg-purple-50 dark:bg-purple-900/20"
        },
        {
            title: "Cloud Providers",
            desc: "Post-quantum TLS and secure multi-tenant key isolation.",
            icon: Cloud,
            color: "text-sky-600 dark:text-sky-400",
            bg: "bg-sky-50 dark:bg-sky-900/20"
        },
        {
            title: "Government & Defense",
            desc: "Compliance-ready, HSM-backed cryptographic control.",
            icon: Building2,
            color: "text-rose-600 dark:text-rose-400",
            bg: "bg-rose-50 dark:bg-rose-900/20"
        }
    ];

    return (
        <section id="solutions" className="py-20 md:py-24 px-4 bg-slate-50 dark:bg-slate-950">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900 dark:text-white"
                    >
                        Industry <span className="text-gradient">Use Cases</span>
                    </motion.h2>
                    <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                        Securing mission-critical data across the most sensitive sectors.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    {cases.map((useCase, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-2rem)] p-8 rounded-3xl glass border-slate-200/50 dark:border-slate-800/50 shadow-xl shadow-brand-primary/5 hover:shadow-2xl hover:shadow-brand-primary/10 hover:bg-white dark:hover:bg-slate-900 transition-all duration-300 group"
                        >
                            <div className={`w-14 h-14 bg-brand-primary/10 dark:bg-brand-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <useCase.icon className="text-brand-accent dark:text-brand-primary" size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-brand-accent dark:group-hover:text-brand-primary transition-colors">
                                {useCase.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                                {useCase.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Internal Import for ArrowRight
const ArrowRight = ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
);

export default UseCases;
