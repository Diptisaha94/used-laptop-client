import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../component/Loading';

const MyproductsCard = ({myproduct}) => {
    const{name,picture,productstatus,post,orginalprice,resaleprice,seller,description,location,mobilenumber,purchaseyear,use,_id}=myproduct;
    
    
    const handleProdutsDelete=(id)=>{
      fetch(`https://laptop-server.vercel.app/products/${id}`, {
            method: 'DELETE', 
        })
        .then(res => res.json())
        .then(data => {
                toast.success('products delete successful.')
                
        })
        .catch(e=>console.log(e))
    }
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
      <button onClick={()=>handleProdutsDelete(_id)} className="btn btn-error">Delete</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default MyproductsCard;