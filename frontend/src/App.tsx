import { useState, useEffect } from "react";
import HealthForm from "./pages/HealthForm";
import Result from "./pages/Result";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import AuthModal from "./components/AuthModal";

export default function App() {
  const [result, setResult] = useState<any>(null);
  const [user, setUser] = useState<any>(null);
  const [showAuth, setShowAuth] = useState(false);

  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    const savedUsername = localStorage.getItem('username');
    if (savedToken && savedUsername) {
      setUser({ username: savedUsername, token: savedToken });
    }
  }, []);

  const handleLogin = (userData: any) => {
    setUser(userData);
    setShowAuth(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setUser(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[rgb(var(--color-bg-main))] text-[rgb(var(--color-text-main))] transition-colors duration-300">
      <Navigation onLogout={handleLogout} user={user} onAuthRequest={() => setShowAuth(true)} />

      {showAuth && <AuthModal onLogin={handleLogin} onClose={() => setShowAuth(false)} />}

      <main className={`flex-grow pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full transition-all duration-500 ${showAuth ? 'blur-md grayscale-[0.2]' : ''}`}>
        {!result ? (
          <HealthForm onResult={setResult} user={user} onAuthRequest={() => setShowAuth(true)} />
        ) : (
          <Result result={result} onBack={() => setResult(null)} />
        )}
      </main>

      <Footer />
    </div>
  );
}
