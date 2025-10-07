import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AutomationCTA from "@/components/AutomationCTA";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <AutomationCTA />
        <Features />
        <Benefits />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
