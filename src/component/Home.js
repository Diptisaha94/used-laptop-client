import React from 'react';
import Banner from '../pages/Banner';
import AllProducts from './AllProducts';
import Category from './Category';

const Home = () => {
    return (
        <div className=''>
           <Banner></Banner>
           <div className="mt-16">
            <h3 className='text-2xl font-bold text-center'>Our Products</h3>
            <hr className='w-40 divide-slate-400 text-center mx-auto mb-12'></hr>
            </div>
            <div className="w-3/4 mx-auto md:flex justify-between">
                <Category></Category>
                <div className="">
                    <AllProducts></AllProducts>
                </div>
                </div>
                <div className="bg-sky-400 mt-12 py-14">
                    <p className='text-2xl font-bold uppercase text-center mb-5'>you want to know our latest products<br></br> news please subscribe our newsletters</p>
                <div className="w-2/4 mx-auto text-center">
                <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs text-center" />
                <button className="btn btn-secondary mx-auto">Submit</button>
                </div>
                    </div> 
        </div>
    );
};

export default Home;