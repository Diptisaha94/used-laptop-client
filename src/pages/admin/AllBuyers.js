import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
const AllBuyers = () => {
    const {data: allbuyers = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/users/admin/allbuyers');
            const data = await res.json();
            return data;
        }
    });
    const handleDelete=(id)=>{
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE', 
        })
        .then(res => res.json())
        .then(data => {
                toast.success('Buyer delete successful.')
                refetch();
        })
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
      </tr>
    </thead>
    <tbody>
        {
            allbuyers.map((buyer,i)=><tr key={buyer._id}>
              <th>{i+1}</th>
        <td>{buyer.name}</td>
        <td>{buyer.email}</td>
        <td><button onClick={()=>handleDelete(buyer._id)} className='btn btn-error btn-sm'>Delete</button></td>  
            </tr>)
        }
    </tbody>
  </table>
</div>
    );
};

export default AllBuyers;