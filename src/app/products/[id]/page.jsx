import React from 'react';
import data from '@/data/products.json';
import Image from 'next/image';

const ProductPage = async ({params}) => {
    const {id} = await params;
    console.log(id);
    const product = data.find((p) => p.id == id);
    if (!product) return <p>Product not found</p>;

    return (
        <div className="min-h-screen bg-orange-50 flex items-center justify-center p-6">
  <div className="max-w-4xl w-full bg-white rounded-3xl overflow-hidden grid md:grid-cols-2 border border-orange-100 shadow-sm">

    {/* Image Section */}
    <div className="h-80 md:h-auto bg-orange-100">
      <div className="relative w-full h-full min-h-80">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
    </div>

    {/* Content Section */}
    <div className="p-8 flex flex-col gap-4 bg-white">

      <span className="text-xs font-bold tracking-widest uppercase text-orange-400">
        {product.category}
      </span>

      <h1 className="text-2xl font-bold text-slate-800 leading-snug">
        {product.name}
      </h1>

      <p className="text-sm text-slate-500 leading-relaxed">
        {product.description}
      </p>

      <div className="h-px bg-orange-100" />

      <div className="flex items-center gap-3">
        <p className="text-2xl font-bold text-orange-500">
          ${product.price}
        </p>
        <span className="text-xs text-orange-500 bg-orange-50 border border-orange-200 px-3 py-1 rounded-full">
          ⭐ {product.rating}
        </span>
      </div>

      <p className="text-sm text-slate-400">
        Brand: <span className="text-slate-700 font-medium">{product.brand}</span>
      </p>

      <p className="text-sm text-slate-400">
        Stock:{" "}
        <span className={`font-medium ${product.stock > 0 ? "text-emerald-500" : "text-red-400"}`}>
          {product.stock > 0 ? `${product.stock} available` : "Out of stock"}
        </span>
      </p>

      <button
        disabled={product.stock === 0}
        className="mt-2 py-3 rounded-2xl font-bold text-sm tracking-wide
          bg-orange-400 text-white hover:bg-orange-500
          disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed"
      >
        {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
      </button>

    </div>
  </div>
</div>
    );
};

export default ProductPage;