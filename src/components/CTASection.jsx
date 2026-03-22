import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Calendar, ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-brand-primary/10 dark:border-brand-primary/5 last:border-0">
            <button
                className="w-full py-6 flex items-center justify-between text-left group transition-all"
                onClick={onClick}
            >
                <span className="text-lg md:text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-accent dark:group-hover:text-brand-primary transition-colors">
                    {question}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex-shrink-0 ml-4 text-brand-accent dark:text-brand-primary"
                >
                    <ChevronDown size={24} />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-slate-600 dark:text-slate-400 leading-relaxed text-base md:text-lg max-w-4xl">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const CTASection = ({ type }) => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqData = [
        {
            question: "How does quantum computing break RSA?",
            answer: "Quantum computers use Shor's algorithm to factorize large prime numbers with exponential speed compared to classical computers. While a standard supercomputer might take billions of years to crack a 2048-bit RSA key, a sufficiently powerful quantum computer could do it in mere hours."
        },
        {
            question: "What is ML-KEM and ML-DSA?",
            answer: "ML-KEM (Module-Lattice Key Encapsulation Mechanism) and ML-DSA (Module-Lattice Digital Signature Algorithm) are the primary post-quantum cryptographic standards finalized by NIST (FIPS 203/204). They are built on 'Module Learning with Errors' problems which are resilient against both classical and quantum attacks."
        },
        {
            question: "Is QuantumVault compliant with NIST standards?",
            answer: "Absolutely. QuantumVault implements the latest NIST Post-Quantum Cryptography (PQC) standards released in August 2024. Our implementations are fully aligned with FIPS 203, 204, and 205, ensuring your infrastructure meets the highest global security requirements."
        },
        {
            question: "Can I integrate PQC with existing TLS infrastructure?",
            answer: "Yes. We support 'Hybrid Cryptography' which allows you to run PQC alongside traditional RSA or ECC. This ensures that even if one algorithm is compromised, your data remains secure. Our plugins integrate directly with common libraries like OpenSSL and BoringSSL."
        },
        {
            question: "What industries need quantum-safe encryption?",
            answer: "Any sector protecting long-lived data (10+ years) is at risk today due to 'Harvest Now, Decrypt Later' attacks. This includes Government/Defense, Healthcare, Financial Services, and Critical Infrastructure providers."
        },
        {
            question: "What is 'Harvest Now, Decrypt Later'?",
            answer: "This refers to adversaries collecting and storing encrypted data today with the intention of decrypting it years from now when quantum computers become available. If your data must remain confidential for a decade or more, you need to implement PQC immediately."
        },
        {
            question: "Does PQC affect system performance?",
            answer: "Post-Quantum algorithms generally involve larger keys and more computation. QuantumVault mitigates this using high-performance hardware acceleration and HSM-isolated processing to ensure enterprise-grade throughput without compromising on speed."
        },
        {
            question: "Is my current hardware compatible?",
            answer: "PQC algorithms are designed to run on existing digital computers. QuantumVault provides seamless integration through standard APIs, though production environments benefit significantly from our specialized HSM accelerators for maximum efficiency."
        }
    ];

    if (type === 'mid') {
        return (
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Part 1: The Quantum Threat */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative overflow-hidden rounded-[1rem] p-8 md:p-10 bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800/50 flex flex-col h-full"
                        >
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900 dark:text-white">
                                The Quantum Threat Is Real
                            </h2>
                            <p className="text-slate-700 dark:text-slate-300 mb-6 text-sm md:text-base leading-relaxed text-balance">
                                Quantum computing will break traditional RSA and ECC encryption.
                                Attackers are already harvesting encrypted data to decrypt later when quantum computers mature.
                            </p>
                            <div className="mb-8 flex-grow">
                                <p className="font-semibold text-brand-accent dark:text-brand-primary mb-3 text-sm uppercase tracking-wider">QuantumVault enables:</p>
                                <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                                    {[
                                        'Quantum-safe TLS',
                                        'Post-quantum digital signatures',
                                        'Secure key exchange',
                                        'HSM-isolated key storage'
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <span className="text-blue-500 mr-2">•</span>
                                            <span className="text-sm md:text-base">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <p className="font-bold text-slate-900 dark:text-white pt-4 border-t border-brand-primary/10 dark:border-brand-primary/5">
                                Future-proof your security architecture today.
                            </p>
                        </motion.div>

                        {/* Part 2: What Is PQC? */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="relative overflow-hidden rounded-[1rem] p-8 md:p-10 bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800/50 flex flex-col h-full"
                        >
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900 dark:text-white">
                                What Is Post-Quantum Cryptography?
                            </h2>
                            <p className="text-slate-700 dark:text-slate-300 mb-6 text-sm md:text-base leading-relaxed text-balance">
                                Post-Quantum Cryptography (PQC) refers to cryptographic algorithms designed to resist attacks from quantum computers.
                            </p>
                            <div className="mb-8 flex-grow">
                                <p className="font-semibold text-brand-accent dark:text-brand-primary mb-3 text-sm uppercase tracking-wider">QuantumVault implements:</p>
                                <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                                    {[
                                        'ML-KEM (Key Encapsulation Mechanism)',
                                        'ML-DSA (Digital Signature Algorithm)',
                                        'Hybrid Cryptography (RSA/ECC + PQC)'
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <span className="text-blue-500 mr-2">•</span>
                                            <span className="text-sm md:text-base">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <p className="font-medium text-slate-600 dark:text-slate-400 pt-4 border-t border-brand-primary/10 dark:border-brand-primary/5">
                                Fully aligned with <span className="text-slate-900 dark:text-white font-bold">NIST SP 800-208</span> and <span className="text-slate-900 dark:text-white font-bold">FIPS 140-3</span> standards.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="faq" className="py-24 px-4 bg-slate-50/50 dark:bg-slate-900/20">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg">
                        Everything you need to know about the quantum transition and how QuantumVault protects your data.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-slate-900/40 rounded-3xl p-4 md:p-8 shadow-xl shadow-brand-primary/5 border border-brand-primary/10 dark:border-brand-primary/5"
                >
                    {faqData.map((item, index) => (
                        <FAQItem
                            key={index}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                        />
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 rounded-[1rem] p-10 md:p-16 text-center bg-brand-primary/10 dark:bg-brand-primary/5 transition-colors duration-300"
                >
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Ready to Secure Your Future?</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
                        Start developing with post-quantum cryptography today. Free software-based APIs, no credit card required.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <a 
                            href="https://app.quantumvault.tech"
                            className="w-full sm:w-auto px-8 py-3 rounded-xl font-bold text-slate-950 flex items-center justify-center space-x-2 transition-all hover:bg-brand-primary active:scale-95 shadow-lg shadow-brand-primary/20" 
                            style={{ backgroundColor: 'var(--color-brand-primary)' }}
                        >
                            <span>Start Free Trial</span>
                            <ArrowRight size={18} />
                        </a>
                        <a 
                            href="https://calendly.com/rahul-securedapp/quantum-vault-demo-call?month=2026-03" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-8 py-3 rounded-xl font-bold text-slate-950 flex items-center justify-center transition-all hover:bg-brand-accent active:scale-95 shadow-lg shadow-brand-accent/20" 
                            style={{ backgroundColor: 'var(--color-brand-accent)' }}
                        >
                            <span>Schedule a Demo</span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;
