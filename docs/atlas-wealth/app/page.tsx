import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import OwnershipGraph from "@/components/OwnershipGraph";
import Modules from "@/components/Modules";
import Dashboard from "@/components/Dashboard";
import Security from "@/components/Security";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <OwnershipGraph />
      <Modules />
      <Dashboard />
      <Security />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
