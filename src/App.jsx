import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import SocialProof from "./components/SocialProof";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import BottomNav from "./components/BottomNav";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="bg-background text-on-surface font-body-md">
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <HowItWorks />
        <Features />
        <SocialProof />
        <CTA />
      </main>
      <Footer />
      <BottomNav />
      <WhatsAppButton />
    </div>
  );
}
