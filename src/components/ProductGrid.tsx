
import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    title: "Floral Summer Dress",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1",
    category: "Summer Collection"
  },
  {
    id: 2,
    title: "Evening Gown",
    price: 199.99,
    image: "https://www.forevernew.com.au/media/catalog/product/A/l/AllTerritories_OnBody_25717201_F5.jpg",
    category: "Formal Wear"
  },
  {
    id: 3,
    title: "Casual Maxi Dress",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8",
    category: "Casual Wear"
  },
  {
    id: 4,
    title: "Cocktail Dress",
    price: 149.99,
    image: "https://cdn-2.stacees.co.uk/uploads/2023/07/27/2023072742070499459_S7274H.jpg",
    category: "Party Wear"
  },
  {
    id: 5,
    title: "Designer Evening Dress",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae",
    category: "Luxury Collection"
  },
  {
    id: 6,
    title: "Summer Floral Maxi",
    price: 79.99,
    image: "https://th.bing.com/th/id/OIP.QEpPmCvJCP-sGMMQvN3ISgHaKG?rs=1&pid=ImgDetMain",
    category: "Summer Collection"
  },
  {
    id: 7,
    title: "Party Cocktail Dress",
    price: 169.99,
    image: "https://i5.walmartimages.com/asr/5630ef6c-74da-41d2-9277-bf40b5c4fd53_1.0542fbdc2baf6cbd45353f9d4d524299.jpeg",
    category: "Party Wear"
  },
  {
    id: 8,
    title: "Elegant Gown",
    price: 259.99,
    image: "https://th.bing.com/th/id/OIP.yfoDA9QYvCVAk2Uao_QWgAHaMV?rs=1&pid=ImgDetMain",
    category: "Formal Wear"
  }
];

const ProductGrid = () => {
  return (
    <section id="products-section" className="bg-soft-white py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-[#9b87f5]">
            Trending Now
          </span>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
            Latest Arrivals
          </h2>
          <p className="mt-4 text-gray-600">
            Discover our curated collection of stunning dresses
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
