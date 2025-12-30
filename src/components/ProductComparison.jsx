import React from 'react';
import { motion } from 'framer-motion';
import { BsCheckCircle, BsFingerprint, BsServer } from 'react-icons/bs';

// Import Images
import startFreeTrialImg from '../assets/Available Models Section/QuantumHSM v7.1.png';
import requestDemoImg from '../assets/Available Models Section/QuantumHSM v4.3.png';

const models = [
  {
    name: "QuantumHSM v7.1",
    subtitle: "Personal Edition - Ultra-compact biometric security",
    image: startFreeTrialImg,
    icon: BsFingerprint,
    features: [
      "Ultra-compact pocket-sized design",
      "Fingerprint authentication",
      "USB-C connectivity",
      "Perfect for individuals & developers"
    ]
  },
  {
    name: "QuantumHSM v4.3",
    subtitle: "Enterprise Edition - Rack-mounted server appliance",
    image: requestDemoImg,
    icon: BsServer,
    features: [
      "1U rack-mountable design",
      "High-performance processing",
      "Tamper-evident seals",
      "Data center & enterprise ready"
    ]
  }
];

export default function ProductComparison() {
  return (
    <section className="py-20 lg:py-28 bg-muted/10 border-b border-border relative overflow-hidden" id="product-comparison">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Available Models</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {models.map((model, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-card text-card-foreground border border-border rounded-[20px] p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
            >
              {/* Header: Icon + Title */}
              <div className="flex items-center gap-3 mb-2 justify-center">
                 <model.icon size={24} className="text-primary" />
                 <h3 className="text-xl font-bold text-foreground">{model.name}</h3>
              </div>
              
              {/* Subtitle */}
              <p className="text-foreground/60 mb-8 text-sm">{model.subtitle}</p>

              {/* Image Section - Rounded & Contained */}
              <div className="w-full mb-8">
                <img 
                  src={model.image} 
                  alt={model.name} 
                  className="w-full h-auto object-cover rounded-xl shadow-sm"
                />
              </div>

              {/* Feature List */}
              <ul className="space-y-3 mt-auto w-full text-left">
                {model.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <BsCheckCircle className="text-primary w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm font-medium leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

