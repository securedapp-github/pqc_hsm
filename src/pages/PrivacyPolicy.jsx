import React from 'react';
import { motion } from 'framer-motion';
import { 
    Scale, 
    Mail, 
    AlertCircle
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
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
                            <Scale size={16} />
                            <span className="text-xs font-bold uppercase tracking-widest">Legal Document</span>
                        </motion.div>
                        <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
                            Privacy <span className="text-gradient">Policy</span>
                        </h1>
                        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-3xl mx-auto font-medium">
                            Last Updated: March 2026. This policy describes how we collect, use, and protect your data in accordance with DPDP Act 2023 and GDPR.
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
                                    <p className="font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-4">
                                        IMPORTANT NOTICE: This Privacy Policy is a legally binding document. Please read it carefully before using the QuantumVault platform. By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree with any part of this Policy, you must not use our Services.
                                    </p>
                                    <p>
                                        This Privacy Policy ('Policy') describes how Vettedcode Technologies India Pvt. Ltd., a company incorporated under the laws of India and doing business as SecureDApp ('Company', 'we', 'us', or 'our'), collects, uses, stores, discloses, and protects your personal information when you access or use the QuantumVault platform available at <a href="https://quantumvault.tech" className="text-brand-primary underline">https://quantumvault.tech</a>, including its APIs, SDKs, web and mobile interfaces, and all associated features and tools (collectively, the 'Platform' or 'Services').
                                    </p>
                                    <p>
                                        QuantumVault is an enterprise-grade post-quantum cryptography and blockchain security platform. It provides services including, but not limited to, quantum-resistant key generation and management, cryptographic APIs, smart contract security auditing, AI-powered threat detection, Zero-Knowledge Proof (ZKP)-based verification, and digital asset protection infrastructure. Given the sensitive and technical nature of our Services, we are committed to handling your personal information with the highest standards of security, transparency, and legal compliance.
                                    </p>
                                    <p>
                                        This Policy is compliant with the Digital Personal Data Protection (DPDP) Act, 2023 (India), the General Data Protection Regulation (GDPR) 2016/679 (European Union), and other applicable data protection laws. In the event of any conflict between the provisions of this Policy and applicable law, the applicable law shall prevail.
                                    </p>
                                </div>
                            </div>

                            {/* Section 1 */}
                            <div className="pb-8">
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">1. Developer & Contact Information</h3>
                                <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium space-y-4">
                                    <p>The entity responsible for your personal data under this Policy is:</p>
                                    <div className="glass p-8 rounded-3xl border-slate-200 dark:border-slate-800/50 space-y-3">
                                        <p><strong>Legal Entity:</strong> Vettedcode Technologies India Pvt. Ltd.</p>
                                        <p><strong>Trading Name:</strong> SecureDApp / QuantumVault</p>
                                        <p><strong>Registered Address:</strong> 235, 2nd and 3rd Floor, 13th Cross Road, 2nd Stage Hoysala Nagar, Indiranagar, Bengaluru Urban, Karnataka – 560038, India</p>
                                        <p><strong>Primary Contact Email:</strong> <a href="mailto:hello@securedapp.in" className="text-brand-primary">hello@securedapp.in</a></p>
                                        <p><strong>Developer Contact:</strong> <a href="mailto:himanshu@securedapp.in" className="text-brand-primary">himanshu@securedapp.in</a></p>
                                        <p><strong>Platform URL:</strong> <a href="https://quantumvault.tech" className="text-brand-primary" target="_blank" rel="noopener noreferrer">https://quantumvault.tech</a></p>
                                        <p><strong>Data Protection Officer (DPO):</strong> <a href="mailto:hello@securedapp.in" className="text-brand-primary">hello@securedapp.in</a></p>
                                    </div>
                                    <p>If you have any questions, concerns, or requests regarding this Privacy Policy or the processing of your personal data, you are encouraged to contact our Data Protection Officer at the email address listed above. We are committed to responding to all data-related inquiries within the timeframes prescribed by applicable law.</p>
                                </div>
                            </div>

                            {/* More sections will follow */}
                            {/* Section 2 */}
                            <div className="pb-8">
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">2. SCOPE AND APPLICATION OF THIS POLICY</h3>
                                <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium space-y-4">
                                    <p>This Policy applies to all individuals who interact with QuantumVault in any capacity, including but not limited to:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Registered users who create and maintain accounts on the Platform</li>
                                        <li>Enterprise clients and their authorized personnel accessing API services</li>
                                        <li>Developers who integrate QuantumVault APIs and SDKs into their applications</li>
                                        <li>Visitors who browse the QuantumVault website without registering</li>
                                        <li>Individuals who communicate with us via email, chat, or other channels</li>
                                        <li>Parties whose data may be processed indirectly through our enterprise clients' use of the Platform</li>
                                    </ul>
                                    <p>This Policy does not cover the data processing activities of third-party services, applications, or platforms that may be linked to or integrated with QuantumVault. You are encouraged to review the privacy policies of any third-party services you use in connection with our Platform.</p>
                                </div>
                            </div>

                            {/* Section 3 */}
                            <div className="pb-8">
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">3. INFORMATION WE COLLECT</h3>
                                <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium space-y-6">
                                    <p>We collect personal information in three primary ways: information you provide to us directly, information collected automatically when you use the Platform, and information obtained from third-party sources. The categories and types of data we collect are described in detail below.</p>
                                    
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white mb-3">3.1 Information You Provide Directly</h4>
                                        <div className="space-y-4">
                                            <div>
                                                <p className="font-bold underline mb-2">A. Account Registration and Profile Data</p>
                                                <p>When you create an account on QuantumVault, we collect the information you provide during the registration process, which may include:</p>
                                                <ul className="list-disc pl-6 mt-2 space-y-1">
                                                    <li>Full name (optional but recommended for enterprise accounts)</li>
                                                    <li>Business email address and/or personal email address</li>
                                                    <li>Mobile phone number (for two-factor authentication and notifications)</li>
                                                    <li>Username and password (passwords are stored using industry-standard hashing algorithms and are never stored in plain text)</li>
                                                    <li>Organization or company name, industry, and role or job title</li>
                                                    <li>Billing address and country of residence or incorporation</li>
                                                    <li>Profile picture or avatar (optional)</li>
                                                    <li>Time zone and language preferences</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className="font-bold underline mb-2">B. Cryptographic and Blockchain Data</p>
                                                <p>In connection with the use of QuantumVault's core cryptographic and blockchain services, we may collect:</p>
                                                <ul className="list-disc pl-6 mt-2 space-y-1 text-slate-600 dark:text-slate-400">
                                                    <li>Blockchain wallet addresses (public keys) used for verification, authentication, and asset management</li>
                                                    <li>API key identifiers (note: actual secret API keys are hashed and never stored in retrievable form)</li>
                                                    <li>Public keys generated through the Platform's key management services</li>
                                                    <li>Transaction metadata and cryptographic operation logs (e.g., key generation events, signing requests, verification outcomes)</li>
                                                    <li>Smart contract addresses and associated audit request data</li>
                                                    <li>ZKP proofs submitted for verification purposes</li>
                                                </ul>
                                                <p className="mt-2 text-brand-primary font-bold">We do not store private or secret cryptographic keys generated through the Platform. Once generated, private keys are returned to you and you are solely responsible for their secure storage.</p>
                                            </div>
                                            <div>
                                                <p className="font-bold underline mb-2">C. Payment and Billing Information</p>
                                                <p>For paid subscription and usage-based plans, we collect the following billing information:</p>
                                                <ul className="list-disc pl-6 mt-2 space-y-1">
                                                    <li>Payment method details (credit/debit card numbers, expiry dates, and CVV are processed and stored exclusively by our PCI-DSS compliant third-party payment gateway providers; we do not store raw card data)</li>
                                                    <li>Billing name and address</li>
                                                    <li>Tax identification numbers (where applicable for GST/VAT compliance)</li>
                                                    <li>Transaction history and invoices generated on the Platform</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className="font-bold underline mb-2">D. Communications and Support Data</p>
                                                <p>When you contact us for support, submit feedback, or communicate with us in any other way, we collect:</p>
                                                <ul className="list-disc pl-6 mt-2 space-y-1">
                                                    <li>The content of your messages, emails, or support tickets</li>
                                                    <li>Your email address and any contact information you provide</li>
                                                    <li>Records of communications between you and our support team</li>
                                                    <li>Feedback, survey responses, and feature requests you submit</li>
                                                    <li>Records of any agreements or consents you provide</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white mb-3">3.2 Information Collected Automatically</h4>
                                        <p>When you access or use the Platform, we automatically collect certain technical and usage data. This information is primarily used for security, analytics, and improving the Platform experience.</p>
                                        <div className="space-y-4 mt-4">
                                            <div>
                                                <p className="font-bold underline mb-2">A. Device and Network Data</p>
                                                <ul className="list-disc pl-6 space-y-1 text-slate-600 dark:text-slate-400">
                                                    <li>Internet Protocol (IP) address and approximate geolocation (country and city level)</li>
                                                    <li>Device type, model, and manufacturer</li>
                                                    <li>Operating system name, version, and build</li>
                                                    <li>Browser type, version, and installed plugins</li>
                                                    <li>Mobile device identifiers (device ID, advertising ID where applicable)</li>
                                                    <li>Network type and Internet Service Provider (ISP) information</li>
                                                    <li>Screen resolution and display settings</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className="font-bold underline mb-2">B. Usage and Behavioral Data</p>
                                                <ul className="list-disc pl-6 space-y-1 text-slate-600 dark:text-slate-400">
                                                    <li>Pages visited, features accessed, and navigation paths on the Platform</li>
                                                    <li>Time and date of access, session duration, and frequency of use</li>
                                                    <li>API endpoint calls, request volumes, response times, and error codes</li>
                                                    <li>Feature interaction logs (e.g., which cryptographic algorithms were selected, how key management tools were used)</li>
                                                    <li>Search queries entered within the Platform</li>
                                                    <li>Referring URLs and exit pages</li>
                                                    <li>Clicks, scrolls, and other interaction events</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className="font-bold underline mb-2">C. Cookies and Tracking Technologies</p>
                                                <p>We use cookies and similar tracking technologies including web beacons, pixel tags, and local storage objects. These are described in detail in Section 7 of this Policy.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white mb-3">3.3 Information from Third-Party Sources</h4>
                                        <p>We may receive information about you from third-party sources, which we may combine with information we already hold. These sources include:</p>
                                        <ul className="list-disc pl-6 mt-2 space-y-1 text-slate-600 dark:text-slate-400">
                                            <li>Social media platforms (e.g., LinkedIn, GitHub), if you choose to authenticate using a social login option</li>
                                            <li>Public blockchain networks and distributed ledgers (e.g., transaction histories associated with wallet addresses you provide)</li>
                                            <li>Identity verification and KYC/AML service providers (where legally required)</li>
                                            <li>Marketing partners and analytics providers (aggregate and anonymized data only)</li>
                                            <li>Business partners who refer users to our Platform</li>
                                            <li>Publicly available sources such as company registries, professional directories, and public databases</li>
                                        </ul>
                                        <p className="mt-4">All information received from third-party sources is handled in accordance with this Privacy Policy and the applicable agreements with those third parties.</p>
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white mb-3">3.4 Sensitive Personal Information</h4>
                                        <p>Certain categories of personal information are considered 'sensitive' under applicable law and require heightened protection. We process the following categories of sensitive information only where strictly necessary and with appropriate legal basis:</p>
                                        <ul className="list-disc pl-6 mt-2 space-y-2 text-slate-600 dark:text-slate-400">
                                            <li><strong>Biometric data:</strong> Used for identity verification purposes where applicable (e.g., liveness checks). Processed only with your explicit consent.</li>
                                            <li><strong>Government-issued identifiers:</strong> Including Aadhaar numbers, PAN, passport numbers, or equivalent identifiers in other jurisdictions, where required for KYC/AML compliance under applicable regulatory frameworks.</li>
                                            <li><strong>Financial account information:</strong> To the extent necessary for payment processing and fraud prevention.</li>
                                        </ul>
                                        <p className="mt-4">We do not process sensitive personal information for advertising, profiling, or any purpose beyond those stated in this Policy. You have the right to withdraw consent for the processing of sensitive information at any time, subject to the conditions described in Section 11.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Section 4 */}
                            <div className="pb-8">
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">4. HOW WE USE YOUR INFORMATION</h3>
                                <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium space-y-6">
                                    <p>We process your personal information for specific, explicit, and legitimate purposes. We do not process your data in ways that are incompatible with these stated purposes without your prior consent. The purposes for which we process your data, and the legal basis for each, are described below.</p>
                                    
                                    <div className="space-y-4">
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-white mb-2">4.1 Providing and Operating the Services</p>
                                            <ul className="list-disc pl-6 space-y-1">
                                                <li>Creating and managing your user account and authentication credentials</li>
                                                <li>Processing and fulfilling API requests and cryptographic operations you initiate</li>
                                                <li>Generating, managing, and distributing cryptographic key pairs using post-quantum algorithms (ML-KEM, ML-DSA, SLH-DSA, and others as standardized by NIST)</li>
                                                <li>Executing ZKP-based verification and attestation workflows</li>
                                                <li>Performing smart contract security audits and delivering audit reports</li>
                                                <li>Processing payments, generating invoices, and managing your subscription</li>
                                                <li>Providing customer support and responding to your inquiries</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-white mb-2">4.2 Security, Fraud Prevention, and Compliance</p>
                                            <ul className="list-disc pl-6 space-y-1">
                                                <li>Monitoring Platform activity to detect and prevent unauthorized access, data breaches, and fraudulent use</li>
                                                <li>Conducting identity verification and KYC/AML checks where required by law</li>
                                                <li>Maintaining audit logs for legal, compliance, and forensic purposes</li>
                                                <li>Enforcing our Terms and Conditions and other policies</li>
                                                <li>Complying with applicable laws, court orders, regulatory requirements, and lawful government requests</li>
                                                <li>Protecting the rights, property, and safety of the Company, its users, and third parties</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-white mb-2">4.3 Improving and Developing the Platform</p>
                                            <ul className="list-disc pl-6 space-y-1">
                                                <li>Analyzing usage patterns and performance metrics to identify areas for improvement</li>
                                                <li>Conducting research and development to introduce new features and cryptographic capabilities</li>
                                                <li>Running A/B tests and product experiments (using anonymized or aggregated data only)</li>
                                                <li>Training AI and machine learning models used for threat detection and smart contract analysis (using anonymized or de-identified data only)</li>
                                                <li>Gathering and acting on user feedback and feature requests</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-white mb-2">4.4 Communications</p>
                                            <ul className="list-disc pl-6 space-y-1">
                                                <li>Sending transactional communications such as account confirmations, security alerts, API usage notifications, and billing receipts</li>
                                                <li>Notifying you of important changes to the Platform, its features, or these policies</li>
                                                <li>Responding to your support requests, inquiries, and feedback</li>
                                                <li>Sending service-related announcements that are integral to the operation of your account</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-white mb-2">4.5 Marketing and Promotional Activities</p>
                                            <p>We may send you promotional communications about QuantumVault features, new products, industry reports, or events, but only:</p>
                                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                                <li>Where you have given your explicit consent to receive such communications, OR</li>
                                                <li>Where you are an existing customer and we are communicating about similar services to those you have already purchased, in compliance with applicable law</li>
                                            </ul>
                                            <p className="mt-4">You can opt out of marketing communications at any time by clicking the 'unsubscribe' link in any marketing email, adjusting your notification preferences in your account settings, or contacting us at <a href="mailto:hello@securedapp.in" className="text-brand-primary">hello@securedapp.in</a>. Opting out of marketing communications will not affect your receipt of transactional or service-related messages.</p>
                                            <p className="mt-2 text-brand-accent italic">We do not use your personal data for behavioural advertising or sell your data to advertising networks.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Section 5 */}
                            <div className="pb-8">
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">5. LEGAL BASIS FOR PROCESSING</h3>
                                <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium space-y-6">
                                    <p>We rely on the following legal bases to process your personal information, as applicable under the DPDP Act, 2023 and other applicable laws:</p>
                                    
                                    <div className="space-y-4">
                                        <p><strong>5.1 Contractual Necessity</strong>: Processing your data is necessary to perform the contract we have with you – namely, providing you with access to the QuantumVault Platform and its features. This includes account management, API services, payment processing, and customer support.</p>
                                        <p><strong>5.2 Legal Obligation</strong>: We process certain data to comply with applicable legal and regulatory obligations, including tax and accounting laws, KYC/AML requirements, court orders, and directives from regulatory authorities.</p>
                                        <p><strong>5.3 Legitimate Interests</strong>: We process certain data based on our legitimate interests (or those of a third party), provided such interests are not overridden by your rights and interests. These include: Operating and securing our Platform and infrastructure; Preventing fraud, abuse, and unauthorized use; Improving and developing our products and services; Understanding how our Platform is used to enhance the user experience; Protecting and enforcing our legal rights.</p>
                                        <p><strong>5.4 Consent</strong>: For certain optional data processing activities – such as marketing communications, the processing of sensitive personal data, and the use of non-essential cookies – we rely on your explicit prior consent. You may withdraw consent at any time without affecting the lawfulness of processing that occurred before withdrawal.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Section 6 */}
                            <div className="pb-8">
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">6. SHARING YOUR PERSONAL INFORMATION</h3>
                                <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium space-y-6">
                                    <p>We do not sell, trade, or rent your personal information to any third party. We may share your personal data only in the circumstances described below, and only to the minimum extent necessary for the stated purpose.</p>
                                    
                                    <div className="space-y-4">
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-white mb-2">6.1 Service Providers and Data Processors</p>
                                            <p>We engage carefully selected third-party service providers to assist us in operating the Platform. These providers act as data processors and are permitted to access your personal data only to perform specific tasks on our behalf. They are contractually bound by data processing agreements that impose strict obligations on data confidentiality, security, and use limitations. Categories of service providers include:</p>
                                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                                <li>Cloud infrastructure and hosting providers (e.g., AWS, Google Cloud, Azure) for computing, storage, and content delivery</li>
                                                <li>Payment gateway and financial service providers for processing subscriptions and transactions</li>
                                                <li>Identity verification and KYC/AML service providers</li>
                                                <li>Customer relationship management (CRM) and support ticketing tools</li>
                                                <li>Email and communication service providers for transactional and marketing communications</li>
                                                <li>Analytics and monitoring platforms (receiving anonymized or aggregated data only)</li>
                                                <li>Security and fraud detection services</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-white mb-2">6.2 Business Transfers</p>
                                            <p>In the event of a merger, acquisition, sale, restructuring, or other corporate transaction involving the Company or its assets, your personal information may be transferred to the acquiring or successor entity as part of that transaction. We will notify you of any such transfer via email or a prominent notice on the Platform, and the transferee will be required to comply with this Privacy Policy or notify you of any material changes.</p>
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-white mb-2">6.3 Legal Requirements and Law Enforcement</p>
                                            <p>We may disclose your personal information if we believe in good faith that such disclosure is necessary to:</p>
                                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                                <li>Comply with a legal obligation, court order, judicial or governmental request, or applicable law</li>
                                                <li>Enforce our Terms and Conditions or other agreements</li>
                                                <li>Protect the rights, property, or safety of the Company, our users, or the general public</li>
                                                <li>Detect, prevent, or address fraud, security issues, or technical problems</li>
                                                <li>Cooperate with law enforcement agencies or regulatory authorities in connection with an investigation</li>
                                            </ul>
                                            <p className="mt-2 text-sm italic">Where permitted by law, we will attempt to notify you before disclosing your data in response to legal process, unless prohibited from doing so.</p>
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-white mb-2">6.4 With Your Explicit Consent</p>
                                            <p>We may share your personal information with any other third party where you have provided clear and informed consent for such sharing. You may withdraw this consent at any time by contacting us.</p>
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-white mb-2">6.5 Aggregated and Anonymized Data</p>
                                            <p>We may share aggregated, de-identified, or anonymized data that does not identify you personally with partners, researchers, or the public for analytical, educational, or business purposes. This data cannot reasonably be used to identify any individual.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Section 7 */}
                            <div className="pb-8">
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">7. COOKIES AND TRACKING TECHNOLOGIES</h3>
                                <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium space-y-6">
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-2">7.1 What Are Cookies?</p>
                                        <p>Cookies are small text files stored on your device when you visit a website. They allow the website to recognize your device, remember your preferences, and gather information about how you use the site. Similar technologies include web beacons (also called pixel tags or clear GIFs), local storage, session storage, and software development kit (SDK) tracking.</p>
                                    </div>
                                    
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-2">7.2 Categories of Cookies We Use</p>
                                        <div className="space-y-4">
                                            <p><strong>A. Strictly Necessary Cookies</strong>: These cookies are essential for the Platform to function and cannot be disabled. They are used to maintain your login session, ensure security (e.g., CSRF protection), and enable core API functionality. No personal data is collected for marketing purposes through these cookies.</p>
                                            <p><strong>B. Performance and Analytics Cookies</strong>: These cookies help us understand how users interact with our Platform by collecting anonymized information about page visits, feature usage, error rates, and performance metrics. This data is used solely to improve the Platform and is not shared with third-party advertisers.</p>
                                            <p><strong>C. Functional Cookies</strong>: These cookies remember your preferences (such as language settings, time zone, and dashboard layout) to provide a more personalized experience. They are not used for advertising.</p>
                                            <p><strong>D. Security Cookies</strong>: We use cookies to support our security infrastructure, including fraud detection, rate limiting, DDoS mitigation, and anomaly detection. These cookies may record device fingerprints and behavioral signals.</p>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-2">7.3 Third-Party Cookies</p>
                                        <p>We do not permit third-party advertising networks to place cookies on our Platform. Any third-party cookies that may be present are strictly limited to essential service providers (such as payment processors or security vendors) who have contractual obligations to use such data only for the purposes we specify.</p>
                                    </div>

                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-2">7.4 Managing Cookie Preferences</p>
                                        <p>You can manage cookie settings through your browser's privacy or cookie settings. Most browsers allow you to block or delete cookies. Please note that disabling certain cookies (particularly strictly necessary cookies) may affect the functionality of the Platform, including your ability to log in or use certain features. For a complete list of cookies we use and their specific purposes, please refer to our Cookie Notice available on the Platform.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Section 8 */}
                            <div className="pb-8">
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">8. ARTIFICIAL INTELLIGENCE AND ADVANCED TECHNOLOGY FEATURES</h3>
                                <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium space-y-6">
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-2">8.1 AI-Powered Features</p>
                                        <p>QuantumVault integrates artificial intelligence (AI) and machine learning (ML) technologies into several of its features. These include:</p>
                                        <ul className="list-disc pl-6 mt-2 space-y-1">
                                            <li>Smart Contract Security Auditing: Our AI models analyze smart contract code to identify vulnerabilities, logic errors, reentrancy risks, gas inefficiencies, and other security issues. Source code you submit for audit is processed by our models and may be temporarily stored to generate audit reports.</li>
                                            <li>Phishing and Threat Detection: We use ML-based anomaly detection and behavioral analysis to identify suspicious activity, phishing attempts, and potential security threats targeting your account or your users.</li>
                                            <li>Cryptographic Algorithm Recommendations: Our platform may analyze your use case and recommend appropriate post-quantum cryptographic algorithms based on your security requirements.</li>
                                            <li>Automated Risk Scoring: For enterprise API usage, we may apply AI-based risk scoring to help you monitor and manage access patterns.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-2">8.2 How We Process Data for AI Features</p>
                                        <p>Data processed by our AI systems is handled according to the following principles:</p>
                                        <ul className="list-disc pl-6 mt-2 space-y-1">
                                            <li>Minimization: Only the data strictly necessary to deliver the relevant AI feature is processed.</li>
                                            <li>Anonymization: Where possible, data used to train or improve AI models is anonymized or de-identified before use.</li>
                                            <li>No Repurposing: Your data is not used to train general-purpose AI models that would benefit third parties.</li>
                                            <li>Third-Party AI Providers: Where we use third-party AI infrastructure, those providers are bound by data processing agreements and are prohibited from using your data for their own purposes.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-2">8.3 Post-Quantum Cryptography Features</p>
                                        <p>QuantumVault's core value proposition involves post-quantum cryptographic (PQC) operations, including:</p>
                                        <ul className="list-disc pl-6 mt-2 space-y-1">
                                            <li>Key generation using NIST-standardized PQC algorithms (ML-KEM, ML-DSA, SLH-DSA)</li>
                                            <li>Digital signature creation and verification using quantum-resistant schemes</li>
                                            <li>Hybrid encryption combining classical and post-quantum algorithms for transitional security</li>
                                            <li>Secure enclave and hardware security module (HSM) integrations for key protection</li>
                                        </ul>
                                        <p className="mt-4 text-brand-primary font-bold">When you use these features, metadata about your cryptographic operations (algorithm used, timestamp, key identifier, operation type) is logged for audit and billing purposes. Private keys are NEVER logged, stored, or transmitted to our servers after delivery to you.</p>
                                    </div>

                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-2">8.4 Opting Out of AI Features</p>
                                        <p>You may opt out of certain AI-powered features through your account settings under 'Privacy & AI Preferences'. Note that opting out of some AI features may limit the functionality available to you. To request that your data be excluded from any AI model improvement processes, please contact us at <a href="mailto:hello@securedapp.in" className="text-brand-primary">hello@securedapp.in</a>.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Section 9 */}
                            <div className="pb-8">
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">9. CROSS-BORDER DATA TRANSFERS</h3>
                                <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium space-y-6">
                                    <p>QuantumVault is operated by an entity incorporated in India, and our primary data processing infrastructure is located in India. However, to deliver the Services effectively, we may process or transfer your personal data to servers or service providers located in other countries, including within the European Economic Area (EEA), the United States, Singapore, and other jurisdictions.</p>
                                    <p>All cross-border transfers of personal data are conducted in strict compliance with applicable law, including:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li><strong>DPDP Act, 2023 (India)</strong>: Transfers are made only to countries or territories notified as permissible by the Government of India, or are subject to contractual obligations that ensure equivalent protection.</li>
                                        <li><strong>GDPR (EU/EEA Users)</strong>: Where applicable, transfers are governed by Standard Contractual Clauses (SCCs) approved by the European Commission, or other appropriate safeguards.</li>
                                        <li><strong>Other Jurisdictions</strong>: We comply with applicable data localization and transfer requirements of any jurisdiction in which we operate.</li>
                                    </ul>
                                    <p>You may request details about the specific safeguards in place for cross-border transfers of your personal data by contacting our DPO at <a href="mailto:hello@securedapp.in" className="text-brand-primary">hello@securedapp.in</a>.</p>
                                </div>
                            </div>

                            {/* Section 10 */}
                            <div className="pb-8">
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">10. DATA RETENTION</h3>
                                <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium space-y-6">
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-2">10.1 Retention Periods</p>
                                        <p>We retain your personal information for only as long as necessary to fulfill the purposes for which it was collected, as described in this Policy, or as required by applicable law. Our general retention guidelines are as follows:</p>
                                        <ul className="list-disc pl-6 mt-2 space-y-1">
                                            <li>Account data: Retained for the duration of your account and for up to 90 days after account deletion or termination, after which it is permanently deleted or anonymized.</li>
                                            <li>Transaction and billing records: Retained for a minimum of 7 years from the date of the transaction, as required by applicable accounting and tax laws.</li>
                                            <li>API and cryptographic operation logs: Retained for up to 12 months for security monitoring and billing reconciliation purposes, then deleted or archived in anonymized form.</li>
                                            <li>KYC/AML verification records: Retained for the period required by applicable anti-money laundering regulations, which may be up to 5 years after the end of the business relationship.</li>
                                            <li>Support communications: Retained for up to 3 years after the closure of a support ticket.</li>
                                            <li>Marketing consent records: Retained for as long as you remain a subscriber to marketing communications, plus an additional 3 years as evidence of consent.</li>
                                            <li>Security and audit logs: Retained for up to 24 months for forensic and incident response purposes.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-2">10.2 Deletion and Anonymization</p>
                                        <p>Upon the expiry of the applicable retention period, your personal data will be:</p>
                                        <ul className="list-disc pl-6 mt-2 space-y-1">
                                            <li>Permanently deleted from our active databases and backups (including from backup archives within a reasonable period, typically 90 days after the standard deletion cycle), OR</li>
                                            <li>Anonymized in a manner that removes any possibility of re-identification, after which it may be retained indefinitely for statistical or analytical purposes.</li>
                                        </ul>
                                        <p className="mt-4">You may request early deletion of your data by exercising your right to erasure as described in Section 11. Early deletion requests will be processed subject to our legal obligations and legitimate interests in retaining certain records.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Section 11 */}
                            <div className="pb-8">
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">11. HOW WE KEEP YOUR INFORMATION SAFE</h3>
                                <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium space-y-6">
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-2">11.1 Technical Security Measures</p>
                                        <p>We implement a comprehensive set of technical security controls to protect your personal information, including:</p>
                                        <ul className="list-disc pl-6 mt-2 space-y-1">
                                            <li>Encryption at Rest: All personal data stored on our servers is encrypted using AES-256 encryption. Cryptographic key material is additionally protected using post-quantum algorithms and hardware-backed key stores.</li>
                                            <li>Encryption in Transit: All data transmitted between your device and our servers is protected using TLS 1.2 or higher. We support TLS 1.3 for all primary API endpoints.</li>
                                            <li>Post-Quantum Cryptographic Standards: QuantumVault uses NIST FIPS 203, 204, and 205 compliant algorithms for its internal key management and cryptographic operations.</li>
                                            <li>Access Controls: Strict role-based access controls (RBAC) limit internal access to personal data on a need-to-know basis. Privileged access is subject to multi-factor authentication and logged audit trails.</li>
                                            <li>API Security: All API endpoints are protected by API key authentication, rate limiting, IP whitelisting options, and anomaly detection. Suspicious API activity triggers automatic alerts and temporary suspension.</li>
                                            <li>Infrastructure Security: Our cloud infrastructure is hardened following CIS Benchmarks, with network segmentation, web application firewalls (WAF), DDoS mitigation, and intrusion detection systems.</li>
                                            <li>Penetration Testing: We conduct regular third-party penetration testing and vulnerability assessments. Critical findings are remediated on a priority basis.</li>
                                            <li>Secure Development Practices: Our development processes include code reviews, static and dynamic application security testing (SAST/DAST), and dependency vulnerability scanning.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-2">11.2 Organizational Security Measures</p>
                                        <ul className="list-disc pl-6 mt-2 space-y-1">
                                            <li>All employees and contractors who handle personal data are bound by confidentiality agreements and receive regular data protection and security training.</li>
                                            <li>We maintain a formal Information Security Policy and a Data Breach Response Plan.</li>
                                            <li>Access to production systems and personal data is restricted to authorized personnel, subject to regular access reviews.</li>
                                            <li>We conduct periodic internal audits of our data processing activities and security practices.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-2">11.3 Limitations of Security</p>
                                        <p>Despite our best efforts, no method of electronic transmission or data storage is completely immune to security risks. We cannot guarantee absolute security against all possible threats, including sophisticated cyberattacks by determined adversaries. You are encouraged to use strong, unique passwords, enable two-factor authentication on your account, and follow our security best practice guidelines. Transmission of data to and from the Platform is at your own risk. If you suspect that your account or data has been compromised, please contact us immediately at <a href="mailto:hello@securedapp.in" className="text-brand-primary">hello@securedapp.in</a>.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Section 12 */}
                            <div className="pb-8">
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">12. YOUR PRIVACY RIGHTS</h3>
                                <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium space-y-6">
                                    <p>Depending on your jurisdiction, you may have the following rights in relation to your personal data. We are committed to facilitating the exercise of these rights in accordance with applicable law.</p>
                                    
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="glass p-6 rounded-2xl border-slate-200 dark:border-slate-800/50">
                                            <p className="font-bold text-slate-900 dark:text-white mb-2">12.1 Right of Access</p>
                                            <p className="text-sm">Request a copy of the personal information we hold about you and information about how we process it.</p>
                                        </div>
                                        <div className="glass p-6 rounded-2xl border-slate-200 dark:border-slate-800/50">
                                            <p className="font-bold text-slate-900 dark:text-white mb-2">12.2 Right to Correction</p>
                                            <p className="text-sm">Request correction of inaccurate, incomplete, or outdated personal information.</p>
                                        </div>
                                        <div className="glass p-6 rounded-2xl border-slate-200 dark:border-slate-800/50">
                                            <p className="font-bold text-slate-900 dark:text-white mb-2">12.3 Right to Erasure</p>
                                            <p className="text-sm">Request deletion of your personal data under certain conditions ('Right to be Forgotten').</p>
                                        </div>
                                        <div className="glass p-6 rounded-2xl border-slate-200 dark:border-slate-800/50">
                                            <p className="font-bold text-slate-900 dark:text-white mb-2">12.4 Right to Restrict Processing</p>
                                            <p className="text-sm">Request that we limit the processing of your personal data in certain circumstances.</p>
                                        </div>
                                        <div className="glass p-6 rounded-2xl border-slate-200 dark:border-slate-800/50">
                                            <p className="font-bold text-slate-900 dark:text-white mb-2">12.5 Right to Data Portability</p>
                                            <p className="text-sm">Receive your data in a structured, commonly used, machine-readable format.</p>
                                        </div>
                                        <div className="glass p-6 rounded-2xl border-slate-200 dark:border-slate-800/50">
                                            <p className="font-bold text-slate-900 dark:text-white mb-2">12.6 Right to Object</p>
                                            <p className="text-sm">Object to processing where we rely on legitimate interests or for direct marketing.</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4 pt-4 text-slate-600 dark:text-slate-400">
                                        <p><strong>12.7 Right to Withdraw Consent</strong>: Where we rely on consent, you have the right to withdraw it at any time.</p>
                                        <p><strong>12.8 Rights Related to Automated Decision-Making</strong>: Right not to be subject to decisions made solely by automated processing.</p>
                                        <p><strong>12.9 Right to Lodge a Complaint</strong>: Right to lodge a complaint with the relevant data protection supervisory authority.</p>
                                    </div>

                                    <div className="mt-8">
                                        <p className="font-bold text-slate-900 dark:text-white mb-4">12.10 How to Exercise Your Rights</p>
                                        <p>To exercise any of the above rights, please:</p>
                                        <ul className="list-disc pl-6 mt-2 space-y-2">
                                            <li>Submit a request via our data rights portal at: <a href="https://securexdid.com/account-delete-request" className="text-brand-primary" target="_blank" rel="noopener noreferrer">https://securexdid.com/account-delete-request</a></li>
                                            <li>Email our Data Protection Officer at: <a href="mailto:hello@securedapp.in" className="text-brand-primary">hello@securedapp.in</a> with the subject line 'Data Rights Request'</li>
                                        </ul>
                                        <p className="mt-4 text-sm bg-slate-100 dark:bg-slate-800/50 p-4 rounded-xl">We will respond to all requests within 30 days of receipt, or within such shorter period as may be required by applicable law. In complex cases, we may extend this period by a further 30 days. We may need to verify your identity before processing your request.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Section 13 */}
                            <div className="pb-8">
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">13. CHILDREN'S PRIVACY</h3>
                                <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium space-y-4">
                                    <p>The QuantumVault Platform is intended exclusively for individuals who are 18 years of age or older. We do not knowingly collect, process, or store personal information from individuals under the age of 18 ('minors').</p>
                                    <p>If you are a parent or guardian and believe that a minor has provided us with personal information without your consent, please contact us immediately at <a href="mailto:hello@securedapp.in" className="text-brand-primary">hello@securedapp.in</a>. Upon receiving such notification and verifying the claim, we will take prompt steps to delete the relevant data and terminate any account associated with the minor.</p>
                                    <p>If we discover that we have inadvertently collected personal data from a minor, we will delete it immediately and deactivate any associated account.</p>
                                </div>
                            </div>

                            {/* Section 14 */}
                            <div className="pb-8">
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">14. SOCIAL LOGIN DATA</h3>
                                <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium space-y-4">
                                    <p>QuantumVault may offer the option to register or log in using a third-party social media or professional account (such as Google, GitHub, or LinkedIn). If you choose to authenticate this way:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>We will receive certain profile information from the provider (name, email, profile picture, identifier).</li>
                                        <li>The specific information shared depends on the permissions you grant and the settings of your social media account.</li>
                                        <li>We use this information solely to create and manage your account.</li>
                                        <li>We do not have access to your social media account password and cannot post on your behalf.</li>
                                    </ul>
                                    <p className="mt-4 italic">We are not responsible for the privacy practices of third-party social media providers. We strongly recommend that you review their privacy policies.</p>
                                </div>
                            </div>

                            {/* Section 15 */}
                            <div className="pb-8">
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">15. UPDATES TO THIS PRIVACY POLICY</h3>
                                <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium space-y-4">
                                    <p>We may update this Privacy Policy from time to time to reflect changes in our data processing practices, legal obligations, or the features of our Platform. When we make material changes, we will:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Update the 'Last Updated' date at the top of this document</li>
                                        <li>Post a prominent notice on the QuantumVault website for at least 30 days</li>
                                        <li>Send a notification email to registered users</li>
                                    </ul>
                                    <p>Your continued use of the Platform after the effective date of any updated Privacy Policy constitutes your acceptance of the revised terms.</p>
                                </div>
                            </div>

                            {/* Section 16 */}
                            <div className="pb-16">
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">16. CONTACT US</h3>
                                <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium space-y-6">
                                    <p>For any questions, concerns, requests, or complaints regarding this Privacy Policy or our data processing practices, please contact us using the details below.</p>
                                    
                                    <div className="glass p-8 rounded-3xl border-slate-200 dark:border-slate-800/50 space-y-4">
                                        <div className="flex items-start space-x-4">
                                            <div className="p-3 bg-brand-primary/10 rounded-xl text-brand-primary">
                                                <AlertCircle size={24} />
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-900 dark:text-white">Data Protection Officer (DPO)</p>
                                                <p>Entity: Vettedcode Technologies India Pvt. Ltd. (QuantumVault / SecureDApp)</p>
                                                <p>Address: 235, 2nd and 3rd Floor, 13th Cross Road, Indira Nagar 2nd Stage, Hoysala Nagar, Bengaluru, Karnataka 560038, India</p>
                                                <p>Email: <a href="mailto:hello@securedapp.in" className="text-brand-primary">hello@securedapp.in</a></p>
                                                <p>Developer Contact: <a href="mailto:himanshu@securedapp.in" className="text-brand-primary">himanshu@securedapp.in</a></p>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                                            <div className="p-3 bg-brand-primary/10 rounded-xl text-brand-primary">
                                                <Scale size={24} />
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-900 dark:text-white">Data Rights Portal</p>
                                                <a href="https://securexdid.com/account-delete-request" className="text-brand-primary underline" target="_blank" rel="noopener noreferrer">https://securexdid.com/account-delete-request</a>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <p className="text-sm italic">We aim to acknowledge all privacy-related inquiries within 3 business days and provide a substantive response within the timeframes required by applicable law.</p>
                                </div>
                            </div>

                        </motion.div>
                    </div>
                </section>

                {/* Contact CTA */}
                <section className="max-w-7xl mx-auto px-6 pb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="p-12 md:p-16 rounded-[3rem] bg-brand-primary text-slate-950 text-center relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full -mr-32 -mt-32"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Questions about Privacy?</h2>
                            <p className="text-xl font-bold mb-10 opacity-90 max-w-2xl mx-auto">
                                Our Data Protection Officer is available to help with any inquiries regarding your personal information.
                            </p>
                            <a 
                                href="mailto:hello@securedapp.in"
                                className="inline-flex items-center space-x-3 bg-slate-950 text-white px-10 py-5 rounded-2xl font-black hover:scale-105 transition-transform"
                            >
                                <Mail size={24} />
                                <span>Contact DPO</span>
                            </a>
                        </div>
                    </motion.div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
