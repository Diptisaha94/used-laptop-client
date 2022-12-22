import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import Loading from './Loading';

const Category = () => {
    const {loading}=useContext(AuthContext);
    const [categories,setCategories]=useState([]);
    useEffect(()=>{
        fetch('https://laptop-server.vercel.app/category')
  .then(response => response.json())
  .then(data => setCategories(data))
    },[]);
    if(loading){
        <Loading></Loading>
    }
    return (
       <div className="">
        <h3 className='text-2xl font-bold  text-center mb-2'>Category</h3>
        <div className='mt-6 mb-8 text-center'>
           {
            categories.map(category=><Link className='grid grid-cols-1 divide-y px-10 py-2 border-y mt-4 border-indigo-500' to={`/category/${category.category_id}`} key={category._id}>{category.category_name}<br/></Link>)
           } 
        </div>
       </div>
    );
};

export default Category;