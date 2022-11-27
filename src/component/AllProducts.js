import React, { useEffect, useState } from 'react';
import AllproductsCard from './AllproductsCard';

const AllProducts = () => {
    const [allproduts,setProducts]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/allproduts')
  .then(response => response.json())
  .then(data => setProducts(data))
    },[])
    return (
        <div className='md:grid grid-cols-2 gap-6'>
            {
                allproduts.map((pro)=><AllproductsCard key={pro._id} pro={pro}></AllproductsCard>)
            }
        </div>
    );
};

export default AllProducts;