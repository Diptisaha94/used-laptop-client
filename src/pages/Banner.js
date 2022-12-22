import React from 'react';
import './Banner.css';
import banner from '../images/image1.png';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='bg-sky-400 py-12 md:grid grid-cols-2'>
          <div className="ml-8">
          <h3 className='text-3xl text-white font-bold uppercase  mb-5'>Welcome To Our<br/> Laptop shop</h3>
          <p className='text-2xl font-bold'>SHOP TO GET WHAT YOU LOVE</p>
          <Link to='/category/02' className="btn btn-sm mt-8 btn-secondary mx-auto">GET STARTED</Link>
          </div>
          <img className='mb-[-80px] ml-28' src={banner} alt=''></img>  
        </div>
    );
};

export default Banner;