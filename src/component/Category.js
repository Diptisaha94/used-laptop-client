import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
    const [categories,setCategories]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/category')
  .then(response => response.json())
  .then(data => setCategories(data))
    },[])
    return (
        <div>
           {
            categories.map(category=><Link to={`/category/${category.category_id}`} key={category._id}>{category.category_name}<br/></Link>)
           } 
        </div>
    );
};

export default Category;