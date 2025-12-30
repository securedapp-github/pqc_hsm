import React from 'react';
import { motion } from 'framer-motion';
import { BsShieldCheck, BsKey, BsLightningCharge, BsCloudCheck } from 'react-icons/bs';

const features = [
  {
    icon: BsShieldCheck,
    title: "Hybrid Cryptographic Operations",
    description: "Run classical algorithms (RSA, ECC/EdDSA) alongside post-quantum algorithms in parallel. This hybrid approach enables a secure, phased transition to quantum-safe cryptography without disrupting existing applications."
  },
  {
    icon: BsKey,
    title: "Quantum-Resistant Key Protection",
    description: "Generate, store, and manage large PQC keys and signatures inside tamper-resistant HSM hardware, protecting them from physical, logical, and quantum-based attacks."
  },
  {
    icon: BsLightningCharge,
    title: "High-Performance PQC Processing",
    description: "Optimized to handle increased PQC key sizes and signature complexity while maintaining enterprise-grade throughput and low latency."
  },
  {
    icon: BsCloudCheck,
    title: "Flexible Deployment Models",
    description: "Deploy QuantumHSM wherever your security strategy requires: On-Prem Physical HSM Device (cold-wallet-style secure appliance), SecuredApp CloudHSM, or Hybrid Cloud + On-Prem Environments."
  }
];

export default function PlatformDetails() {
  return (
    <section className="py-20 lg:py-28 bg-muted/10 border-b border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20 px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            How SecuredApp QuantumHSM Addresses the Quantum Threat
          </h2>
          <p className="text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
            Standard HSM infrastructures are vulnerable to quantum algorithms. Our platform integrates NIST-approved PQC schemes at the hardware level, providing a future-proof foundation for the post-quantum era.
          </p>
        </div>

        {/* Feature Grid - Fixed 2-column layout as per screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-card text-card-foreground rounded-xl border border-border p-6 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="w-full rounded-lg bg-primary/10 flex items-center p-3 mb-4">
                 <feature.icon className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-base font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
