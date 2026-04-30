import React from 'react';
import productData from '@/data/products.json';
import ProductCard from './ProductCard';

const ProductGrid = () => {
    return (
        <>
        <h1 className='font-extrabold text-3xl py-4'>Trending Products</h1>
        <div className='grid grid-cols-3 gap-5 mb-10'>
         
            {
                productData.map((product)=>(<ProductCard key = {product.id} product={product} />))
             }
        </div>
        </>
    );
};

export default ProductGrid;