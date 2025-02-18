import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-[#F5F5F6] py-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xl space-y-6"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block rounded-full bg-[#F1F0FB] px-4 py-1.5 text-sm font-medium text-[#9b87f5]"
            >
              SUMMER SALE NOW ON
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
            >
              Discover Your <span className="text-[#9b87f5]">Style</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600"
            >
              Explore our curated collection of designer dresses. From elegant evening gowns to casual chic, find your perfect look.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex space-x-4"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToProducts}
                className="rounded-lg bg-[#9b87f5] px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-[#7E69AB]"
              >
                Shop Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-lg border border-[#9b87f5] bg-transparent px-8 py-3 text-sm font-medium text-[#9b87f5] transition-colors hover:bg-[#F1F0FB]"
              >
                View Collection
              </motion.button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-[400px] w-full overflow-hidden rounded-2xl bg-gray-100 lg:h-[600px]"
          >
            <img
              src="https://www.manilaonsale.com/wp-content/uploads/2015/01/Zara-Sale-January-2015.jpg"
              alt="Eleganza Fashion"
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#9b87f5]/20 to-transparent" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
