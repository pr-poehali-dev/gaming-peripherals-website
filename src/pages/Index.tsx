
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import FeaturedProducts from '@/components/FeaturedProducts';
import Features from '@/components/Features';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gaming-dark text-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Categories />
        <FeaturedProducts />
        <Features />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
