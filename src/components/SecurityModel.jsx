import React, { useState } from 'react';
import { Shield, Lock, FileCheck, RefreshCw, Key, Users, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SecurityModel = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const features = [
        {
            title: "Quantum-Safe Auth",
            desc: "Public-key cryptography using ML-DSA. No passwords, no static API keys.",
            details: [
                "Each client holds a unique key pair and proves identity by signing cryptographic challenges — no shared secrets transmitted or stored.",
                "This eliminates credential leakage, phishing, and token reuse risks.",
                "Your zero-trust identity layer remains secure even in a post-quantum world."
            ],
            icon: Shield
        },
        {
            title: "HSM-Isolated Keys",
            desc: "Keys generated and used only inside HSMs. Non-exportable and tamper-resistant.",
            details: [
                "All production keys are generated within FIPS-compliant Hardware Security Modules (HSMs).",
                "Private keys never leave the secure hardware boundary at any time.",
                "Cryptographic operations are executed internally to prevent exposure.",
                "This ensures tamper resistance and strong protection against infrastructure compromise."
            ],
            icon: Lock
        },
        {
            title: "Immutable Audit",
            desc: "Signed, tamper-evident audit trails for every operation with full compliance.",
            details: [
                "Every cryptographic action is recorded in a digitally signed audit log.",
                "Logs are hash-linked to prevent modification or deletion.",
                "Each entry includes timestamp, operation type, and key reference.",
                "This creates mathematically verifiable audit evidence for compliance and forensics."
            ],
            icon: FileCheck
        },
        {
            title: "Crypto-Agile Design",
            desc: "Enforced algorithms and future-ready policies for seamless upgrades.",
            details: [
                "QuantumVault enforces algorithm policies that can evolve with changing standards.",
                "New cryptographic algorithms can be introduced without system redesign.",
                "Hybrid modes allow classical and post-quantum cryptography to operate together.",
                "This ensures long-term security without disrupting existing infrastructure."
            ],
            icon: RefreshCw
        },
        {
            title: "Policy-Controlled",
            desc: "Granular access control per key and per operation with RBAC policies.",
            details: [
                "Granular access control policies enforced at the cryptographic layer.",
                "Integrated Role-Based Access Control (RBAC) manages key usage permissions.",
                "Just-in-Time (JIT) access grants for emergency or administrative tasks.",
                "Real-time policy evaluation ensures compliance with corporate security standards."
            ],
            icon: Key
        },
        {
            title: "Auto Key Rotation",
            desc: "Zero downtime rotation including emergency rotation capabilities.",
            details: [
                "Keys are versioned to enable seamless and interruption-free rotation.",
                "Scheduled rotation ensures cryptographic hygiene and policy compliance.",
                "Emergency revocation allows immediate response to suspected compromise.",
                "All transitions occur without service downtime or operational impact."
            ],
            icon: Users
        }
    ];

    return (
        <section id="features" className="py-20 md:py-32 px-4 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                     <motion.h2
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         className="text-3xl md:text-5xl font-bold text-balance leading-tight mb-6 tracking-tight"
                     >
                         Enterprise <span className="text-gradient">Security Model</span>
                     </motion.h2>
                     <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium text-base md:text-lg mb-4">
                         A defense-in-depth architecture designed for the most demanding security requirements.
                     </p>
                     <div className="inline-block glass px-4 py-2 rounded-xl text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest">
                         Zero-Trust Architecture
                     </div>
                 </div>
 
                 <div className="flex flex-nowrap lg:grid lg:grid-cols-3 overflow-x-auto lg:overflow-x-visible pb-12 lg:pb-0 gap-8 items-stretch snap-x snap-mandatory no-scrollbar -mx-4 px-4 lg:mx-0 lg:px-0">
                    {features.map((f, i) => {
                        const isExpanded = expandedIndex === i;
                        const isOtherExpanded = expandedIndex !== null && !isExpanded;

                        return (
                            <motion.div
                                key={i}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: isExpanded ? 0 : i * 0.05,
                                    layout: { duration: 0.4, type: "spring", stiffness: 200, damping: 25 }
                                }}
                                animate={{
                                    scale: isExpanded ? 1.05 : (isOtherExpanded ? 0.95 : 1),
                                    opacity: isOtherExpanded ? 0.7 : 1,
                                    zIndex: isExpanded ? 10 : 1
                                }}
                                 className={`min-w-[85vw] md:min-w-0 md:w-full lg:w-full h-full glass rounded-[2rem] p-8 transition-all duration-500 group relative flex flex-col snap-center ${isExpanded
                                    ? 'bg-white dark:bg-slate-900 border-brand-primary/30 dark:border-brand-primary/20 shadow-2xl shadow-brand-primary/10'
                                    : 'hover:bg-white/50 dark:hover:bg-slate-900/50'
                                    }`}
                            >
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border transition-all duration-500 mx-auto md:mx-0 ${isExpanded
                                    ? 'bg-brand-primary border-brand-accent text-slate-950 shadow-lg shadow-brand-primary/20'
                                    : 'bg-brand-primary/5 dark:bg-brand-primary/10 border-brand-primary/10 dark:border-brand-primary/5 group-hover:bg-brand-primary text-brand-accent group-hover:text-slate-950'
                                    }`}>
                                    <f.icon size={28} />
                                </div>

                                <h3 className="text-xl font-bold mb-4 tracking-tight text-center md:text-left">{f.title}</h3>
                                <p className="text-slate-500 dark:text-slate-400 font-leading-relaxed text-sm mb-4 text-center md:text-left">
                                    {f.desc}
                                </p>

                                <AnimatePresence>
                                    {isExpanded && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <ul className="space-y-4 mb-8">
                                                {f.details.map((detail, idx) => (
                                                    <motion.li
                                                        key={idx}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: idx * 0.1 }}
                                                        className="flex gap-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed"
                                                    >
                                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0 mt-2" />
                                                        {detail}
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                 <button
                                     onClick={() => setExpandedIndex(isExpanded ? null : i)}
                                     className={`mt-auto flex items-center justify-center md:justify-start gap-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${isExpanded
                                         ? 'text-brand-accent dark:text-brand-primary'
                                         : 'text-slate-400 hover:text-brand-accent dark:hover:text-brand-primary'
                                         }`}
                                 >
                                    {isExpanded ? (
                                        <>Read Less <ChevronUp size={14} /></>
                                    ) : (
                                        <>Read More <ChevronDown size={14} /></>
                                    )}
                                </button>
                            </motion.div>
                        );
                    })}
                </div>

                <p className="text-center mt-8 md:mt-24 text-sm font-bold text-slate-400 flex items-center justify-center gap-2">
                    Shared Responsibility Model: Customer manages application-level data.
                </p>
            </div>
        </section>
    );
};

export default SecurityModel;
