import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal';
import ProductCard from './ProductCard';

const Products = () => {
    const productsCatagoryData=useLoaderData();
    return (
        <div className="">
            <div>
            {
                productsCatagoryData.map(product=><ProductCard key={product._id} product={product}></ProductCard>)
            }
        </div>
        <BookingModal></BookingModal>
        </div>
    );
};

export default Products;