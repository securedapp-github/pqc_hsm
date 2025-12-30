import React from 'react';
import { motion } from 'framer-motion';
import { BsLock } from 'react-icons/bs';

const algorithms = [
  "ML-KEM (Key Encapsulation Mechanism)",
  "ML-DSA (Digital Signatures)",
  "SLH-DSA",
  "HSS-LMS",
  "XMSS"
];

export default function SupportedAlgorithms() {
  return (
    <section className="py-20 lg:py-28 bg-muted/10 border-b border-border relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
            Supported NIST-Approved & Standardized PQC Algorithms
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            SecuredApp QuantumHSM supports leading NIST-aligned post-quantum cryptographic algorithms, ensuring long-term standards compliance and cryptographic agility.
          </p>
        </div>

        {/* Content Box */}
        <div className="bg-card/30 backdrop-blur-sm rounded-2xl border border-border p-6 md:p-10 shadow-sm">
          <div className="flex flex-col gap-3">
            {algorithms.map((algo, idx) => (
              <div 
                key={idx}
                className="flex items-center p-4 bg-card border border-border rounded-xl hover:shadow-md transition-all group"
              >
                <div className="mr-4 flex-shrink-0">
                  <BsLock className="text-primary w-5 h-5" />
                </div>
                <span className="font-medium text-foreground text-base md:text-lg">{algo}</span>
              </div>
            ))}
          </div>
          
          {/* Footer Text Inside Box */}
          <p className="text-center text-foreground/50 italic mt-8 text-sm">
            Our architecture allows seamless updates as PQC standards evolve.
          </p>
        </div>

      </div>
    </section>
  );
}
