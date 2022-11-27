import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MyproductsCard from './MyproductsCard';

const MyProducts = () =>{
    const myproductsData=useLoaderData();
    console.log(myproductsData);
    
    return (
        <div>
            {
                myproductsData.map((myproduct)=><MyproductsCard key={myproduct._id} myproduct={myproduct}></MyproductsCard>)
            }
            
        </div>
    );
};

export default MyProducts;