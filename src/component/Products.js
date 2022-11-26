import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal';
import ProductCard from './ProductCard';

const Products = () => {
    const [bookProduct,setBookProduct]=useState(null);
    const productsCatagoryData=useLoaderData();
    return (
        <div className="">
            <div>
            {
                productsCatagoryData.map(product=><ProductCard key={product._id} product={product} setBookProduct={setBookProduct}></ProductCard>)
            }
        </div>
        <BookingModal setBookProduct={setBookProduct} bookProduct={bookProduct}></BookingModal>
        </div>
    );
};

export default Products;