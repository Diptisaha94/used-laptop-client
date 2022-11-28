import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { FaCheck } from "react-icons/fa";
import Loading from '../../component/Loading';
const AllBuyers = () => {
    const {data: allsellers = [], refetch,isLoading} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/users/admin/allsellers');
            const data = await res.json();
            return data;
        }
    });
    if(isLoading){
      <Loading></Loading>
    }
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
    const handleVerify=(email)=>{
        fetch(`http://localhost:5000/users/seller/${email}`, {
  method: 'PUT'
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
    refetch();
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  //product update
  fetch(`http://localhost:5000/myproducts/${email}`, {
  method: 'PUT'
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
    refetch();
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
            {
                !seller.status?
                    <button onClick={()=>handleVerify(seller.email)} className='btn btn-access btn-sm'>UnVerify</button>:<span><FaCheck className='inline text-blue-700'></FaCheck> Verify</span>
            }   
        </td>  
            </tr>)
        }
    </tbody>
  </table>
</div>
    );
};

export default AllBuyers;