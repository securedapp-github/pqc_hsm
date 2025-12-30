import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyPQC from "./components/WhyPQC";
import PlatformDetails from "./components/PlatformDetails";
import ProductComparison from "./components/ProductComparison";
import UseCases from "./components/UseCases";
import SupportedAlgorithms from "./components/SupportedAlgorithms";
import BuiltForToday from "./components/BuiltForToday";
import GetStartedCTA from "./components/GetStartedCTA";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-transparent transition-colors duration-300">
        <Navbar />
        <Hero />
        <WhyPQC />
        <PlatformDetails />
        <ProductComparison />
        <UseCases />
        <SupportedAlgorithms />
        <BuiltForToday />
        <GetStartedCTA />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
