import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import AllproductsCard from './AllproductsCard';
import Loading from './Loading';

const AllProducts = () => {
    const {loading}=useContext(AuthContext);
    const [allproduts,setProducts]=useState([]);
    useEffect(()=>{
        fetch('https://laptop-server.vercel.app/allproduts')
  .then(response => response.json())
  .then(data => setProducts(data))
    },[])
    if(loading){
        <Loading></Loading>
    }
    return (
        <div className='md:grid grid-cols-2 gap-6'>
            {
                allproduts.map((pro)=><AllproductsCard key={pro._id} pro={pro}></AllproductsCard>)
            }
        </div>
    );
};

export default AllProducts;