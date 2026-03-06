import React from 'react';
import { Key, FileText, CheckCircle2, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const CoreAPIs = () => {
    const apis = [
        {
            title: "Key Encapsulation (ML-KEM)",
            desc: "Protect against \"harvest-now, decrypt-later\" attacks",
            icon: Key,
            features: [
                "Keypair generation",
                "Encapsulation & decapsulation",
                "TLS, secure channels, key exchange"
            ]
        },
        {
            title: "Digital Signatures (ML-DSA)",
            desc: "Non-repudiable, quantum-resistant signatures",
            icon: FileText,
            features: [
                "Sign and verify data",
                "Batch and large-file signing",
                "Software signing, documents, audit logs"
            ]
        }
    ];

    return (
        <section id="resources" className="py-20 md:py-24 px-4 relative bg-slate-50/50 dark:bg-slate-950/50">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {apis.map((api, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white dark:bg-slate-900/40 rounded-[2rem] p-10 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-4 mb-4 text-center md:text-left">
                                <api.icon className="text-brand-accent dark:text-brand-primary mb-4 md:mb-0" size={32} />
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">{api.title}</h3>
                            </div>
                            <p className="text-slate-500 dark:text-slate-400 mb-10 font-medium text-center md:text-left">
                                {api.desc}
                            </p>
                            <ul className="space-y-5">
                                {api.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center space-x-4">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-brand-primary/50 dark:border-brand-primary/40 flex items-center justify-center">
                                            <Check size={14} className="text-brand-primary" strokeWidth={3} />
                                        </div>
                                        <span className="text-black dark:text-white font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Managed PQC Key Services */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="rounded-[1.5rem] p-8 md:p-12 bg-brand-primary/10 dark:bg-brand-primary/5 border border-brand-primary/20 dark:border-brand-primary/10"
                >
                    <div className="flex items-center space-x-4 mb-3">
                        <CheckCircle2 className="text-brand-primary" size={24} />
                        <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Managed PQC Key Services (HSM-Only)</h3>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-8 font-medium">Post-Quantum Key Management Service (PQC-KMS)</p>

                    <div className="grid md:grid-cols-2 gap-y-5 gap-x-12">
                        {[
                            "HSM-based key generation",
                            "Key rotation & versioning",
                            "Secure key destruction",
                            "No customer access to private keys"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center space-x-3 text-slate-700 dark:text-slate-300 text-sm font-medium">
                                <CheckCircle2 size={18} className="text-brand-primary" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CoreAPIs;
