
import React from 'react';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import Navbar from '../components/Navbar';

const Index = () => {
  return (
    <div className="min-h-screen bg-soft-white">
      <Navbar />
      <Hero />
      <ProductGrid />
    </div>
  );
};

export default Index;
