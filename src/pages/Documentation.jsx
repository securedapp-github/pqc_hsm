import React from 'react';
import { motion } from 'framer-motion';
import {
    Shield,
    Lock,
    FileCheck,
    RefreshCw,
    Key,
    ShieldCheck,
    Cpu,
    Zap,
    ClipboardList,
    Layers,
    Server,
    Globe,
    Settings2Icon
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Documentation = () => {
    const sections = [
        {
            id: "overview",
            title: "Overview",
            icon: Globe,
            content: "Quantum Vault is a cryptographic security platform designed to help applications and organizations manage encryption keys and apply modern cryptographic practices within their systems. Many digital platforms today rely on encryption to protect sensitive data, authenticate users, and secure communication between services. Managing these cryptographic components properly is important for maintaining long term security and operational reliability. Quantum Vault provides infrastructure that allows developers to generate cryptographic keys, store them securely, control how they are accessed, and use them for operations such as encryption, digital signatures, and authentication. The platform also records cryptographic activities through audit logs so teams can monitor how keys are used within their systems. Quantum Vault is designed to work with modern application environments and can be integrated into backend services, APIs, and distributed systems where secure communication and identity verification are required."
        },
        {
            id: "getting-started",
            title: "Getting Started",
            icon: Zap,
            content: "Quantum Vault is intended to be integrated into applications through APIs and developer SDKs. The integration process usually begins with creating a secure cryptographic environment where keys can be generated and managed. Once the platform is connected to an application, developers can begin generating keys that will be used for cryptographic operations such as encrypting data or signing messages. After keys are created, they can be assigned access policies that define which services or users are allowed to use them. These policies help ensure that keys are not used outside their intended purpose. Developers can then use the platform's APIs to perform operations such as encrypting information, verifying signatures, or establishing secure communication channels between services. Quantum Vault also records these activities through logs so teams can observe how cryptographic resources are used across their systems. Depending on the implementation environment, SDKs may be available for programming languages such as Python, Node.js, and Java to simplify integration."
        },
        {
            id: "pqc",
            title: "Post Quantum Cryptography",
            icon: Cpu,
            content: "Post quantum cryptography refers to cryptographic algorithms that are designed to remain secure even if advances in quantum computing occur in the future. Traditional encryption systems such as RSA and elliptic curve cryptography are widely used today to protect data and verify identities. However, researchers are studying how large scale quantum computers could affect these systems over time. Post quantum cryptography focuses on algorithms that are believed to remain resistant to attacks even with significant improvements in computational capabilities. Quantum Vault supports algorithms such as ML KEM, previously known as CRYSTALS Kyber, which is used for secure key exchange, and ML DSA, previously known as CRYSTALS Dilithium, which is used for digital signatures. These algorithms are part of the standardization work led by the National Institute of Standards and Technology. By supporting these algorithms, Quantum Vault allows developers to experiment with and adopt modern cryptographic approaches while continuing to operate within existing security architectures."
        },
        {
            id: "hybrid",
            title: "Hybrid Cryptography",
            icon: RefreshCw,
            content: "Many existing software systems depend on traditional encryption algorithms that have been used for decades. Completely replacing these systems can be complex and may require significant changes to infrastructure. Quantum Vault supports a hybrid cryptographic approach that allows traditional algorithms and post quantum algorithms to be used together. In a hybrid system, classical cryptographic methods such as RSA or elliptic curve cryptography may continue to be used while newer algorithms are gradually introduced. This approach helps organizations transition to newer cryptographic standards without disrupting current operations. Hybrid cryptography also allows developers to test and evaluate new algorithms while maintaining compatibility with systems that still rely on established encryption methods."
        },
        {
            id: "hsm",
            title: "Hardware Security Modules",
            icon: Server,
            content: "Quantum Vault can integrate with hardware security modules. A hardware security module, often referred to as an HSM, is a specialized device designed to securely generate and store cryptographic keys. Unlike software based key storage, an HSM keeps keys inside a protected hardware environment that is designed to resist tampering and unauthorized access. When cryptographic operations are performed through an HSM, the private keys remain inside the device while the required cryptographic computation takes place. This reduces the likelihood that keys will be exposed to application level systems or external attackers. HSM integration is often used in environments that require strong security controls, including financial services platforms, enterprise infrastructure, and high security authentication systems."
        },
        {
            id: "key-management",
            title: "Key Management",
            icon: Key,
            content: "Managing cryptographic keys properly is a critical part of maintaining secure systems. Quantum Vault provides tools that help teams manage the full lifecycle of cryptographic keys. This lifecycle typically begins with secure key generation, where keys are created within a controlled environment. Once created, keys can be assigned access policies that determine which systems or services are allowed to use them. Over time, keys may need to be rotated to maintain security best practices. Quantum Vault supports key rotation and version tracking so older keys can be retired and new keys can be introduced without disrupting operations. Key management systems also help administrators monitor how keys are used across services and ensure that access controls remain consistent. By organizing key usage through defined policies and lifecycle management practices, teams can reduce the risk of accidental exposure or misuse of cryptographic keys."
        },
        {
            id: "audit",
            title: "Audit Logging",
            icon: ClipboardList,
            content: "Quantum Vault maintains audit logs that record important cryptographic activities within the system. These logs provide visibility into how cryptographic resources are used across applications and services. Audit records may include information about key creation events, cryptographic operations such as encryption or signing, authentication attempts, and updates to access policies. Maintaining detailed logs helps organizations review system behavior and detect unusual patterns that may indicate security concerns. Audit logs can also support operational monitoring by helping teams understand how cryptographic systems are being used in day to day operations. In environments that require internal security reviews or operational accountability, logs provide an additional layer of transparency."
        },
        {
            id: "architecture",
            title: "Security Architecture",
            icon: Layers,
            content: "Quantum Vault can be deployed as part of a layered security architecture that separates different responsibilities within the cryptographic system. The cryptographic engine performs core operations such as encryption, decryption, digital signatures, and secure key exchange. A key management layer controls how keys are generated, stored, rotated, and accessed by different services. Optional hardware integration can be used to strengthen key protection through hardware security modules. A logging and monitoring layer records cryptographic events and provides visibility into system activity. By separating these responsibilities into distinct components, the platform allows organizations to maintain clearer operational boundaries and improve the reliability of cryptographic infrastructure."
        },
        {
            id: "use",
            title: "Use Cases",
            icon: Settings2Icon,
            content: "Quantum Vault can be applied in a variety of systems where secure communication, identity verification, and data protection are required. Financial platforms often rely on encryption to protect transaction data and authenticate users accessing sensitive financial services. Software as a service platforms can use cryptographic infrastructure to secure APIs, manage authentication tokens, and protect communication between internal services. Infrastructure platforms such as cloud systems, developer platforms, and distributed backend environments can use key management tools to coordinate encryption across multiple services. In these environments, structured key management and reliable cryptographic operations help maintain consistent security practices across large and complex systems."
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 font-sans selection:bg-brand-primary/30">
            <Navbar />

            <main className="pt-20">
                {/* Header Section */}
                <section className="relative pt-24 pb-16 overflow-hidden">
                    <div className="bg-mesh opacity-50"></div>
                    <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-3xl mx-auto"
                        >
                            <h1 className="text-5xl md:text-7xl font-heavy text-slate-900 dark:text-white mb-6 tracking-tighter">
                                Technical <span className="text-gradient">Documentation</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                                Complete architectural overview and integration guide for the QuantumVault security platform.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="max-w-5xl mx-auto px-6 py-20">
                    <div className="space-y-20">
                            {sections.map((section, idx) => (
                                <motion.div
                                    key={section.id}
                                    id={section.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                                    className="scroll-mt-32"
                                >
                                    <div className="flex items-center space-x-4 mb-6">
                                        <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 dark:bg-brand-primary/5 text-brand-accent dark:text-brand-primary flex items-center justify-center border border-brand-primary/10">
                                            <section.icon size={24} />
                                        </div>
                                        <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                                            {section.title}
                                        </h2>
                                    </div>
                                    <div className="glass p-8 md:p-10 rounded-[2rem] border-slate-200/50 dark:border-brand-primary/5 shadow-premium">
                                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-medium text-justify">
                                            {section.content}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}

                            {/* Use Cases Summary Section */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-slate-900 dark:bg-brand-primary/5 rounded-[2.5rem] p-12 md:p-16 text-white dark:text-inherit border border-transparent dark:border-brand-primary/20 shadow-2xl relative overflow-hidden group"
                            >
                                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 blur-[100px] rounded-full -mr-32 -mt-32"></div>
                                <div className="relative z-10 text-center max-w-3xl mx-auto">
                                    <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter">
                                        Summary
                                    </h2>
                                    <p className="text-xl md:text-2xl text-slate-300 dark:text-slate-400 font-medium leading-relaxed mb-10 text-justify">
                                        Quantum Vault provides infrastructure for managing cryptographic keys and applying modern encryption techniques within software systems. The platform combines key management capabilities, support for modern cryptographic algorithms, optional hardware security integration, and detailed activity logging.
                                    </p>
                                    <div className="inline-block px-8 py-4 rounded-full bg-brand-primary/10 border border-brand-primary/30">
                                        <p className="text-brand-primary font-black uppercase tracking-widest">
                                            BUILT FOR TOMORROW • SECURE TODAY
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Documentation;
