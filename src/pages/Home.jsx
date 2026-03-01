import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CTASection from '../components/CTASection';
import SecurityModel from '../components/SecurityModel';
import UseCases from '../components/UseCases';
import CoreAPIs from '../components/CoreAPIs';
import HybridCrypto from '../components/HybridCrypto';
import Compliance from '../components/Compliance';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main>
                <Hero />
                <CTASection type="mid" />
                <SecurityModel />
                <UseCases />
                <CoreAPIs />
                <HybridCrypto />
                <Compliance />
                <Pricing />
                <CTASection type="final" />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
