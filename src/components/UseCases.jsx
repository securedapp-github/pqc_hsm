import React from 'react';
import { motion } from 'framer-motion';
import { BsPen, BsWallet2, BsCodeSquare, BsChatDots, BsServer, BsBank } from 'react-icons/bs';

const useCases = [
  {
    icon: BsPen,
    title: "Post-Quantum Digital Signatures",
    description: "Secure software signing, document signing, firmware validation, and PKI infrastructures using quantum-safe digital signatures."
  },
  {
    icon: BsWallet2,
    title: "PQC Crypto Wallet & Digital Asset Protection",
    description: "Protect blockchain wallets, private keys, and digital asset custody platforms using HSM-grade cold-wallet security with PQC key management."
  },
  {
    icon: BsCodeSquare,
    title: "PQC API & Application Security",
    description: "Defend APIs, microservices, and machine-to-machine communication with quantum-resistant authentication and key exchange."
  },
  {
    icon: BsChatDots,
    title: "PQC Secure Messaging & Communication Apps",
    description: "Ensure long-term confidentiality for encrypted messaging, collaboration tools, and sensitive communications."
  },
  {
    icon: BsServer,
    title: "Server, Cloud & Infrastructure Security",
    description: "Protect TLS, VPNs, secure boot, secrets management, and server authentication from future quantum compromise."
  },
  {
    icon: BsBank,
    title: "Government, Finance & Critical Infrastructure",
    description: "Meet regulatory and compliance requirements for quantum-safe cryptography in high-assurance environments."
  }
];

export default function UseCases() {
  return (
    <section className="py-20 lg:py-28 bg-transparent border-b border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">PQC Use Cases Across Industries</h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Securing critical infrastructure with future-proof technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 rounded-[20px] bg-card text-card-foreground border border-border shadow-[0px_1px_3px_0px_rgba(0,0,0,0.05)] hover:shadow-md transition-all h-full"
            >
              <div className="w-full rounded-lg bg-primary/10 p-2.5 mb-4 flex items-center">
                <useCase.icon size={20} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground min-h-[56px] flex items-center">{useCase.title}</h3>
              <p className="text-foreground/70 text-base leading-relaxed">
                {useCase.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
