import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import Loading from './Loading';

const Category = () => {
    const {loading}=useContext(AuthContext);
    const [categories,setCategories]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/category')
  .then(response => response.json())
  .then(data => setCategories(data))
    },[]);
    if(loading){
        <Loading></Loading>
    }
    return (
       <div className="">
        <h3 className='text-2xl'>Category</h3>
        <div className=''>
           {
            categories.map(category=><Link className='grid grid-cols-1 divide-y ' to={`/category/${category.category_id}`} key={category._id}>{category.category_name}<br/></Link>)
           } 
        </div>
       </div>
    );
};

export default Category;