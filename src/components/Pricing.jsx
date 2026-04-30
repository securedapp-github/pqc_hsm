import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Pricing = () => {
    const plans = [
        {
            name: "Free",
            price: "$0",
            period: "",
            desc: "For development and testing",
            features: [
                "Software-based ML-KEM & ML-DSA APIs",
                "Rate-limited and watermarked",
                "No HSM, no KMS",
                "No compliance or audit features",
                "Community support",
                "HSM-backed security available only on paid plans"
            ],
            cta: "Start Free Trial",
            link: "https://app.quantumvault.tech",
            color: "var(--color-brand-primary)",
            highlight: false
        },
        {
            name: "Paid",
            price: "$200",
            period: "/month",
            desc: "For production applications",
            features: [
                "HSM-backed cryptography",
                "PQC-KMS key management",
                "Automatic key rotation",
                "Basic compliance features",
                "Email support"
            ],
            cta: "Get Started",
            link: "https://app.quantumvault.tech",
            color: "var(--color-brand-primary)",
            highlight: true
        },
        {
            name: "Enterprise",
            price: "$5,000",
            period: "/year",
            desc: "For regulated industries",
            features: [
                "Dedicated HSMs",
                "Full compliance & audit",
                "Custom policies",
                "SLA guarantees",
                "Priority support"
            ],
            cta: "Contact Sales",
            link: "/#contact",
            color: "var(--color-brand-primary)",
            highlight: false
        }
    ];

    return (
        <section id="pricing" className="py-20 md:py-32 px-4 relative bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight"
                    >
                        Pricing
                    </motion.h2>
                    <p className="text-slate-500 dark:text-slate-400 font-medium text-base md:text-lg">
                        Choose the plan that fits your security needs
                    </p>
                </div>

                <div className="flex flex-nowrap lg:grid lg:grid-cols-3 overflow-x-auto lg:overflow-x-visible pb-8 lg:pb-0 gap-6 items-stretch snap-x snap-mandatory no-scrollbar -mx-4 px-4 lg:mx-0 lg:px-0">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`min-w-[85vw] md:w-full lg:w-full md:min-w-0 glass rounded-[2rem] p-8 transition-all duration-500 group relative flex flex-col snap-center h-full ${plan.highlight
                                ? 'bg-white dark:bg-slate-900/40 border-brand-primary ring-1 ring-brand-primary/20'
                                : 'bg-white dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 shadow-sm'
                                }`}
                        >
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                                    {plan.name}
                                </h3>
                                <div className="flex items-baseline mb-2">
                                    <span className="text-5xl font-bold text-slate-900 dark:text-white tracking-tight">{plan.price}</span>
                                    {plan.period && <span className="ml-1 text-slate-500 dark:text-slate-400 font-medium">{plan.period}</span>}
                                </div>
                                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                                    {plan.desc}
                                </p>
                            </div>

                            <ul className="space-y-4 mb-10 flex-grow">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start space-x-3 text-[13px] font-medium leading-relaxed">
                                        <div className="mt-0.5 flex-shrink-0">
                                            <div className="rounded-full border border-brand-primary/30 p-0.5">
                                                <Check size={10} className="text-brand-primary" />
                                            </div>
                                        </div>
                                        <span className="text-slate-600 dark:text-slate-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href={plan.link}
                                className="w-full py-3 rounded-lg font-bold text-slate-950 text-sm transition-all hover:bg-brand-primary active:scale-95 shadow-lg flex items-center justify-center mt-auto"
                                style={{ backgroundColor: plan.color }}
                            >
                                {plan.cta}
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
