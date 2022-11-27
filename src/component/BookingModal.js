import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import toast from 'react-hot-toast';

const BookingModal = ({bookProduct}) => {
    const {user}=useContext(AuthContext);
    const handleBookedProduct = event => {
      event.preventDefault();
      const name = event.target.name.value;
      const email = event.target.email.value;
      const mobile = event.target.mobile.value;
      const location=event.target.location.value;
      event.target.reset();
      const booked = {
        itemName:bookProduct?.name,
          location:location,
          name:name,
          picture:bookProduct.picture,
          email:email,
          mobile:mobile,
          price:bookProduct?.price
      }
      console.log(booked);

      fetch('http://localhost:5000/bookedProduct', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(booked)
      })
          .then(res => res.json())
          .then(data => {
              console.log(data);
              if (data.acknowledged) {
                  toast.success('Booking confirmed');
              }
              else{
                  toast.error(data.message);
              }
          })


  }
    return (
        <div>
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3>{bookProduct?.name}</h3>
    <p>{bookProduct?.price}</p>
    <form onSubmit={handleBookedProduct}>
    <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Name</span>
  </label>
  <input name='name' type="text" defaultValue={user?.displayName} className="input input-bordered w-full max-w-xs" disabled required/>
</div>
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Email</span>
  </label>
  <input name='email' type="text" defaultValue={user?.email} disabled className="input input-bordered w-full max-w-xs" required/>
</div>
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Moblie Number</span>
  </label>
  <input name='mobile' type="text" className="input input-bordered w-full max-w-xs" required/>
</div>
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Meeting Location</span>
  </label>
  <input name='location' type="text" className="input input-bordered w-full max-w-xs" required/>
</div>
<input className='btn btn-accent w-full max-w-xs mt-4' value='Submit' type="submit" />
    </form>
  </div>
</div>
        </div>
    );
};

export default BookingModal;