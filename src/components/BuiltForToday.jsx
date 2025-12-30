import React from 'react';
import { BsShieldCheck } from 'react-icons/bs';

export default function BuiltForToday() {
  return (
    <section className="py-20 lg:py-28 bg-transparent border-b border-border relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 text-center relative z-10 transition-all">
        <h2 className="text-4xl font-bold mb-12 text-foreground tracking-tight">Built for Today. Ready for Tomorrow.</h2>
        
        <div className="flex flex-col items-center gap-4">
           {/* Row 1 */}
           <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-[#7c3aed] text-white px-5 py-2.5 rounded-[6px] text-sm font-medium shadow-sm flex items-center gap-2 cursor-default hover:scale-105 transition-transform">
                <BsShieldCheck size={16} /> NIST-aligned PQC readiness
              </span>
              <span className="bg-[#7c3aed] text-white px-5 py-2.5 rounded-[6px] text-sm font-medium shadow-sm flex items-center gap-2 cursor-default hover:scale-105 transition-transform">
                <BsShieldCheck size={16} /> Hybrid cryptography for smooth migration
              </span>
           </div>
           {/* Row 2 */}
           <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-[#7c3aed] text-white px-5 py-2.5 rounded-[6px] text-sm font-medium shadow-sm flex items-center gap-2 cursor-default hover:scale-105 transition-transform">
                <BsShieldCheck size={16} /> Certified, tamper-resistant hardware protection
              </span>
              <span className="bg-[#7c3aed] text-white px-5 py-2.5 rounded-[6px] text-sm font-medium shadow-sm flex items-center gap-2 cursor-default hover:scale-105 transition-transform">
                <BsShieldCheck size={16} /> Physical device, cloud, and hybrid deployments
              </span>
           </div>
           {/* Row 3 */}
           <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-[#7c3aed] text-white px-5 py-2.5 rounded-[6px] text-sm font-medium shadow-sm flex items-center gap-2 cursor-default hover:scale-105 transition-transform">
                <BsShieldCheck size={16} /> Enterprise-grade performance and reliability
              </span>
           </div>
        </div>
      </div>
    </section>
  );
}
