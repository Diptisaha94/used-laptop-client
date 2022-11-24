import React from 'react';

const ProductCard = ({product}) => {
    console.log(product);
    const{name,picture,post,orginalprice,resaleprice,seller,description,location,mobilenumber,purchaseyear,use}=product;
    return (
        <div className="card card-compact w-3/4 mx-auto bg-base-100 shadow-xl mb-8">
  <figure><img src={picture} alt=""/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <div className="md:flex">
        <p>Orginal Price: ${orginalprice}</p>
        <p>Resale Price: ${resaleprice}</p>
        <p>use: {use}</p>
        <p>Purchase Year {purchaseyear}</p>
    </div>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default ProductCard;