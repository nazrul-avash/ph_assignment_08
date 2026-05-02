import React from 'react';
import productData from '@/data/products.json';
import ProductCard from './ProductCard';

const ProductGrid = () => {
    const products = productData.slice(0,3);
    return (
        <div className='mx-auto max-w-7xl flex items-center justify-center flex-col'>
            <h1 className='font-extrabold text-3xl py-4'>Trending Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10 mx-auto'>
            
                {
                    products.map((product)=>(<ProductCard key = {product.id} product={product} />))
                }
            </div>
        </div>
    );
};

export default ProductGrid;