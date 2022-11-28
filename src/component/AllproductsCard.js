import React from 'react';

const AllproductsCard = ({pro}) => {
    const{name,picture,productstatus,post,resaleprice,seller,location,mobilenumber}=pro;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={picture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <div className="flex justify-between">
    <p className='text-xl font-bold'>Price: {resaleprice}</p>
    <p className='font-bold'>Location: {location}</p>
    
    </div>
    <p className=''>Mobile Number: {mobilenumber}</p>
    <p className='text-xl font-bold'>{productstatus}</p>
  </div>
</div>
    );
};

export default AllproductsCard;