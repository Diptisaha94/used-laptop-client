import React from 'react';
import './Banner.css';
import banner from '../images/image1.png';

const Banner = () => {
    return (
        <div className='bg-sky-400 py-12 grid grid-cols-2'>
          <div className="ml-8">
          <h3 className='text-3xl font-bold uppercase  mb-5'>Welcome To Our<br/> Laptop shop</h3>
          <p className='text-2xl font-bold'>SHOP TO GET WHAT YOU LOVE</p>
          </div>
          <img className='mb-[-80px] ml-28' src={banner} alt=''></img>  
        </div>
    );
};

export default Banner;