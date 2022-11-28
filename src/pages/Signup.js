import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const Signup = () => {
    const {createUserEmailPassword,updateUser}=useContext(AuthContext);
    const navigate=useNavigate();
    const handleToSignup=(event)=>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const optionRole = event.target.optionrole.value;
        console.log(name,email,password,optionRole);
        event.target.reset();
        createUserEmailPassword(email,password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        
      updateUser(name);
      saveUserrole(name,email,optionRole);
      navigate('/');
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
    }
    const saveUserrole = (name, email,optionRole) =>{
        const user ={name, email,optionRole};
        fetch('https://laptop-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        })
    }
    return (
        <div className='h-[500px] flex justify-center items-center border-2'>
          <div className="w-96 p-7">
            <h1 className='text-center text-xl font-bold'>Sign Up</h1>
            <form onSubmit={handleToSignup}>
      <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Name</span>
  </label>
  <input name='name' type="text" className="input input-bordered w-full max-w-xs" required/>
</div>
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Email</span>
  </label>
  <input name='email' type="email" className="input input-bordered w-full max-w-xs" required/>
</div>
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Password</span>
  </label>
  <input name='password' type="password" className="input input-bordered w-full max-w-xs" required/>
</div>
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Select A Option</span>
  </label>
  <select name='optionrole' className='select select-bordered w-full'>
    <option defaultValue='buyer'>buyer</option>
    <option value='seller'>seller</option>
  </select>
</div>
      <input className='btn btn-accent w-full max-w-xs mt-4' value='Submit' type="submit" />
    </form>
    <h1>Already you have an account <span className='text-primary'>Please Login.</span></h1>
            </div>  
        </div>
    );
};

export default Signup;