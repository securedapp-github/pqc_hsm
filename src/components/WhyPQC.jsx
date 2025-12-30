import React from 'react';
import { motion } from 'framer-motion';
import { BsCheckCircle, BsExclamationTriangle } from 'react-icons/bs';

export default function WhyPQC() {
  const benefits = [
    "Long-term confidentiality for sensitive data",
    "Compliance with emerging global and NIST standards",
    "Cryptographic agility against evolving threats",
    "Seamless migration without downtime or system redesign"
  ];

  return (
    <section className="py-20 lg:py-28 bg-transparent border-b border-border relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section (Centered) */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center text-red-600">
               <BsExclamationTriangle size={24} />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Why Post-Quantum Cryptography Matters
            </h2>
          </div>
          
          <p className="text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
            Quantum computers will eventually break widely used cryptographic standards such as RSA and ECC. Organizations that delay action risk <span className="font-bold text-foreground">"harvest now, decrypt later"</span> attacks—where encrypted data stolen today is decrypted once quantum capabilities mature.
          </p>
        </div>

        {/* Benefits Card (White/Bordered) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card text-card-foreground rounded-[24px] border border-border p-8 md:p-12 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.05)] max-w-5xl mx-auto"
        >
          <h3 className="text-xl font-bold text-foreground mb-8">
            SecuredApp QuantumHSM ensures:
          </h3>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start">
                <BsCheckCircle className="text-[#1d4ed8] w-6 h-6 mt-1 mr-4 flex-shrink-0" />
                <span className="text-foreground/90 text-lg leading-snug font-medium">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
