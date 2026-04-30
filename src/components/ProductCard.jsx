import Image from 'next/image';
import React from 'react';

const ProductCard = ({product}) => {
    const { name, brand, price, rating, stock, description, image, category } = product;
    return (
         <div className="w-[340px] rounded-3xl overflow-hidden shadow-xl bg-[#fffdf7]">
      
      {/* Image */}
      <div className="relative h-60 bg-gradient-to-br from-yellow-200 to-amber-400 overflow-hidden">
        <Image src={image} fill alt={name} className="object-cover mix-blend-multiply hover:scale-105 transition-transform duration-500" />
        <span className="absolute top-3 left-3 bg-white text-amber-700 text-xs px-3 py-1 rounded-full">
          {category}
        </span>
      </div>

      {/* Body */}
      <div className="p-5">
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs text-amber-600 uppercase tracking-widest">{brand}</span>
          <span className="text-amber-400 text-xs">★★★★★ <span className="text-amber-900">{rating}</span></span>
        </div>

        <h2 className="font-serif text-2xl font-bold text-stone-900 mb-3">{name}</h2>
        <p className="text-sm text-stone-400 mb-4">{description}</p>

        <div className="flex items-end justify-between">
          <div>
            <p className="text-2xl font-bold text-amber-800">${price}</p>
            <p className="text-xs text-green-600 mt-1">✓ {stock} in stock</p>
          </div>
          <button className="bg-gradient-to-r from-yellow-400 to-amber-500 text-white text-sm px-5 py-2.5 rounded-2xl shadow-lg hover:-translate-y-0.5 transition-transform">
            View Details →
          </button>
        </div>
      </div>
    </div>
    );
};

export default ProductCard;