'use client';

import HeaderHome from "@/components/headerhome";
import ProductDisplay from "@/components/muestraproduct";
import ContactSection from "@/components/contact";
import HeroSection from "@/components/hero";
import Footer from "@/components/footer";
import WatchesSection from "@/components/newarrives";
import Museum from "@/components/museum";

export default function Home() {
  return (
    <main>
      <HeaderHome />
      <HeroSection /> 
      <WatchesSection />
      <ProductDisplay />
      <Museum />
      <ContactSection />
      <Footer />
    </main>
  );
}
