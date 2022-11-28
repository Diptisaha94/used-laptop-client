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
    fetch('http://localhost:5000/users/sellerverify')
  .then(response => response.json())
  .then(json => setVerify(json))
  },[]);
  if(loading){
    <Loading></Loading>
  }
    return (
        <div className="">
            <div>
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