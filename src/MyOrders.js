import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from './context/AuthProvider';
import toast from 'react-hot-toast';
import Loading from './component/Loading';


const MyOrders = (email) => {
    const {user}=useContext(AuthContext);
    //const [orders,setOrders]=useState([]);
    //const orders = useLoaderData();
    
    const { data: orders = [], refetch, isLoading } = useQuery({
        queryKey: ['myorders', email],
        queryFn: async () => {
            const res = await fetch(`https://laptop-server.vercel.app/myorders/${user?.email}`);
            const data = await res.json();
            return data
        }
    });
    if(isLoading){
      <Loading></Loading>
    }
    const handleProductDelete=(id)=>{
        fetch(`https://laptop-server.vercel.app/myorders/${id}`, {
            method: 'DELETE', 
        })
        .then(res => res.json())
        .then(data => {
                toast.success('Product delete successful.')
                refetch();
        })
    }
    return (
        <div>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Email</th>
        <th>Action</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        orders.map((order)=><tr>
           <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={order?.picture?order.picture:'no image'} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{order?.itemName.length > 30 ? order?.itemName.slice(0,30) + "...":order?.itemName}</div>
            </div>
          </div>
        </td>
        <td>
          {order.name}
        </td>
        <td>
          {order.email}
        </td>
        <td><button onClick={()=>handleProductDelete(order._id)} className='btn btn-error btn-sm'>Delete</button></td>
        <td><button className='btn btn-primary btn-sm'>Pay</button></td>
        </tr>)
      } 
      </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrders;