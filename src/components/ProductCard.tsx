
import React from 'react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, image, category }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-lg bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md"
    >
      <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-10" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <button className="w-full rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-[#9b87f5] hover:text-white">
            View Details
          </button>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <span className="inline-block rounded-full bg-[#F1F0FB] px-3 py-1 text-xs font-medium text-[#7E69AB]">
          {category}
        </span>
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <p className="text-sm font-medium text-[#9b87f5]">${price.toFixed(2)}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
