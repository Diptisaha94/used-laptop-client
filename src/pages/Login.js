import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const Login = () => {
    const {signInEmailPassword,createGoogleUser}=useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const handleToLogin=(event)=>{
      event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInEmailPassword(email,password)
        .then((userCredential) => { 
            const user = userCredential.user;
            navigate(from, { replace: true });
            console.log(user);
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }
    const handleToGoogleLogin=()=>{
        createGoogleUser()
        .then((result) => {
            const user = result.user;
            console.log(user);
            const optionRole="buyer";
            saveUserGoogle(user.displayName,user.email,optionRole);
            navigate(from, { replace: true });
          }).catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
          }); 
    }
    const saveUserGoogle = (name, email,optionRole) =>{
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
            <h1 className='text-center text-xl font-bold'>Login</h1>
            <form onSubmit={handleToLogin}>
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
      <input className='btn btn-accent w-full max-w-xs mt-4' value='Submit' type="submit" />
    </form>
    <h1>you have no account <Link to='/signup'><span className='text-primary'>Please SignUp.</span></Link></h1>
    <button onClick={handleToGoogleLogin} className='btn btn-outline w-full max-w-xs mt-4'>Google Login</button>
            </div>  
        </div>
    );
};

export default Login;