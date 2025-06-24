
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { ProductCatalog } from "@/components/ProductCatalog";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      <HeroSection />
      <FeaturedProducts />
      <ProductCatalog />
      <Footer />
    </div>
  );
};

export default Index;
