import React from 'react';
import { motion } from 'framer-motion';
import { BsArrowRight, BsQrCode } from 'react-icons/bs';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-28 overflow-hidden flex flex-col items-center justify-center text-center border-b border-border bg-gradient-to-br from-background via-background to-primary/5">
      {/* Background Gradients/Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 left-1/3 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] opacity-40 animate-pulse" />
        <div className="absolute top-40 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] opacity-40" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center px-4 py-1.5 rounded-md bg-[#7c3aed] text-white text-sm font-medium mb-8 shadow-sm"
        >
          <BsQrCode className="mr-2" size={16} />
          Post-Quantum Cryptography (PQC) Hardware Security Module
        </motion.div>

        {/* Main Brand Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-[80px] font-bold tracking-tight leading-[1.1] mb-6 text-foreground"
        >
          SecuredApp <span className="text-primary">QuantumHSM</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl md:text-[32px] font-bold text-foreground mb-8 max-w-4xl mx-auto"
        >
          Quantum-Safe Hardware & Cloud Security for the Next Digital Era
        </motion.h2>

        {/* Descriptive Text (Exact Copy) */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-[18px] text-foreground/80 max-w-3xl mx-auto leading-relaxed mb-10"
        >
          Protect your digital assets, identities, and communications against future quantum threats using SecuredApp QuantumHSM — available as a tamper-resistant physical HSM device and as a secure cloud-hosted HSM service. Built on NIST-approved post-quantum algorithms and hybrid cryptographic operations.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full"
        >
          <button className="inline-flex items-center justify-center px-8 h-[50px] text-base font-medium text-white bg-[#1d4ed8] hover:bg-blue-800 rounded-md transition-all duration-200 shadow-sm hover:shadow-md w-full sm:w-auto">
            Start Free PQC Cloud HSM Trial
            <BsArrowRight className="ml-2 w-5 h-5" />
          </button>
          
          <button className="inline-flex items-center justify-center px-8 h-[50px] text-base font-medium text-white bg-[#7c3aed] hover:bg-purple-700 rounded-md transition-all duration-200 shadow-sm hover:shadow-md w-full sm:w-auto">
            Request Physical Device Demo
            <BsArrowRight className="ml-2 w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
