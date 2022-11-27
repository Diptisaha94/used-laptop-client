import React from 'react';

const MyproductsCard = ({myproduct}) => {
    const{name,picture,productstatus,post,orginalprice,resaleprice,seller,description,location,mobilenumber,purchaseyear,use}=myproduct;
    return (
        <div className="">
            <p className='text-2xl font-bold mb-6'>My Produts</p>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={picture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>Status: {productstatus}</p>
    <p>Price: {resaleprice}</p>
    <div className="flex justify-between">
        <p>Location: {location}</p>
        <p>Mobile Number: {mobilenumber}</p>
    </div>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Book Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default MyproductsCard;