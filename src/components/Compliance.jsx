import React from 'react';
import { ShieldCheck, Cpu, ClipboardList } from 'lucide-react';
import { motion } from 'framer-motion';

const Compliance = () => {
    const items = [
        {
            title: "NIST-Level Security",
            desc: "Full alignment with NIST SP 800-208 and FIPS 140-3 standards.",
            icon: ShieldCheck
        },
        {
            title: "Algorithm Policing",
            desc: "Continuous enforcement of allowed cryptographic parameters.",
            icon: Cpu
        },
        {
            title: "Verifiable Audits",
            desc: "Mathematically verifiable audit logs for every key operation.",
            icon: ClipboardList
        }
    ];

    return (
        <section id="compliance" className="py-20 md:py-32 px-4 relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-balance leading-tight mb-6 tracking-tight text-center"
                    >
                        Compliance <span className="text-gradient">& Audit</span>
                    </motion.h2>
                    <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium text-lg mb-6">
                        Engineered for regulated industries where security is non-negotiable.
                    </p>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest max-w-xl mx-auto leading-relaxed">
                        Supporting ISO 27001, SOC 2 Type II, PCI DSS v4.0, and GDPR Compliance.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass rounded-3xl p-10 flex flex-col items-center text-center group hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="w-20 h-20 rounded-full bg-brand-primary/10 dark:bg-brand-primary/5 flex items-center justify-center mb-8 border border-brand-primary/20 dark:border-brand-primary/10 group-hover:scale-110 transition-transform duration-500">
                                <item.icon className="text-brand-accent dark:text-brand-primary" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-balance leading-tight mb-4 tracking-tight">{item.title}</h3>
                            <p className="text-slate-500 dark:text-slate-400 font-medium text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Compliance;
