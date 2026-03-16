import React from 'react';
import { motion } from 'framer-motion';
import { 
    Scale, 
    Mail, 
    AlertCircle,
    ShieldCheck,
    FileText
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsOfService = () => {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans">
            <Navbar />
            
            <main className="pt-20">
                {/* Hero Header */}
                <section className="relative pt-24 pb-16 overflow-hidden bg-white dark:bg-slate-900/40 border-b border-slate-200 dark:border-slate-800">
                    <div className="bg-mesh opacity-30"></div>
                    <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full text-brand-primary mb-8"
                        >
                            <FileText size={16} />
                            <span className="text-xs font-bold uppercase tracking-widest">Legal Agreement</span>
                        </motion.div>
                        <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
                            Terms of <span className="text-gradient">Service</span>
                        </h1>
                        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-3xl mx-auto font-medium">
                            Last Updated: March 2026. Please read these terms carefully before using the QuantumVault platform.
                        </p>
                    </div>
                </section>

                <section className="max-w-6xl mx-auto px-6 py-12">
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="prose prose-slate dark:prose-invert max-w-none text-justify"
                        >
                            {/* Introduction */}
                            <div className="glass p-8 md:p-12 rounded-[2.5rem] border-slate-200 dark:border-slate-800/50 mb-12">
                                <div className="space-y-6 text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                                    <p className="font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-4 uppercase tracking-tighter text-sm">
                                        IMPORTANT: These terms and conditions constitute a legally binding agreement between you and vettedcode technologies india pvt. ltd. by accessing or using the quantumvault platform, you confirm that you have read, understood, and agree to be bound by these terms in their entirety. if you do not agree to any part of these terms, do not access or use the platform.
                                    </p>
                                    <p>
                                        These Terms and Conditions ('Terms') govern your access to and use of the QuantumVault platform, website (<a href="https://quantumvault.tech" className="text-brand-primary underline">https://quantumvault.tech</a>), application programming interfaces (APIs), software development kits (SDKs), mobile application(s), documentation, and all related services (collectively, the 'Services' or 'Platform'), operated by <strong>Vettedcode Technologies India Pvt. Ltd.</strong>, a company incorporated under the Companies Act, 2013, with its registered office at 235, 2nd and 3rd Floor, 13th Cross Road, 2nd Stage Hoysala Nagar, Indiranagar, Bengaluru Urban, Karnataka – 560038, India (the 'Company', 'we', 'us', or 'our').
                                    </p>
                                    <p>
                                        These Terms are to be read in conjunction with our Privacy Policy, Cookie Notice, API Documentation, and any other policies or supplemental terms we may publish from time to time. In the event of any conflict between these Terms and any supplemental terms or policies, the more specific document shall prevail with respect to the subject matter of that document.
                                    </p>
                                </div>
                            </div>

                            {/* Section 1 */}
                            <div className="pb-8">
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">1. OVERVIEW OF THE QUANTUMVAULT PLATFORM</h3>
                                <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium space-y-6">
                                    <p>QuantumVault is a cutting-edge post-quantum cryptography and blockchain security platform designed for enterprises, developers, and security-conscious organizations. It addresses the growing threat posed by quantum computing to classical cryptographic systems by providing quantum-resistant security infrastructure.</p>
                                    <p>The Services include, but are not limited to, the following:</p>
                                    
                                    <div className="space-y-6">
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-white mb-3">1.1 Post-Quantum Cryptographic Key Management</p>
                                            <p>QuantumVault enables the generation, management, storage, rotation, and revocation of cryptographic keys using NIST-standardized post-quantum algorithms including ML-KEM (Module Lattice-based Key Encapsulation Mechanism, FIPS 203), ML-DSA (Module Lattice-based Digital Signature Algorithm, FIPS 204), and SLH-DSA (Stateless Hash-based Digital Signature Algorithm, FIPS 205). Hybrid encryption schemes combining classical (RSA, ECDSA, X25519) and post-quantum algorithms are also supported for backward compatibility.</p>
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-white mb-3">1.2 Cryptographic API Services</p>
                                            <p>QuantumVault exposes a comprehensive set of RESTful and WebSocket APIs that allow developers and enterprises to integrate post-quantum cryptographic operations into their own applications. This includes key generation, digital signing, signature verification, encryption, decryption, and key exchange functionality. API services are available under tiered subscription plans with varying rate limits and usage quotas.</p>
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-white mb-3">1.3 Smart Contract Security Auditing</p>
                                            <p>Our AI-powered smart contract audit tools analyze Solidity, Vyper, Rust, and other smart contract languages to detect vulnerabilities including reentrancy attacks, integer overflows, access control flaws, front-running risks, gas inefficiencies, and logic errors. Audit reports are generated automatically and may be supplemented by manual review services.</p>
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-white mb-3">1.4 Threat Intelligence and Phishing Detection</p>
                                            <p>QuantumVault provides real-time threat intelligence feeds and AI-based phishing detection tools designed to identify malicious domains, fraudulent smart contracts, and social engineering attacks targeting blockchain users and enterprises.</p>
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-white mb-3">1.5 Zero-Knowledge Proof (ZKP) Infrastructure</p>
                                            <p>We provide infrastructure for generating and verifying Zero-Knowledge Proofs, enabling privacy-preserving computation and verification of claims without revealing underlying data. This is particularly useful for identity verification, credential issuance, and compliance attestation.</p>
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-white mb-3">1.6 Digital Asset Security and Wallet Protection</p>
                                            <p>QuantumVault offers tools for securing digital assets, including multi-party computation (MPC) wallet solutions, quantum-resistant address generation, and transaction signing with post-quantum digital signatures.</p>
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-white mb-3">1.7 Enterprise Security Integrations</p>
                                            <p>Enterprise clients may integrate QuantumVault with their existing security infrastructure, including HSMs (Hardware Security Modules), SIEM platforms, PKI systems, and compliance management tools, through our SDK and enterprise API tiers.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Section 2 */}
                            <div className="pb-8">
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">2. ELIGIBILITY AND ACCOUNT REGISTRATION</h3>
                                <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium space-y-6">
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-3">2.1 Age and Capacity Requirements</p>
                                        <p>The Services are intended solely for individuals who are at least 18 years of age and are capable of entering into a legally binding contract under applicable law. By using the Services, you represent and warrant that:</p>
                                        <ul className="list-disc pl-6 mt-3 space-y-2">
                                            <li>You are at least 18 years of age</li>
                                            <li>You have the legal capacity to enter into a binding agreement in your jurisdiction</li>
                                            <li>You are not barred from receiving services under the laws of India or any other applicable jurisdiction</li>
                                            <li>If you are entering into these Terms on behalf of a company, organization, or other legal entity, you have the authority to bind that entity to these Terms, and references to 'you' shall refer to that entity</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-3">2.2 Account Registration</p>
                                        <p>To access most features of the Platform, you must create an account. During registration, you agree to:</p>
                                        <ul className="list-disc pl-6 mt-3 space-y-2">
                                            <li>Provide accurate, complete, and current information as prompted by the registration form</li>
                                            <li>Maintain and promptly update your account information to ensure it remains accurate and complete</li>
                                            <li>Use a unique, strong password and not share your account credentials with any third party</li>
                                            <li>Enable multi-factor authentication (MFA) on your account we strongly recommend and, for enterprise accounts, may require this</li>
                                            <li>Notify us immediately at <a href="mailto:hello@securedapp.in" className="text-brand-primary underline">hello@securedapp.in</a> if you discover or suspect any unauthorized use of your account or any other security breach</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-3">2.3 Account Security Responsibilities</p>
                                        <p>You are solely responsible for all activity that occurs under your account, regardless of whether the activity is authorized by you. The Company will not be liable for any loss or damage arising from your failure to maintain the security of your account credentials. You must not allow others to use your account, and you should log out of your account at the end of each session, especially on shared devices.</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-3">2.4 Organizational Accounts</p>
                                        <p>Enterprise and team accounts may allow multiple users to access the Platform under a single organizational subscription. The account administrator is responsible for managing user access, permissions, and compliance with these Terms for all users within the organization. The organization and the account administrator are jointly and severally liable for all activity conducted by organizational users.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Section 3 */}
                            <div className="pb-8">
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">3. API ACCESS AND USAGE TERMS</h3>
                                <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium space-y-6">
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-3">3.1 License Grant</p>
                                        <p>Subject to your compliance with these Terms and payment of applicable fees, the Company grants you a limited, non-exclusive, non-transferable, revocable, non-sublicensable license to access and use the QuantumVault APIs and SDKs solely for the purpose of integrating QuantumVault functionality into your own applications and services, in accordance with our API documentation.</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-3">
                                            3.2 API Key Management
                                        </p>
                                        <p>API keys are the primary mechanism for authenticating your applications to the QuantumVault platform. You are solely responsible for the security of your API keys and must adhere to the following requirements:</p>
                                        <ul className="list-disc pl-6 mt-3 space-y-2">
                                            <li>Treat API keys as sensitive credentials never embed them in client-side code, mobile applications, or publicly accessible repositories</li>
                                            <li>Store API keys only in secure, server-side environments using secrets management tools (e.g., AWS Secrets Manager, HashiCorp Vault, Azure Key Vault, or GCP Secret Manager)</li>
                                            <li>Use environment-specific API keys: maintain separate keys for development, staging, and production environments</li>
                                            <li>Rotate API keys at regular intervals (we recommend every 90 days for production keys) and immediately upon any suspected compromise</li>
                                            <li>Restrict API key permissions to the minimum scopes required for your application's functionality</li>
                                            <li>Set IP allow-lists on your API keys where possible to restrict access to known server IPs</li>
                                            <li>Revoke immediately any API key that you suspect has been compromised, and notify us at <a href="mailto:hello@securedapp.in" className="text-brand-primary underline">hello@securedapp.in</a></li>
                                        </ul>
                                        <p className="mt-4 text-sm italic">
                                            ⚠ The Company shall not be liable for any unauthorized use of your API keys resulting from your failure to follow these security requirements. Compromised API keys may result in unauthorized charges and unauthorized access to your cryptographic resources.
                                        </p>
                                    </div>

                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-3">
                                            3.3 Cryptographic Key Custody
                                        </p>
                                        <p>Private and secret cryptographic keys generated through QuantumVault services are subject to the following rules:</p>
                                        <ul className="list-disc pl-6 mt-3 space-y-2">
                                            <li>Private keys are generated in a secure environment and returned to you ONCE at the time of generation. They are NOT stored on our servers after delivery.</li>
                                            <li>You are solely and exclusively responsible for securely storing, backing up, and protecting private keys delivered to you. Loss of a private key means permanent loss of access to any data or assets protected by that key.</li>
                                            <li>We recommend storing private keys in a Hardware Security Module (HSM), secure enclave, or enterprise-grade key management service.</li>
                                            <li>If a private key is lost or compromised, you must generate a new key pair. The Company has no ability to recover private keys.</li>
                                            <li>You are responsible for managing the lifecycle of cryptographic keys, including timely rotation and revocation.</li>
                                        </ul>
                                        <p className="mt-4 text-sm italic text-slate-900 dark:text-white uppercase tracking-wider">
                                            ⚠ CRITICAL: The Company accepts no liability for loss of digital assets, data, or access resulting from lost, stolen, or compromised private cryptographic keys that were generated through our Platform and entrusted to your custody.
                                        </p>
                                    </div>

                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-3">3.4 Rate Limits and Fair Use</p>
                                        <p>API usage is subject to rate limits, request quotas, and concurrency limits as specified in our pricing and documentation pages. These limits exist to ensure fair usage and platform stability for all users. You agree not to attempt to circumvent rate limits through:</p>
                                        <ul className="list-disc pl-6 mt-3 space-y-2">
                                            <li>Creating multiple accounts or API keys for the purpose of aggregating rate limits</li>
                                            <li>Using API endpoints in ways that generate excessive load beyond your allocated quota</li>
                                            <li>Employing caching, proxying, or other techniques to resell API access to third parties</li>
                                        </ul>
                                        <p className="mt-4">Exceeding rate limits may result in temporary API throttling, suspension of API access, or termination of your account, depending on the severity and frequency of the violation.</p>
                                    </div>

                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-3">3.5 API Changes and Versioning</p>
                                        <p>We version our APIs to provide stability for existing integrations. We will provide a minimum of 90 days advance notice before deprecating any API version that is in active use. We reserve the right to make non-breaking changes (additions of new fields, new endpoints) to any API version without prior notice. It is your responsibility to keep your integration up to date.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Section 4 */}
                            <div className="pb-8">
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">4. AUTHORIZED USES</h3>
                                <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium space-y-4">
                                    <p>You are permitted to use the Platform and Services solely for the following lawful purposes:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Integrating post-quantum cryptographic capabilities into your own enterprise or commercial applications</li>
                                        <li>Performing security audits of smart contracts that you own or for which you have explicit written authorization from the owner</li>
                                        <li>Using ZKP infrastructure for privacy-preserving verification and attestation in your own products</li>
                                        <li>Accessing threat intelligence data to protect your own systems, users, and digital assets</li>
                                        <li>Managing cryptographic keys for your own applications in accordance with our documentation</li>
                                        <li>Evaluating and testing the Platform through sandbox environments and trial accounts provided for that purpose</li>
                                        <li>Developing and deploying applications that leverage QuantumVault APIs in accordance with our developer guidelines</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Section 5 */}
                            <div className="pb-8">
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">5. PROHIBITED USES</h3>
                                <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium space-y-8">
                                    <p>You must not use the Platform, Services, or any related content or technology for any purpose that is illegal, harmful, abusive, or contrary to these Terms. The following is a non-exhaustive list of prohibited uses:</p>
                                    
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-3 underline decoration-brand-primary decoration-2 underline-offset-4">5.1 Illegal and Harmful Activities</p>
                                        <ol className="list-decimal pl-6 space-y-2">
                                            <li>Use the Platform in violation of any applicable law, regulation, treaty, or governmental order, including export control laws and economic sanctions</li>
                                            <li>Process or transmit data in a manner that infringes on the intellectual property, privacy, or other rights of any third party</li>
                                            <li>Use the Services to facilitate money laundering, terrorist financing, or other financial crimes</li>
                                            <li>Use the Platform to create, distribute, or deploy malware, ransomware, or any other malicious software</li>
                                            <li>Attempt to access, tamper with, or disrupt systems, networks, or data belonging to the Company or any third party without authorization</li>
                                        </ol>
                                    </div>

                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-3 underline decoration-brand-primary decoration-2 underline-offset-4">5.2 Platform Integrity and Security</p>
                                        <ol className="list-decimal pl-6 space-y-2" start="6">
                                            <li>Conduct denial-of-service (DoS), distributed denial-of-service (DDoS), or any other attack against the Platform or its infrastructure</li>
                                            <li>Attempt to probe, scan, or test the vulnerability of the Platform or breach its security or authentication mechanisms without the Company's prior written authorization</li>
                                            <li>Reverse engineer, disassemble, decompile, or attempt to derive the source code, algorithms, or trade secrets of the Platform or its underlying technology</li>
                                            <li>Bypass, disable, or circumvent any access controls, rate limits, security measures, or technical restrictions implemented on the Platform</li>
                                            <li>Inject or introduce any virus, Trojan horse, worm, logic bomb, time bomb, or other harmful code into the Platform</li>
                                        </ol>
                                    </div>

                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-3 underline decoration-brand-primary decoration-2 underline-offset-4">5.3 Unauthorized Commercial Exploitation</p>
                                        <ol className="list-decimal pl-6 space-y-2" start="11">
                                            <li>Resell, sublicense, or otherwise commercialize access to the Platform's APIs, SDKs, or Services without the Company's prior written consent</li>
                                            <li>Build competing products or services that substantially replicate or substitute the core functionality of QuantumVault using knowledge gained from using the Platform</li>
                                            <li>Use the Platform's outputs (including audit reports, threat intelligence, or cryptographic outputs) to provide services to third parties without appropriate authorization and disclosure</li>
                                        </ol>
                                    </div>

                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-3 underline decoration-brand-primary decoration-2 underline-offset-4">5.4 Data Harvesting and Scraping</p>
                                        <ol className="list-decimal pl-6 space-y-2" start="14">
                                            <li>Use automated bots, crawlers, scrapers, or data extraction tools to harvest data from the Platform beyond what is permitted by our APIs</li>
                                            <li>Collect or harvest personal information about other users of the Platform without their consent</li>
                                            <li>Systematically download or cache Platform content in a manner that could damage or burden our infrastructure</li>
                                        </ol>
                                    </div>

                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-3 underline decoration-brand-primary decoration-2 underline-offset-4">5.5 Misrepresentation and Fraud</p>
                                        <ol className="list-decimal pl-6 space-y-2" start="17">
                                            <li>Impersonate any person or entity, or misrepresent your identity, affiliation, or authority</li>
                                            <li>Misrepresent the capabilities or outputs of QuantumVault services to third parties, clients, or regulators</li>
                                            <li>Create false impressions of association, approval, or endorsement by the Company without our express written consent</li>
                                        </ol>
                                    </div>
                                    <p className="p-4 bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400 rounded-2xl text-sm font-bold">Violation of any prohibited use provision may result in immediate suspension or termination of your account, without refund, and may expose you to civil or criminal liability.</p>
                                </div>
                            </div>

                            {/* Section 6 */}
                            <div className="pb-8">
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">6. INTELLECTUAL PROPERTY RIGHTS</h3>
                                <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium space-y-6">
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-3">6.1 Ownership of Platform Intellectual Property</p>
                                        <p>All intellectual property rights in and to the QuantumVault Platform, including but not limited to the website, APIs, SDKs, documentation, source code, algorithms, models, trade secrets, trademarks, service marks, logos, user interface design, and all associated content and technology, are owned by or licensed to the Company. These Terms do not transfer any ownership of intellectual property to you.</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-3">6.2 License to Use the Services</p>
                                        <p>Subject to your compliance with these Terms, the Company grants you a personal, limited, revocable, non-exclusive, non-sublicensable, non-transferable license to:</p>
                                        <ul className="list-disc pl-6 mt-3 space-y-2">
                                            <li>Access and use the Platform through its designated interfaces and APIs for the purposes permitted under these Terms</li>
                                            <li>Download and use any SDKs or software tools provided by the Company, subject to any additional license terms accompanying those tools</li>
                                            <li>Access and use the documentation provided by the Company to facilitate your integration of the APIs</li>
                                        </ul>
                                        <p className="mt-4">You obtain no rights in the Platform beyond those expressly granted in this Section. Any use of the Platform outside the scope of this license is a breach of these Terms and may constitute infringement of our intellectual property rights.</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-3">6.3 Your Content and Data</p>
                                        <p>You retain ownership of all data, content, source code, and other materials that you submit to or process through the Platform ('Your Content'). You grant the Company a limited, worldwide, non-exclusive license to access, store, process, and use Your Content solely to the extent necessary to provide the Services to you and as described in our Privacy Policy. The Company does not acquire any ownership rights in Your Content.</p>
                                        <p className="mt-3">You represent and warrant that: (a) you own or have the necessary rights and permissions to submit Your Content to the Platform; (b) Your Content does not infringe the intellectual property, privacy, or other rights of any third party; and (c) Your Content complies with these Terms and applicable law.</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-3">6.4 Trademarks</p>
                                        <p>'QuantumVault', 'SecureDApp', and related logos, slogans, and service names are trademarks or registered trademarks of the Company. You may not use the Company's trademarks, logos, or brand assets without prior written consent. Use of the Company's trademarks in a manner that is likely to cause confusion, disparage the Company, or misrepresent your relationship with the Company is strictly prohibited.</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-3">6.5 Feedback and Suggestions</p>
                                        <p>We welcome your feedback, suggestions, ideas, and recommendations for improving the Platform ('Feedback'). By submitting Feedback to us through any channel, you agree that:</p>
                                        <ul className="list-disc pl-6 mt-3 space-y-2">
                                            <li>All Feedback becomes the exclusive property of the Company upon submission</li>
                                            <li>The Company is free to use, modify, incorporate, and commercialize any Feedback without any obligation to you</li>
                                            <li>You waive any claim to compensation, attribution, or intellectual property rights in connection with the Feedback</li>
                                            <li>You represent that the Feedback does not contain any confidential information belonging to a third party</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-3">6.6 Open Source Components</p>
                                        <p>Certain components of the QuantumVault Platform may incorporate open source software. The use of such components is governed by their respective open source licenses. Nothing in these Terms limits your rights under, or grants you rights that supersede, the terms of any applicable open source license. A list of open source components used by the Platform and their respective licenses is available in our documentation.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Section 7 */}
                            <div className="pb-8">
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">7. SUBSCRIPTION, FEES, AND PAYMENT</h3>
                                <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium space-y-6">
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-3">7.1 Subscription Plans</p>
                                        <p>QuantumVault offers a range of subscription plans, including free tier and paid plans (Starter, Professional, Enterprise, and custom plans). The features, usage limits, and pricing associated with each plan are described on our Pricing page at <a href="https://quantumvault.tech/pricing" className="text-brand-primary underline">https://quantumvault.tech/pricing</a>. The Company reserves the right to modify plan features and pricing at any time, with notice as described in Section 8.</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-3">7.2 Billing and Payment</p>
                                        <p>By subscribing to a paid plan, you agree to pay all applicable fees in accordance with the billing terms in effect at the time of your subscription. Fees are:</p>
                                        <ul className="list-disc pl-6 mt-3 space-y-2">
                                            <li>Billed in advance on a monthly or annual basis, depending on your chosen billing cycle</li>
                                            <li>Charged automatically to your designated payment method on the billing date</li>
                                            <li>Non-refundable except as expressly stated in our Refund Policy or as required by applicable law</li>
                                            <li>Exclusive of applicable taxes (including GST, VAT, or other taxes), which you are responsible for paying</li>
                                        </ul>
                                        <p className="mt-4 text-sm bg-slate-100 dark:bg-slate-800/50 p-4 rounded-xl italic">All payment information is processed by our PCI-DSS compliant third-party payment gateway. The Company does not store raw payment card data.</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-3">7.3 Usage-Based Billing</p>
                                        <p>Certain Services (particularly API usage beyond plan limits) are billed based on actual consumption. Usage metrics are calculated based on our measurement systems, which are deemed accurate and authoritative in the absence of demonstrable error. We provide usage dashboards and alerts to help you monitor and manage consumption.</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-3">7.4 Late Payment and Suspension</p>
                                        <p>If payment fails or is not received by the due date, we reserve the right to:</p>
                                        <ul className="list-disc pl-6 mt-2 space-y-1">
                                            <li>Retry the payment charge automatically</li>
                                            <li>Suspend or restrict access to the Services until outstanding amounts are paid</li>
                                            <li>Charge late payment interest at the applicable statutory rate</li>
                                            <li>Terminate your account after a period of non-payment following written notice</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-3">7.5 Refund Policy</p>
                                        <p>Except as required by applicable consumer protection law, all fees paid are non-refundable. If you believe you have been incorrectly charged, you must notify us in writing at <a href="mailto:hello@securedapp.in" className="text-brand-primary underline">hello@securedapp.in</a> within 30 days of the charge. We will investigate and, if the error is confirmed, issue a credit or refund at our discretion. Annual subscriptions cancelled before the end of the subscription period are not eligible for pro-rated refunds unless otherwise agreed in writing.</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-3">7.6 Free Trial</p>
                                        <p>Where we offer a free trial period for paid plans, the following conditions apply:</p>
                                        <ul className="list-disc pl-6 mt-2 space-y-1">
                                            <li>Access to the free trial is subject to eligibility criteria at the Company's discretion</li>
                                            <li>At the end of the free trial period, your account will automatically convert to the selected paid plan unless you cancel before the trial expires</li>
                                            <li>We reserve the right to modify or cancel free trial offers at any time</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Section 8 */}
                            <div className="pb-8">
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">8. MODIFICATIONS TO SERVICES AND TERMS</h3>
                                <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium space-y-6">
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-3">8.1 Changes to the Services</p>
                                        <p>We reserve the right to modify, update, enhance, suspend, or discontinue any feature, component, or aspect of the Platform at any time. This includes:</p>
                                        <ul className="list-disc pl-6 mt-3 space-y-2">
                                            <li>Adding new features or modifying existing functionality</li>
                                            <li>Deprecating or removing features that are no longer supported</li>
                                            <li>Changing the technical specifications or integration interfaces of the APIs</li>
                                            <li>Temporarily suspending the Platform for maintenance, security patching, or infrastructure upgrades</li>
                                        </ul>
                                        <p className="mt-4">For significant changes that may materially affect your use of the Services, we will provide reasonable advance notice (typically 30 days for enterprise customers, 14 days for other paid users) through email or Platform announcements.</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-3">8.2 Changes to These Terms</p>
                                        <p>We may update these Terms from time to time to reflect changes in our Services, applicable law, or business practices. We will notify you of material changes by posting an updated version of the Terms on the Platform with a revised 'Last Updated' date and, where the changes are material, by sending a notice to your registered email address.</p>
                                        <p className="mt-4 italic">Your continued use of the Services after the effective date of any updated Terms constitutes acceptance of the revised Terms. If you do not agree to the updated Terms, you must stop using the Services and may request account deletion.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Section 9 */}
                            <div className="pb-8">
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">9. CONFIDENTIALITY</h3>
                                <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium space-y-6">
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-3">9.1 Mutual Confidentiality</p>
                                        <p>Each party agrees to keep confidential all non-public information disclosed by the other party in connection with the use of the Services, including technical information, business information, pricing, API keys, audit reports, and other information marked as confidential or that a reasonable person would understand to be confidential ('Confidential Information').</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-3">9.2 Obligations</p>
                                        <p>Each party agrees to:</p>
                                        <ul className="list-disc pl-6 mt-3 space-y-2">
                                            <li>Use Confidential Information only for the purposes of this agreement</li>
                                            <li>Protect Confidential Information using the same degree of care it uses for its own confidential information (no less than reasonable care)</li>
                                            <li>Not disclose Confidential Information to third parties without the disclosing party's prior written consent, except as permitted by these Terms</li>
                                            <li>Limit disclosure of Confidential Information to employees, contractors, and agents who have a need to know and are bound by confidentiality obligations at least as protective as these Terms</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-3">9.3 Exclusions</p>
                                        <p>Confidentiality obligations do not apply to information that: (a) was or becomes publicly available through no fault of the receiving party; (b) was rightfully known to the receiving party before disclosure; (c) was independently developed by the receiving party without reference to the Confidential Information; or (d) is required to be disclosed by law, regulation, or court order, provided the receiving party gives prompt written notice to the disclosing party to the extent permitted by law.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Section 10 */}
                            <div className="pb-8">
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">10. REPRESENTATIONS AND WARRANTIES</h3>
                                <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium space-y-6">
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-3">10.1 Your Representations</p>
                                        <p>By using the Services, you represent and warrant to the Company that:</p>
                                        <ul className="list-disc pl-6 mt-3 space-y-2">
                                            <li>All information you provide to the Company is accurate, complete, and not misleading</li>
                                            <li>You have the legal right to access and use all data and content you submit to the Platform</li>
                                            <li>Your use of the Services will comply with all applicable laws, regulations, and third-party rights</li>
                                            <li>You will not use the Services for any unlawful or prohibited purpose as described in these Terms</li>
                                            <li>If you are a legal entity, you are duly organized, validly existing, and in good standing under applicable law, and you have full authority to enter into these Terms</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-3">10.2 Company's Representations</p>
                                        <p>The Company represents and warrants that:</p>
                                        <ul className="list-disc pl-6 mt-3 space-y-2">
                                            <li>It has the right to provide the Services as described in these Terms</li>
                                            <li>It will implement and maintain reasonable security measures to protect the Platform</li>
                                            <li>It will process your personal data in accordance with its Privacy Policy and applicable data protection law</li>
                                            <li>It will provide the Services substantially in accordance with its published documentation</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Section 11 */}
                            <div className="pb-8">
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">11. DISCLAIMERS</h3>
                                <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium space-y-6">
                                    <div className="bg-slate-100 dark:bg-slate-800 pb-8 px-8 pt-6 rounded-3xl border border-slate-200 dark:border-slate-700">
                                        <p className="font-bold text-slate-900 dark:text-white mb-4 uppercase text-sm tracking-widest text-center border-b border-slate-300 dark:border-slate-600 pb-4">
                                            THE SERVICES ARE PROVIDED 'AS IS' AND 'AS AVAILABLE', WITHOUT ANY WARRANTY OF ANY KIND, EXPRESS OR IMPLIED.
                                        </p>
                                        <p className="mb-4">TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE COMPANY AND ITS AFFILIATES, DIRECTORS, EMPLOYEES, LICENSORS, AND SERVICE PROVIDERS EXPRESSLY DISCLAIM ALL WARRANTIES, INCLUDING:</p>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>ANY IMPLIED WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT</li>
                                            <li>ANY WARRANTY THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE FROM VULNERABILITIES</li>
                                            <li>ANY WARRANTY REGARDING THE ACCURACY, COMPLETENESS, OR RELIABILITY OF ANY CRYPTOGRAPHIC OUTPUTS, AUDIT REPORTS, THREAT INTELLIGENCE DATA, OR AI-GENERATED RESULTS</li>
                                            <li>ANY WARRANTY THAT THE POST-QUANTUM CRYPTOGRAPHIC ALGORITHMS IMPLEMENTED IN THE PLATFORM WILL REMAIN SECURE AGAINST ALL FUTURE QUANTUM OR CLASSICAL CRYPTOGRAPHIC ATTACKS</li>
                                            <li>ANY WARRANTY THAT THE SERVICES WILL MEET ALL OF YOUR SPECIFIC COMPLIANCE, REGULATORY, OR SECURITY REQUIREMENTS</li>
                                        </ul>
                                    </div>
                                    <p className="p-4 bg-brand-primary/5 text-brand-primary rounded-2xl text-sm font-medium leading-relaxed italic border border-brand-primary/10">
                                        Smart contract audits, AI-powered threat detection, and cryptographic algorithm recommendations are provided on a best-efforts basis. They do not guarantee the absence of all vulnerabilities, errors, or risks. You are solely responsible for independently verifying all outputs and for making your own determinations regarding security, compliance, and risk.
                                    </p>
                                </div>
                            </div>

                            {/* Section 12 */}
                            <div className="pb-8">
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">12. LIMITATION OF LIABILITY</h3>
                                <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium space-y-8">
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-3 underline decoration-brand-primary decoration-2 underline-offset-4">12.1 Exclusion of Consequential Damages</p>
                                        <p className="mb-4">TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THE COMPANY OR ANY OF ITS AFFILIATES, DIRECTORS, EMPLOYEES, AGENTS, LICENSORS, OR SERVICE PROVIDERS BE LIABLE FOR ANY:</p>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>Indirect, incidental, special, consequential, exemplary, or punitive damages</li>
                                            <li>Loss of profits, revenues, business, data, digital assets, or cryptographic keys</li>
                                            <li>Loss of goodwill, reputation, or business opportunities</li>
                                            <li>Cost of substitute goods or services</li>
                                            <li>Damages arising from unauthorized access to or alteration of your data or cryptographic resources</li>
                                            <li>Damages arising from your reliance on audit reports, threat intelligence, or AI-generated outputs</li>
                                        </ul>
                                        <p className="mt-4 italic">These exclusions apply regardless of whether the Company was advised of the possibility of such damages and regardless of the theory of liability (contract, tort, statute, or otherwise).</p>
                                    </div>

                                    <div className="glass p-8 rounded-3xl border-slate-200 dark:border-slate-800/50">
                                        <p className="font-bold text-slate-900 dark:text-white mb-3">12.2 Aggregate Liability Cap</p>
                                        <p>The Company's total cumulative liability to you for all claims arising out of or relating to these Terms or the Services, regardless of the form of action, shall not exceed the greater of:</p>
                                        <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4 mt-4">
                                            <div className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg font-bold text-slate-900 dark:text-white">
                                                3 Months Fees
                                            </div>
                                            <span className="text-slate-400">OR</span>
                                            <div className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg font-bold text-slate-900 dark:text-white">
                                                INR 7,500
                                            </div>
                                        </div>
                                        <p className="mt-4 text-sm font-medium">This limitation applies even if any limited remedy specified in these Terms is found to have failed its essential purpose.</p>
                                    </div>

                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-3 uppercase tracking-tighter">12.3 Exceptions</p>
                                        <p>Nothing in these Terms limits or excludes liability for: (a) death or personal injury caused by the Company's negligence; (b) fraud or fraudulent misrepresentation; (c) any liability that cannot be lawfully excluded or limited under applicable law.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Section 13 */}
                            <div className="pb-8">
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">13. INDEMNIFICATION</h3>
                                <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium space-y-6">
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-3">13.1 Your Indemnification Obligations</p>
                                        <p className="mb-4">You agree to defend, indemnify, and hold harmless the Company and its affiliates, officers, directors, employees, contractors, agents, licensors, and service providers (collectively, 'Indemnified Parties') from and against any and all claims, damages, losses, liabilities, costs, and expenses (including reasonable legal fees and disbursements) arising out of or in connection with:</p>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>Your access to or use of the Services in violation of these Terms or applicable law</li>
                                            <li>Your submission or processing of data or content through the Platform that infringes the rights of any third party or violates applicable law</li>
                                            <li>Your breach of any representation, warranty, or obligation under these Terms</li>
                                            <li>Your failure to secure API keys, private keys, or account credentials as required by these Terms</li>
                                            <li>Any claim by a third party relating to your application or service that integrates or relies on QuantumVault APIs</li>
                                            <li>Any regulatory penalty, fine, or enforcement action taken against you or a third party as a result of your non-compliance with applicable law</li>
                                        </ul>
                                    </div>
                                    <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 text-sm">
                                        <p className="font-bold text-slate-900 dark:text-white mb-2">13.2 Indemnification Process</p>
                                        <p>If we are subject to an indemnifiable claim, we will: (a) notify you promptly in writing; (b) allow you to assume sole control of the defense and settlement of the claim; (c) provide reasonable assistance at your expense; and (d) not make any admission or settlement without your prior written consent. We reserve the right to participate in the defense at our own cost.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Section 14 */}
                            <div className="pb-8">
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">14. THIRD-PARTY SERVICES AND INTEGRATIONS</h3>
                                <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium space-y-4">
                                    <p>The Platform may include integrations with, or links to, third-party services, tools, and resources ('Third-Party Services'). These may include cloud providers, payment gateways, identity verification services, analytics tools, and others.</p>
                                    <p>You acknowledge and agree that:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>The Company does not own, operate, control, or endorse any Third-Party Services</li>
                                        <li>Your use of any Third-Party Service is governed by that third party's own terms and privacy policy, which you should read carefully</li>
                                        <li>The Company is not responsible for the content, availability, accuracy, security, or functionality of any Third-Party Service</li>
                                        <li>Any issues or disputes arising from your use of Third-Party Services must be resolved directly with the relevant third party</li>
                                        <li>We may receive fees or other compensation for referrals to Third-Party Services, and will disclose this where required by law</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Section 15 */}
                            <div className="pb-8">
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">15. TERM AND TERMINATION</h3>
                                <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium space-y-6">
                                    <p><strong>15.1 Term</strong>: These Terms take effect when you first access or use the Platform and continue until terminated in accordance with this Section.</p>
                                    
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-2">15.2 Termination by You</p>
                                        <p>You may terminate your account at any time by:</p>
                                        <ul className="list-disc pl-6 mt-2 space-y-1">
                                            <li>Visiting your account settings and selecting the account deletion option</li>
                                            <li>Contacting us at <a href="mailto:hello@securedapp.in" className="text-brand-primary underline">hello@securedapp.in</a> with a written termination request</li>
                                        </ul>
                                        <p className="mt-3 text-sm">Termination of your account will take effect within 14 days of your request. Following termination, your access to the Platform will be revoked and your data will be handled as described in our Privacy Policy. Prepaid fees are non-refundable except as required by applicable law.</p>
                                    </div>

                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-2">15.3 Termination or Suspension by the Company</p>
                                        <p>We reserve the right to suspend or terminate your access to the Services, with or without notice, if:</p>
                                        <ul className="list-disc pl-6 mt-2 space-y-2">
                                            <li>You breach any provision of these Terms</li>
                                            <li>Your use of the Services poses a security risk to the Platform or other users</li>
                                            <li>You fail to pay fees when due after appropriate notice</li>
                                            <li>We are required to do so by law or regulatory authority</li>
                                            <li>We discontinue the Services, with reasonable advance notice</li>
                                        </ul>
                                        <p className="mt-4 p-4 bg-amber-50 dark:bg-amber-950/20 text-amber-700 dark:text-amber-400 rounded-xl border border-amber-100 dark:border-amber-900/30 text-sm">In cases of serious breach (e.g., unauthorized access, API abuse, or illegal activity), suspension may be immediate without prior notice.</p>
                                    </div>

                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-2">15.4 Effect of Termination</p>
                                        <p>Upon termination of these Terms for any reason:</p>
                                        <ul className="list-disc pl-6 mt-2 space-y-1">
                                            <li>Your license to use the Platform immediately terminates</li>
                                            <li>You must cease all use of the Services and delete any downloaded SDKs or software</li>
                                            <li>All provisions of these Terms that by their nature should survive termination (including intellectual property rights, disclaimers, limitations of liability, indemnification, and dispute resolution) will continue to apply</li>
                                            <li>We will handle your data in accordance with our Privacy Policy and applicable retention obligations</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Section 16 */}
                            <div className="pb-8">
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">16. GOVERNING LAW, DISPUTE RESOLUTION, AND ARBITRATION</h3>
                                <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium space-y-6">
                                    <p><strong>16.1 Governing Law</strong>: These Terms and any dispute, claim, or controversy arising out of or relating to these Terms, the Services, or your use of the Platform shall be governed by and construed in accordance with the laws of the Republic of India, without regard to its conflict of law principles. The United Nations Convention on Contracts for the International Sale of Goods (CISG) does not apply.</p>
                                    
                                    <p><strong>16.2 Informal Resolution</strong>: Before initiating any formal dispute resolution proceeding, you agree to first attempt to resolve the dispute informally by contacting us at <a href="mailto:hello@securedapp.in" className="text-brand-primary">hello@securedapp.in</a> with a written description of the dispute. We will attempt to resolve the dispute within 30 days of receiving your notice. This informal resolution period is a condition precedent to commencing arbitration.</p>

                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-3">16.3 Binding Arbitration</p>
                                        <p>If a dispute cannot be resolved informally within 30 days, it shall be finally resolved by binding arbitration in accordance with the following:</p>
                                        <ul className="list-disc pl-6 mt-3 space-y-2">
                                            <li>Arbitral Rules: The arbitration shall be conducted under the Arbitration and Conciliation Act, 1996, as amended</li>
                                            <li>Arbitrator: A sole arbitrator, mutually appointed by the parties within 30 days of a written request for arbitration. If the parties cannot agree, the arbitrator shall be appointed by the Bangalore International Mediation, Arbitration and Conciliation Centre (BIMACC) under its rules.</li>
                                            <li>Seat and Venue: Bengaluru, Karnataka, India</li>
                                            <li>Language: English</li>
                                            <li>Confidentiality: All arbitral proceedings, awards, and related materials shall be kept confidential</li>
                                            <li>Costs: Each party shall bear its own costs of arbitration, except that the arbitrator may apportion costs against a party acting in bad faith</li>
                                        </ul>
                                        <p className="mt-4 italic">Notwithstanding the above, either party may seek interim or emergency relief from a court of competent jurisdiction to prevent irreparable harm pending the outcome of arbitration.</p>
                                    </div>

                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-3 uppercase tracking-widest">16.4 Class Action Waiver</p>
                                        <p className="mb-2 uppercase font-black leading-tight">TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, ALL DISPUTES BETWEEN YOU AND THE COMPANY SHALL BE RESOLVED ON AN INDIVIDUAL BASIS ONLY. YOU WAIVE ANY RIGHT TO PARTICIPATE IN ANY CLASS ACTION LAWSUIT, CLASS ARBITRATION, OR ANY OTHER CONSOLIDATED OR REPRESENTATIVE PROCEEDING.</p>
                                        <p>The arbitrator shall have no authority to hear or decide any class action or consolidated claim and may not make an award to any person or entity not a party to the individual arbitration.</p>
                                        <p className="mt-4 italic">If this class action waiver is found to be unenforceable with respect to a particular claim, that claim shall be severed from arbitration and may be pursued in court, while all remaining claims shall continue to be resolved through arbitration.</p>
                                    </div>

                                    <p><strong>16.5 Jurisdiction for Non-Arbitrable Matters</strong>: For any disputes or claims not subject to arbitration (including applications for interim relief), the parties submit to the exclusive jurisdiction of the courts located in Bengaluru, Karnataka, India.</p>
                                </div>
                            </div>

                            {/* Section 17 */}
                            <div className="pb-8">
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">17. GENERAL PROVISIONS</h3>
                                <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-white mb-1 text-base">17.1 Entire Agreement</p>
                                            <p className="text-sm">These Terms, together with the Privacy Policy, Cookie Notice, API Documentation, and any supplemental terms expressly incorporated by reference, constitute the entire agreement.</p>
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-white mb-1 text-base">17.2 Severability</p>
                                            <p className="text-sm">If any provision is held invalid, it shall be modified to the minimum extent necessary or severed without affecting remaining provisions.</p>
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-white mb-1 text-base">17.3 No Waiver</p>
                                            <p className="text-sm">Failure to enforce any right does not constitute a waiver for the future. Waivers must be in writing.</p>
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-white mb-1 text-base">17.4 Assignment</p>
                                            <p className="text-sm">You may not assign rights without consent. The Company may freely assign in the event of a merger/acquisition.</p>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-4 pt-4">
                                        <p><strong>17.5 Independent Contractors</strong>: The parties are independent. No partnership or employment relationship is created.</p>
                                        <p><strong>17.6 No Professional Advice</strong>: Outputs are for informational purposes only and do not constitute legal or financial advice.</p>
                                        <p><strong>17.7 Force Majeure</strong>: The Company is not liable for failures beyond its reasonable control (natural disasters, pandemics, etc.).</p>
                                        <p><strong>17.8 Notices</strong>: We notify via email or platform. You notify us at <a href="mailto:hello@securedapp.in" className="text-brand-primary">hello@securedapp.in</a>.</p>
                                        <p><strong>17.9 Language</strong>: The English version prevails in case of conflict or ambiguity with translations.</p>
                                        <p><strong>17.10 Headings</strong>: Section headings are for convenience only and do not affect interpretation.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Section 18 */}
                            <div className="pb-16">
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">18. CONTACT INFORMATION</h3>
                                <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium space-y-6">
                                    <p>For questions, concerns, or legal notices regarding these Terms and Conditions, please contact us using the details below.</p>
                                    
                                    <div className="glass p-8 rounded-[2.5rem] border-slate-200 dark:border-slate-800/50 space-y-6">
                                        <div className="flex items-start space-x-5">
                                            <div className="p-4 bg-brand-primary/10 rounded-2xl text-brand-primary">
                                                <Scale size={28} />
                                            </div>
                                            <div>
                                                <p className="text-sm uppercase tracking-widest text-slate-500 mb-1 font-bold">Vettedcode Technologies India Pvt. Ltd.</p>
                                                <p className="text-slate-900 dark:text-white font-bold text-xl mb-2">QuantumVault / SecureDApp</p>
                                                <div className="space-y-1 text-base">
                                                    <p>235, 2nd and 3rd Floor, 13th Cross Road, Indira Nagar 2nd Stage, Hoysala Nagar, Bengaluru, Karnataka 560038, India</p>
                                                    <p className="flex items-center space-x-2">
                                                        <Mail size={16} className="text-brand-primary" />
                                                        <a href="mailto:hello@securedapp.in" className="text-brand-primary font-bold">hello@securedapp.in</a>
                                                    </p>
                                                    <p className="flex items-center space-x-2">
                                                        <AlertCircle size={16} className="text-brand-primary" />
                                                        <span>Technical: <a href="mailto:himanshu@securedapp.in" className="text-brand-primary underline">himanshu@securedapp.in</a></span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="text-center pt-8">
                                        <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">
                                            We aim to respond to all formal inquiries within 5 business days.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <Footer />
            </main>
        </div>
    );
};

export default TermsOfService;
