import React from 'react';
import { motion } from 'framer-motion';
import { 
    Shield, 
    Mail, 
    AlertCircle,
    Lock,
    Scale
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SecurityPolicy = () => {
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
                            <Shield size={16} />
                            <span className="text-xs font-bold uppercase tracking-widest">Security Document</span>
                        </motion.div>
                        <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
                            Security <span className="text-gradient">Policy</span>
                        </h1>
                        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-3xl mx-auto font-medium">
                            Quantum Cryptography Platform • Version 1.0 • March 2026 • CONFIDENTIAL
                        </p>
                    </div>
                </section>

                <section className="max-w-6xl mx-auto px-6 py-12">
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="prose prose-slate dark:prose-invert max-w-none text-justify"
                        >
                            {/* Section 1 */}
                            <div className="pb-8">
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">1. Introduction & Scope</h3>
                                <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium space-y-4">
                                    <p>QuantumVault is an India-based Post-Quantum Cryptography (PQC) platform delivering Post-Quantum Cryptography (PQC) APIs aligned with the NIST Post-Quantum Cryptography standardization process, including ML-KEM (FIPS 203 draft) and ML-DSA (FIPS 204 draft). Hardware Security Module (HSM) key generation, Quantum Scanner diagnostics, and a developer-first SaaS ecosystem. This Security Policy governs all QuantumVault products, infrastructure, personnel, and third-party integrations.</p>
                                    <p>This policy applies to:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>All tiers of the QuantumVault platform: Free, Starter, Professional, and Enterprise</li>
                                        <li>All employees, contractors, and vendors with access to QuantumVault systems</li>
                                        <li>API consumers, enterprise clients, and OEM integration partners</li>
                                        <li>On-premise deployments delivered under Enterprise agreements</li>
                                    </ul>
                                    <p className="font-bold text-slate-900 dark:text-white pt-4">Competitive Context — Why This Policy Matters</p>
                                    <p>QuantumVault operates in a threat landscape alongside hardware-first competitors (Quanastra, Crypto Quantique, KETS Quantum Security, ID Quantique) and PQC software peers (amPICQ, AllSecureX, QuantumShift Labs, Qubit Pulse). Our cloud-API model and affordable pricing create inherent attack surface differences from hardware enclave vendors. This policy reflects a software-defined, audit-driven security posture calibrated to that landscape.</p>
                                </div>
                            </div>

                            {/* Section 2 */}
                            <div className="pb-8">
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">2. Information Security Governance</h3>
                                <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium space-y-4">
                                    <h4 className="font-bold text-slate-900 dark:text-white">2.1 Security Ownership</h4>
                                    <p>The Chief Information Security Officer (CISO) is accountable for the design, enforcement, and review of this policy. The Security & Compliance Team operates under the CISO and manages day-to-day controls. All department heads are responsible for implementing these controls within their functions.</p>
                                    
                                    <h4 className="font-bold text-slate-900 dark:text-white">2.2 Policy Review</h4>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>This policy is reviewed annually and after any material product release, security incident, or regulatory change.</li>
                                        <li>Changes are version-controlled in the internal policy management system and communicated to all staff within 30 days.</li>
                                        <li>Enterprise clients are notified of significant policy changes with a minimum of 60 days’ notice.</li>
                                    </ul>

                                    <h4 className="font-bold text-slate-900 dark:text-white">2.3 Regulatory Alignment</h4>
                                    <p>QuantumVault aligns with the following frameworks and standards:</p>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full border-collapse border border-slate-200 dark:border-slate-800 mt-4">
                                            <thead>
                                                <tr className="bg-slate-100 dark:bg-slate-800">
                                                    <th className="border border-slate-200 dark:border-slate-800 p-3 text-left">Standard / Framework</th>
                                                    <th className="border border-slate-200 dark:border-slate-800 p-3 text-left">Applicability</th>
                                                    <th className="border border-slate-200 dark:border-slate-800 p-3 text-left">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">NIST FIPS 203 (ML-KEM)</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">Core algorithm compliance</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3 text-green-500 font-bold">Implemented</td>
                                                </tr>
                                                <tr>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">NIST FIPS 204 (ML-DSA)</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">Digital signature compliance</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3 text-green-500 font-bold">Implemented</td>
                                                </tr>
                                                <tr>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">NIST SP 800-57</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">Key management guidelines</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3 text-green-500 font-bold">Implemented</td>
                                                </tr>
                                                <tr>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">ISO/IEC 27001</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">Information Security Management</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3 italic">In Progress</td>
                                                </tr>
                                                <tr>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">India DPDP Act 2023</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">Data Protection (Indian users)</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3 text-green-500 font-bold">Compliant</td>
                                                </tr>
                                                <tr>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">MeitY / DST (NQM Guidelines)</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">Quantum tech policy alignment</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">Monitored</td>
                                                </tr>
                                                <tr>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">SOC 2 Type II</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">Enterprise trust framework</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3 italic">Planned Q3 2026</td>
                                                </tr>
                                                <tr>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">GDPR (for EU clients)</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">Data residency / privacy</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3 text-green-500 font-bold">Compliant</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            {/* Section 3 */}
                            <div className="pb-8">
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">3. Cryptographic Security Policy</h3>
                                <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium space-y-4">
                                    <h4 className="font-bold text-slate-900 dark:text-white">3.1 Approved Algorithms</h4>
                                    <p>QuantumVault enforces the following algorithm whitelist across all tiers. Use of deprecated or non-approved algorithms is blocked at the API gateway layer.</p>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full border-collapse border border-slate-200 dark:border-slate-800 mt-4">
                                            <thead>
                                                <tr className="bg-slate-100 dark:bg-slate-800">
                                                    <th className="border border-slate-200 dark:border-slate-800 p-3 text-left">Algorithm</th>
                                                    <th className="border border-slate-200 dark:border-slate-800 p-3 text-left">Purpose</th>
                                                    <th className="border border-slate-200 dark:border-slate-800 p-3 text-left">Standard</th>
                                                    <th className="border border-slate-200 dark:border-slate-800 p-3 text-left">Tiers</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">ML-KEM-768 / 1024</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">Key Encapsulation</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">NIST FIPS 203</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">All</td>
                                                </tr>
                                                <tr>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">ML-DSA-65 / 87</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">Digital Signatures</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">NIST FIPS 204</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">All</td>
                                                </tr>
                                                <tr>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">SLH-DSA (SPHINCS+)</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">Stateless hash signatures</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">NIST FIPS 205</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">Pro+</td>
                                                </tr>
                                                <tr>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">Hybrid: X25519 + ML-KEM</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">Transition hybrid mode</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">NIST SP 800-56C</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">Enterprise</td>
                                                </tr>
                                                <tr>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">AES-256-GCM</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">Symmetric encryption</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">NIST SP 800-38D</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">All</td>
                                                </tr>
                                                <tr>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">SHA-3 / SHAKE-256</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">Hashing</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">NIST FIPS 202</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">All</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <p className="mt-4">Algorithms considered quantum-vulnerable or discouraged for long-term protection (e.g., RSA-2048/3072, ECDSA P-256, MD5, SHA-1) are rejected by the QuantumVault API gateway for security reasons and logged for audit review.</p>

                                    <h4 className="font-bold text-slate-900 dark:text-white">3.2 Key Management</h4>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>All cryptographic keys are generated using NIST-approved DRBGs seeded from hardware entropy sources.</li>
                                        <li>HSM integration (Enterprise tier) leverages FIPS 140-2 Level 3 validated hardware modules for root key custody.</li>
                                        <li>Key rotation schedules: operational keys rotated every 90 days; root keys rotated annually or upon compromise.</li>
                                        <li>BYOK (Bring Your Own Key) is available on Professional and Enterprise tiers; customer keys never leave the designated key vault boundary.</li>
                                        <li>Key destruction follows NIST SP 800-88 media sanitization guidelines. Destruction certificates are provided upon request for Enterprise clients.</li>
                                    </ul>

                                    <h4 className="font-bold text-slate-900 dark:text-white">3.3 Hybrid Cryptography Transition</h4>
                                    <p>Recognizing that many enterprise clients operate in mixed classical/post-quantum environments, QuantumVault supports Hybrid: X25519 + ML-KEM — Hybrid post-quantum transition mode based on NIST PQC migration guidance. Hybrid mode is available exclusively on the Enterprise tier and is governed by a separately issued Hybrid Transition Policy addendum. This is a direct response to the cryptographic agility gap observed in hardware-only competitors.</p>
                                </div>
                            </div>

                            {/* Section 4 */}
                            <div className="pb-8">
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">4. API & Access Security</h3>
                                <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium space-y-4">
                                    <h4 className="font-bold text-slate-900 dark:text-white">4.1 Authentication & API Key Controls</h4>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>All API access requires a valid API key issued through the QuantumVault dashboard. Keys are never transmitted in URLs; only Authorization: Bearer headers are accepted.</li>
                                        <li>API keys are hashed (SHA-3/256) before storage; plain-text keys are never persisted after initial generation.</li>
                                        <li>Key tiers: Free (1 key), Starter (5 keys), Professional (25 keys), Enterprise (unlimited). Keys can be scoped by IP allowlist, operation type, and environment (sandbox/production).</li>
                                        <li>Compromised keys can be revoked instantly via dashboard or API. Revocation takes effect within 60 seconds globally.</li>
                                        <li>Enterprise clients may integrate API key lifecycle management with their existing IAM systems (Okta, Azure AD, etc.) via SCIM provisioning.</li>
                                    </ul>

                                    <h4 className="font-bold text-slate-900 dark:text-white">4.2 Rate Limiting & Abuse Prevention</h4>
                                    <p>Rate limits are enforced per API key and per account to prevent abuse and ensure platform availability:</p>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full border-collapse border border-slate-200 dark:border-slate-800 mt-4">
                                            <thead>
                                                <tr className="bg-slate-100 dark:bg-slate-800">
                                                    <th className="border border-slate-200 dark:border-slate-800 p-3 text-left">Tier</th>
                                                    <th className="border border-slate-200 dark:border-slate-800 p-3 text-left">Ops/Month</th>
                                                    <th className="border border-slate-200 dark:border-slate-800 p-3 text-left">Burst Rate</th>
                                                    <th className="border border-slate-200 dark:border-slate-800 p-3 text-left">Cooldown</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">Free</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">100</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">10 req/min</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">60 sec</td>
                                                </tr>
                                                <tr>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">Starter</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">10,000</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">100 req/min</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">30 sec</td>
                                                </tr>
                                                <tr>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">Professional</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">100,000</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">500 req/min</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">10 sec</td>
                                                </tr>
                                                <tr>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">Enterprise</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">Unlimited</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">Custom SLA</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">Custom</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <p className="mt-4">Exceeding rate limits returns HTTP 429. Repeated abuse triggers automatic key suspension and security team notification.</p>

                                    <h4 className="font-bold text-slate-900 dark:text-white">4.3 Transport Security</h4>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>TLS 1.3 is mandatory for all API communications. TLS 1.2 is supported for legacy Enterprise integrations until December 31, 2026, after which TLS 1.3 minimum will be enforced universally.</li>
                                        <li>All certificates are issued from a trusted CA with OCSP stapling enabled. Certificate pinning guidance is provided for mobile and embedded SDK integrations.</li>
                                        <li>HSTS (HTTP Strict Transport Security) is enforced with a max-age of 31536000 seconds and includeSubDomains.</li>
                                        <li>Mutual TLS (mTLS) is available for Enterprise on-premise deployments.</li>
                                    </ul>

                                    <h4 className="font-bold text-slate-900 dark:text-white">4.4 Multi-Tenancy & Data Isolation</h4>
                                    <p>QuantumVault is a multi-tenant SaaS platform. Tenant isolation is enforced at the following layers: API key namespace, database row-level security (RLS), encryption key separation, and audit log partitioning. Cross-tenant data access is architecturally prevented and is subject to continuous automated testing via the security test suite.</p>
                                </div>
                            </div>

                            {/* Section 5 */}
                            <div className="pb-8">
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">5. Data Security & Privacy</h3>
                                <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium space-y-4">
                                    <h4 className="font-bold text-slate-900 dark:text-white">5.1 Data Classification</h4>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full border-collapse border border-slate-200 dark:border-slate-800 mt-4">
                                            <thead>
                                                <tr className="bg-slate-100 dark:bg-slate-800">
                                                    <th className="border border-slate-200 dark:border-slate-800 p-3 text-left">Classification</th>
                                                    <th className="border border-slate-200 dark:border-slate-800 p-3 text-left">Examples</th>
                                                    <th className="border border-slate-200 dark:border-slate-800 p-3 text-left">Controls</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">Restricted</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">Private keys, HSM secrets, root credentials</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">AES-256, HSM custody, need-to-know</td>
                                                </tr>
                                                <tr>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">Confidential</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">Customer API keys, audit logs, billing data</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">AES-256-GCM, RBAC, 7-yr retention (Enterprise)</td>
                                                </tr>
                                                <tr>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">Internal</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">Architecture docs, internal runbooks</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">Access control, not publicly indexed</td>
                                                </tr>
                                                <tr>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">Public</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">API documentation, pricing pages</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">Integrity checks only</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <h4 className="font-bold text-slate-900 dark:text-white mt-6">5.2 Data Residency</h4>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>By default, all customer data is stored in India (Mumbai region) in compliance with the DPDP Act 2023.</li>
                                        <li>Enterprise clients may request EU or US data residency for cross-border regulatory needs; data residency preferences are contractually bound in the DPA (Data Processing Agreement).</li>
                                        <li>No customer plaintext cryptographic material (keys, secrets) is ever transferred outside the selected residency region.</li>
                                    </ul>

                                    <h4 className="font-bold text-slate-900 dark:text-white mt-6">5.3 Data Retention & Deletion</h4>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Audit logs are retained per tier: 7 days (Free), 30 days (Starter), 1 year (Professional), 7 years (Enterprise).</li>
                                        <li>Upon account termination, customer data is purged within 30 days and a deletion certificate is issued on request.</li>
                                        <li>Backups are encrypted with AES-256 and retained for 90 days; backup access is restricted to the infrastructure team under dual-approval controls.</li>
                                    </ul>

                                    <h4 className="font-bold text-slate-900 dark:text-white mt-6">5.4 Privacy by Design</h4>
                                    <p>QuantumVault does not sell, share, or monetize customer data. The platform processes only the minimum data necessary to provide the cryptographic service. Anthropic-style data use disclosures are maintained in the Privacy Policy at quantumvault.tech/privacy.</p>
                                </div>
                            </div>

                            {/* Section 6 */}
                            <div className="pb-8">
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">6. Infrastructure & Operational Security</h3>
                                <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium space-y-4">
                                    <h4 className="font-bold text-slate-900 dark:text-white">6.1 Cloud Infrastructure</h4>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Production infrastructure is hosted on hardened cloud environments using FIPS-validated cryptographic modules and security-hardened operating system images aligned with CIS Benchmarks Level 2.</li>
                                        <li>All production and staging environments are network-segmented; the production environment has no direct internet ingress except through the API gateway and CDN.</li>
                                        <li>Infrastructure-as-Code (IaC) is used for all provisioning; manual console access to production is prohibited except under emergency break-glass procedures with dual approval and full audit logging.</li>
                                    </ul>

                                    <h4 className="font-bold text-slate-900 dark:text-white mt-6">6.2 Vulnerability Management</h4>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Critical vulnerabilities (CVSS ≥ 9.0): patched within 24 hours.</li>
                                        <li>High vulnerabilities (CVSS 7.0–8.9): patched within 7 days.</li>
                                        <li>Medium vulnerabilities (CVSS 4.0–6.9): patched within 30 days.</li>
                                        <li>Automated dependency scanning runs on every commit via CI/CD pipeline. Binary Scan is available for Enterprise clients.</li>
                                        <li>Third-party penetration testing is conducted annually by an accredited vendor. Executive Summary reports are available to Enterprise clients upon request.</li>
                                    </ul>

                                    <h4 className="font-bold text-slate-900 dark:text-white mt-6">6.3 CI/CD Pipeline Security</h4>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>All code undergoes static analysis (SAST), software composition analysis (SCA), and secrets scanning before merge.</li>
                                        <li>Production deployments require passing security gates and sign-off from the Security Team.</li>
                                        <li>CI/CD Pipeline Integration is included in the Enterprise tier, enabling clients to run QuantumVault’s Quantum Scanner within their own pipelines.</li>
                                        <li>Container images are signed and verified at deployment; unsigned images are rejected by the admission controller.</li>
                                    </ul>

                                    <h4 className="font-bold text-slate-900 dark:text-white mt-6">6.4 Logging & Monitoring</h4>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>All API operations, authentication events, key lifecycle events, and administrative actions are logged to a tamper-evident audit log.</li>
                                        <li>Logs are streamed to a SIEM with real-time anomaly detection. Alerts are triaged by the Security Operations team within 15 minutes (Enterprise SLA: 1 hour dedicated support).</li>
                                        <li>Log integrity is ensured via cryptographic chaining (hash-linked records). Enterprise audit logs are immutable for the full 7-year retention period.</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Section 7 */}
                            <div className="pb-8">
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">7. Quantum Scanner — Security Controls</h3>
                                <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium space-y-4">
                                    <p>The Quantum Scanner is a proprietary diagnostic service that identifies classical cryptography exposure across customer codebases, binaries, and digital footprints. Its outputs are security-sensitive and are governed by the following controls:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Scan results are classified as Confidential and stored in the customer’s isolated tenant partition.</li>
                                        <li>Binary Scan (Professional+) processes customer artifacts in ephemeral, network-isolated sandboxes; no binary content is retained post-analysis.</li>
                                        <li>Scan reports are encrypted at rest and in transit; the Executive Summary Mode (Professional+) redacts technical details for board-level reporting.</li>
                                        <li>Scan quotas (1/month Free → Unlimited Enterprise) are enforced at the API layer to prevent reconnaissance abuse.</li>
                                        <li>Digital Footprint scans are limited to domains and IP ranges explicitly authorized by the account owner. Unauthorized scope extension is blocked and flagged.</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Section 8 */}
                            <div className="pb-8">
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">8. Identity & Access Management (IAM)</h3>
                                <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium space-y-4">
                                    <h4 className="font-bold text-slate-900 dark:text-white">8.1 Internal Access Controls</h4>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Role-Based Access Control (RBAC) is enforced for all internal systems. Least-privilege is the default; access is granted on a need-to-know basis with quarterly access reviews.</li>
                                        <li>Multi-Factor Authentication (MFA) is mandatory for all internal accounts and all customer dashboard accounts.</li>
                                        <li>Privileged access (production database, HSM, root credentials) requires a separate privileged access workstation (PAW) and dual-person authorization.</li>
                                        <li>All privileged sessions are recorded and archived for 12 months.</li>
                                    </ul>

                                    <h4 className="font-bold text-slate-900 dark:text-white mt-6">8.2 Customer & Team Account Security</h4>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Team member limits: 3 (Starter), 10 (Professional), Unlimited (Enterprise). Each member has an individual account; shared credentials are prohibited.</li>
                                        <li>Enterprise clients may enforce SSO (SAML 2.0/OIDC) and custom MFA policies via identity federation.</li>
                                        <li>Account lockout is triggered after 5 consecutive failed login attempts; lockout duration is 30 minutes with optional admin override.</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Section 9 */}
                            <div className="pb-8">
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">9. Incident Response</h3>
                                <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium space-y-4">
                                    <h4 className="font-bold text-slate-900 dark:text-white">9.1 Incident Classification</h4>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full border-collapse border border-slate-200 dark:border-slate-800 mt-4">
                                            <thead>
                                                <tr className="bg-slate-100 dark:bg-slate-800">
                                                    <th className="border border-slate-200 dark:border-slate-800 p-3 text-left">Severity</th>
                                                    <th className="border border-slate-200 dark:border-slate-800 p-3 text-left">Description</th>
                                                    <th className="border border-slate-200 dark:border-slate-800 p-3 text-left">Response Time</th>
                                                    <th className="border border-slate-200 dark:border-slate-800 p-3 text-left">Notification</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3 font-bold text-red-500">P0 – Critical</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">Key compromise, data breach, API gateway down</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">&lt; 1 hour</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">Immediate – all affected clients</td>
                                                </tr>
                                                <tr>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3 font-bold text-orange-500">P1 – High</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">Auth bypass, significant data exposure risk</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">&lt; 4 hours</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">Within 24 hours</td>
                                                </tr>
                                                <tr>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3 font-bold text-yellow-500">P2 – Medium</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">Anomalous API activity, partial degradation</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">&lt; 24 hours</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">Within 72 hours</td>
                                                </tr>
                                                <tr>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3 font-bold text-blue-500">P3 – Low</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">Policy violation, minor configuration drift</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">&lt; 7 days</td>
                                                    <td className="border border-slate-200 dark:border-slate-800 p-3">Next scheduled report</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <h4 className="font-bold text-slate-900 dark:text-white mt-6">9.2 Incident Response Process</h4>
                                    <p>QuantumVault follows a five-phase incident response process:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li><strong>Detect & Triage:</strong> Automated alerts and manual reports are triaged by the Security Operations team. Severity classification is assigned within 30 minutes of initial detection.</li>
                                        <li><strong>Contain:</strong> Affected systems, API keys, or accounts are isolated. Emergency revocation of compromised keys takes effect globally within 60 seconds.</li>
                                        <li><strong>Investigate:</strong> Forensic analysis is conducted on isolated snapshots. Chain of custody is maintained for potential legal proceedings.</li>
                                        <li><strong>Remediate:</strong> Root cause is addressed. Patches are deployed per the vulnerability management SLA. Post-remediation validation is required before production restoration.</li>
                                        <li><strong>Report:</strong> A post-incident report (PIR) is completed within 14 days. Enterprise clients receive a copy. Lessons learned are incorporated into the policy within 30 days.</li>
                                    </ul>

                                    <h4 className="font-bold text-slate-900 dark:text-white mt-6">9.3 Regulatory Breach Notification</h4>
                                    <p>In the event of a personal data breach, QuantumVault will notify affected clients within 72 hours of confirmed discovery, in compliance with the DPDP Act 2023 and GDPR (for EU-scope data). Regulatory authority notification will be made as required by applicable law.</p>

                                    <h4 className="font-bold text-slate-900 dark:text-white mt-6">9.4 Bug Bounty & Responsible Disclosure</h4>
                                    <p>QuantumVault operates a responsible disclosure program. Security researchers may report vulnerabilities to security@quantumvault.tech. We commit to acknowledging reports within 48 hours, providing a remediation timeline within 7 days, and crediting researchers (with consent) upon resolution. Legal safe harbor is provided for good-faith research conducted within scope.</p>
                                </div>
                            </div>

                            {/* Section 10 */}
                            <div className="pb-8">
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">10. Supply Chain & Third-Party Security</h3>
                                <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium space-y-4">
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>All third-party software components are tracked in a Software Bill of Materials (SBOM). SBOMs are updated on every release and are available to Enterprise clients upon request.</li>
                                        <li>Critical dependencies (cryptographic libraries, HSM SDKs) are reviewed quarterly for upstream security advisories.</li>
                                        <li>Vendors with access to production data or systems must complete a security questionnaire and sign a Data Processing Agreement before onboarding.</li>
                                        <li>QuantumVault does not integrate with nor depend on proprietary quantum hardware vendors (SNSPD, QKD hardware) in its SaaS stack, maintaining software portability and independence from hardware supply chain risks.</li>
                                        <li>Open-source cryptographic implementations are validated against NIST Known Answer Tests (KAT) on every build.</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Section 11 */}
                            <div className="pb-8">
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">11. Physical Security</h3>
                                <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium space-y-4">
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Cloud infrastructure is hosted in Tier III+ data centers with SOC 2 Type II and ISO 27001 certifications. Data center physical security is governed by the cloud provider’s policies.</li>
                                        <li>For Enterprise on-premise deployments, QuantumVault provides a Physical Security Checklist that clients must satisfy before production keys are provisioned.</li>
                                        <li>Employee workstations are enrolled in MDM (Mobile Device Management) with full-disk encryption enforced. Lost or stolen devices are remotely wiped within 2 hours of report.</li>
                                        <li>Visitor access to QuantumVault offices is logged and escorted at all times. No production system access is permitted from visitor terminals.</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Section 12 */}
                            <div className="pb-8">
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">12. Human Security & Awareness</h3>
                                <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium space-y-4">
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>All employees and contractors complete security awareness training within 30 days of onboarding and annually thereafter.</li>
                                        <li>Role-specific training is mandatory for engineers (secure coding), security team (incident response), and sales/customer success (data handling and social engineering).</li>
                                        <li>Background checks are conducted for all employees with access to production systems or customer data.</li>
                                        <li>A security culture program including phishing simulations and quarterly lunch-and-learn sessions is maintained.</li>
                                        <li>Violations of this policy may result in disciplinary action up to and including termination, and referral to law enforcement where applicable.</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Section 13 */}
                            <div className="pb-8">
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">13. Business Continuity & Disaster Recovery</h3>
                                <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium space-y-4">
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Recovery Time Objective (RTO): 4 hours for Professional and below; 1 hour for Enterprise (99.99% uptime SLA).</li>
                                        <li>Recovery Point Objective (RPO): 1 hour for all paid tiers; best-effort for Free tier.</li>
                                        <li>Automated failover across availability zones is active for the production API gateway, key management service, and audit logging infrastructure.</li>
                                        <li>Full DR drills are conducted semi-annually. Results are reviewed by executive leadership and incorporated into the BCP within 30 days.</li>
                                        <li>Enterprise clients are provided with a dedicated support contact and 1-hour SLA response for incidents affecting their tenants.</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Section 14 */}
                            <div className="pb-8">
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">14. Policy Enforcement & Exceptions</h3>
                                <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium space-y-4">
                                    <p>All exceptions to this policy must be approved in writing by the CISO. Exceptions are time-limited (maximum 90 days), logged in the exception register, and reviewed at each policy review cycle. No exceptions are permitted for controls mandated by NIST FIPS 203/204 or the DPDP Act 2023.</p>
                                    <p>Non-compliance with this policy by internal personnel is subject to HR disciplinary procedures. Non-compliance by customers (e.g., API abuse, scope violation in Quantum Scanner) may result in service suspension per the Terms of Service at quantumvault.tech/terms.</p>
                                </div>
                            </div>

                            {/* Section 15 */}
                            <div className="pb-16">
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">15. Contact & Escalation</h3>
                                <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium space-y-6">
                                    <div className="glass p-8 rounded-3xl border-slate-200 dark:border-slate-800/50 space-y-4">
                                        <div className="overflow-x-auto">
                                            <table className="min-w-full border-collapse border border-slate-200 dark:border-slate-800 mt-4">
                                                <thead>
                                                    <tr className="bg-slate-100 dark:bg-slate-800">
                                                        <th className="border border-slate-200 dark:border-slate-800 p-3 text-left">Contact</th>
                                                        <th className="border border-slate-200 dark:border-slate-800 p-3 text-left">Purpose</th>
                                                        <th className="border border-slate-200 dark:border-slate-800 p-3 text-left">Channel</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="border border-slate-200 dark:border-slate-800 p-3">security@quantumvault.tech</td>
                                                        <td className="border border-slate-200 dark:border-slate-800 p-3">Vulnerability disclosure, security queries</td>
                                                        <td className="border border-slate-200 dark:border-slate-800 p-3">Email</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-slate-200 dark:border-slate-800 p-3">compliance@quantumvault.tech</td>
                                                        <td className="border border-slate-200 dark:border-slate-800 p-3">Audit requests, DPA, compliance reports</td>
                                                        <td className="border border-slate-200 dark:border-slate-800 p-3">Email</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-slate-200 dark:border-slate-800 p-3">Enterprise Support Portal</td>
                                                        <td className="border border-slate-200 dark:border-slate-800 p-3">P0/P1 incident escalation, dedicated SLA</td>
                                                        <td className="border border-slate-200 dark:border-slate-800 p-3">Portal + Phone</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-slate-200 dark:border-slate-800 p-3">quantumvault.tech/security</td>
                                                        <td className="border border-slate-200 dark:border-slate-800 p-3">Security advisories, policy updates</td>
                                                        <td className="border border-slate-200 dark:border-slate-800 p-3">Web</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    
                                    <div className="glass p-8 rounded-[2.5rem] border-slate-200 dark:border-slate-800/50 mt-12">
                                        <p className="font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-4">Document Approval</p>
                                        <p className="pt-4">This Security Policy has been reviewed and approved by the QuantumVault Security & Compliance Team. By using the QuantumVault platform, customers acknowledge that they have read and understood this policy. Enterprise clients are required to confirm acceptance as part of the onboarding process.</p>
                                    </div>
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
                            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Security Concerns?</h2>
                            <p className="text-xl font-bold mb-10 opacity-90 max-w-2xl mx-auto">
                                Our security team is available 24/7 for critical incidents and security-related inquiries.
                            </p>
                            <a 
                                href="mailto:security@quantumvault.tech"
                                className="inline-flex items-center space-x-3 bg-slate-950 text-white px-10 py-5 rounded-2xl font-black hover:scale-105 transition-transform"
                            >
                                <Mail size={24} />
                                <span>Contact Security Team</span>
                            </a>
                        </div>
                    </motion.div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default SecurityPolicy;
