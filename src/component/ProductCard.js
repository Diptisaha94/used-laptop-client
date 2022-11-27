import React, { useEffect, useState } from 'react';
import { FaCheck } from "react-icons/fa";
import SellerName from './SellerName';

const ProductCard = ({product,setBookProduct,verify}) => {
    console.log(product);
    const{name,picture,status,post,orginalprice,resaleprice,seller,description,location,mobilenumber,purchaseyear,use}=product;
    return (
        <div className="">
          <div className="card card-compact w-3/4 mx-auto bg-base-100 shadow-xl mb-8">
  <figure><img src={picture} alt=""/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <div className="md:flex">
        <p>Orginal Price: ${orginalprice}</p>
        <p>Resale Price: ${resaleprice}</p>
        <p>use: {use}</p>
        <p>Purchase Year {purchaseyear}</p>
    </div>
    {/* {
      v.status?<span><FaCheck className='inline text-blue-700'></FaCheck>Verify <span className='text-2xl font-bold'>{seller}</span></span>:<p>{seller}</p>
    } */}
    {/* {
      verify.map(v=><SellerName key={v._id} v={v} seller={seller}></SellerName>)
    } */}
    <p>{description}</p>
    <div className="card-actions justify-start">
    <label onClick={()=>setBookProduct(product)} htmlFor="my-modal-3" className="btn btn-primary">Book Now</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProductCard;