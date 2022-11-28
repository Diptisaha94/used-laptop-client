import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import BookingModal from './BookingModal';
import Loading from './Loading';
import ProductCard from './ProductCard';

const Products = () => {
    const {loading}=useContext(AuthContext);
    const [bookProduct,setBookProduct]=useState(null);
    const productsCatagoryData=useLoaderData();
    const [verify,setVerify]=useState([]);
  useEffect(()=>{
    fetch('https://laptop-server.vercel.app/users/sellerverify')
  .then(response => response.json())
  .then(json => setVerify(json))
  },[]);
  if(loading){
    <Loading></Loading>
  }
    return (
        <div className="">
            <p className='text-2xl font-bold text-center mt-8'>Our Feature Products</p>
          <hr className='w-40 mx-auto mb-10 border-2'></hr>
            <div className='md:grid grid-cols-2 gap-4'>
            {
                productsCatagoryData.map(product=><ProductCard verify={verify} key={product._id} product={product} setBookProduct={setBookProduct}></ProductCard>)
            }
            {/* {
                verify.map(v=><ProductCard key={v._id} v={v}></ProductCard>)
            } */}
        </div>
        <BookingModal setBookProduct={setBookProduct} bookProduct={bookProduct}></BookingModal>
        </div>
    );
};

export default Products;