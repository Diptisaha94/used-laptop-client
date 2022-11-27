import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const AddProducts = () => {
  const {user}=useContext(AuthContext);
    const handelToAddProduct=(e)=>{
        e.preventDefault();
        const name =e.target.name.value;
        const picture =e.target.picture.value;
        const location =e.target.location.value;
        const condionType =e.target.condition.value;
        const resalePrice =e.target.resale.value;
        const orginalPrice =e.target.orginalPrice.value;
        const use =e.target.use.value;
        const catagory =e.target.catagory.value;
        const post =e.target.post.value;
        const mobile =e.target.mobile.value;
        const seller =e.target.seller.value;
        const purchaseyear =e.target.purchaseyear.value;
        const description =e.target.description.value;
        console.log(name);
      const productData={
        name:name,
        picture:picture,
        location:location,
        condition:condionType,
        resaleprice:resalePrice,
        orginalprice:orginalPrice,
        use:use,
        category_id:catagory,
        post:post,
        mobilenumber:mobile,
        seller:seller,
        purchaseyear:purchaseyear,
        description:description,
        email:user?.email,
        productstatus:'Available'
      }
      fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        })
    }
    return (
        <div className=' ml-6'>
          <h3 className='text-2xl'>Add A Product</h3>
            <form onSubmit={handelToAddProduct}>
            <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Product Name</span>
  </label>
  <input type="text" name='name' className="input input-bordered w-full max-w-xs" required/>
</div>
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Product Picture url</span>
  </label>
  <input type="url" name='picture' className="input input-bordered w-full max-w-xs" required/>
</div>
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Location</span>
  </label>
  <input type="text" name='location' className="input input-bordered w-full max-w-xs" required/>
</div>
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Condition type</span>
  </label>
  <input type="text" name='condition'  className="input input-bordered w-full max-w-xs" required/>
</div>
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Resaleprice</span>
  </label>
  <input type="text" name='resale' className="input input-bordered w-full max-w-xs" required/>
</div>
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Orginal Price</span>
  </label>
  <input type="text" name='orginalPrice' className="input input-bordered w-full max-w-xs" required/>
</div>
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Years of use</span>
  </label>
  <input type="text" name='use' className="input input-bordered w-full max-w-xs" required/>
</div>
<div className="">
<label className="label">
    <span className="label-text">Select category.</span>
  </label>
<select name='catagory' className='select select-bordered w-full max-w-xs' required>
    <option defaultValue="02">sumsung</option>
    <option value="01">apple</option>
    <option value="03">Dell</option>
</select>
</div>
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Date of Post</span>
  </label>
  <input type="text" name='post' className="input input-bordered w-full max-w-xs" required/>
</div>
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Mobile Number</span>
  </label>
  <input type="text" name='mobile' className="input input-bordered w-full max-w-xs" required/>
</div>
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Seller Name</span>
  </label>
  <input type="text" name='seller' className="input input-bordered w-full max-w-xs" defaultValue={user?.displayName} disabled/>
</div>
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Purchaseyear</span>
  </label>
  <input type="text" name='purchaseyear' className="input input-bordered w-full max-w-xs" required/>
</div>
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Product Description</span>
  </label>
  <textarea name='description' className="textarea textarea-bordered w-full max-w-xs" required></textarea>
</div>
<input type="submit" value="submit" className="btn btn-primary w-full max-w-xs" />
            </form>
        </div>
    );
};

export default AddProducts;