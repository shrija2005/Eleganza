
import React from 'react';
import { ShoppingBag, User, Heart, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold text-[#9b87f5]">Eleganza</h1>
            <div className="hidden md:flex md:space-x-6">
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-[#9b87f5]">Women</a>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-[#9b87f5]">Men</a>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-[#9b87f5]">Kids</a>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-[#9b87f5]">Home & Living</a>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-[#9b87f5]">Beauty</a>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="flex items-center rounded-md bg-[#F5F5F6] px-3 py-2">
              <Search className="h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for products, brands and more"
                className="ml-2 w-80 bg-transparent text-sm focus:outline-none"
              />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <motion.button whileHover={{ scale: 1.05 }} className="flex flex-col items-center">
              <User className="h-5 w-5 text-gray-700" />
              <span className="mt-1 text-xs">Profile</span>
            </motion.button>
            <motion.button whileHover={{ scale: 1.05 }} className="flex flex-col items-center">
              <Heart className="h-5 w-5 text-gray-700" />
              <span className="mt-1 text-xs">Wishlist</span>
            </motion.button>
            <motion.button whileHover={{ scale: 1.05 }} className="flex flex-col items-center">
              <ShoppingBag className="h-5 w-5 text-gray-700" />
              <span className="mt-1 text-xs">Bag</span>
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
