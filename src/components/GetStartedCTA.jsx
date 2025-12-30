import React from 'react';

export default function GetStartedCTA() {
  return (
    <section className="py-24 bg-background relative z-10">
       <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">Get Started with Post-Quantum Security</h2>
          <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-3xl mx-auto leading-relaxed">
            Don't wait for quantum attacks to become reality. Start your PQC journey today with SecuredApp QuantumHSM — the next-generation hardware and cloud security platform.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 items-center">
             <button className="h-10 px-6 rounded-md bg-[#3b82f6] text-white text-base font-medium hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
               Start Free PQC Cloud HSM Trial <span className="text-lg">→</span>
             </button>
             <button className="h-10 px-6 rounded-md bg-[#a855f7] text-white text-base font-medium hover:bg-purple-600 transition-colors flex items-center justify-center gap-2">
               Request Physical Device Demo <span className="text-lg">›</span>
             </button>
             <button className="h-10 px-6 rounded-md bg-white/5 text-foreground border border-border text-base font-medium hover:bg-white/10 transition-colors">
               Download PQC Overview
             </button>
          </div>
       </div>
    </section>
  );
}
