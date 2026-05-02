import React from 'react';
import productData from '@/data/products.json';
import ProductCard from './ProductCard';

const ProductGrid = () => {
    return (
        <div className='mx-auto max-w-7xl text-center'>
            <h1 className='font-extrabold text-3xl py-4'>Trending Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mb-10 mx-auto'>
            
                {
                    productData.map((product)=>(<ProductCard key = {product.id} product={product} />))
                }
            </div>
        </div>
    );
};

export default ProductGrid;