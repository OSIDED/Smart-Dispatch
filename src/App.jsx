import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import SocialProof from "./components/SocialProof";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Roadmap from "./components/Roadmap";

function Home() {
  return (
    <>
      <section id="hero"><Hero /></section>
      <section id="how-it-works"><HowItWorks /></section>
      <section id="features"><Features /></section>
      <section id="social-proof"><SocialProof /></section>
      <section id="roadmap"><Roadmap /></section>
      <section id="cta"><CTA /></section>
    </>
  );
}

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-container-padding text-center">
      <span className="material-symbols-outlined text-6xl text-on-surface-variant mb-4">search_off</span>
      <h1 className="font-headline-lg text-headline-lg text-on-background mb-2">Page Not Found</h1>
      <p className="text-body-lg text-on-surface-variant mb-6">The page you're looking for doesn't exist.</p>
      <a href="/" className="bg-primary text-on-primary px-6 py-3 rounded-lg font-bold hover:scale-105 transition-transform">Go Home</a>
    </div>
  );
}

export default function App() {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    if (mediaQuery.matches) {
      document.documentElement.classList.add("dark");
    }
    const handler = (e) => {
      if (e.matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <Router>
      <div className="bg-background text-on-surface font-body-md">
        <Navbar />
        <main className="overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}
