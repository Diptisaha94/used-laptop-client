import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { FaCheck } from "react-icons/fa";
const AllBuyers = () => {
    const {data: allsellers = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/users/admin/allsellers');
            const data = await res.json();
            return data;
        }
    });
    const handlesellerDelete=(id)=>{
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE', 
        })
        .then(res => res.json())
        .then(data => {
                toast.success('Seller delete successful.')
                refetch();
        })
    }
    const handleVerify=(id)=>{
        fetch(`http://localhost:5000/users/seller/${id}`, {
  method: 'PUT'
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
    }
    return (
        <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Action</th>
        <th>Verify</th>
      </tr>
    </thead>
    <tbody>
        {
            allsellers.map((seller,i)=><tr key={seller._id}>
              <th>{i+1}</th>
        <td>{seller.name}</td>
        <td>{seller.email}</td>
        <td><button onClick={()=>handlesellerDelete(seller._id)} className='btn btn-error btn-sm'>Delete</button></td>
        <td>
            <button onClick={()=>handleVerify(seller._id)} defaultValue='Verify' className='btn btn-access btn-sm'><FaCheck>Verify</FaCheck></button><FaCheck>Verify</FaCheck>   
        </td>  
            </tr>)
        }
    </tbody>
  </table>
</div>
    );
};

export default AllBuyers;