import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const Navbar = () => {
  const {user,logOut}=useContext(AuthContext);
  const handleLogout=()=>{
    logOut()
    .then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
  const menuItems = <React.Fragment>
        <ul>
          <li><Link to='/home'>Home</Link></li>
        </ul>
        <ul>
          <li className='ml-5'><Link to='/blogs'>Blogs</Link></li>
        </ul>
        <ul className='ml-4'>
          {
            user?.email&&<Link to='/dashboard'>Dashboard</Link>
          }
        </ul>
        <ul className='ml-4'>
          {
            user?.email?<button onClick={handleLogout} className="btn btn-active btn-sm">LogOut</button>:<Link to='/login'><button className="btn btn-active btn-sm">Login</button></Link>
          }
        </ul>
        
</React.Fragment>

return (
  <div className="navbar bg-base-100 flex justify-between">
      <div className="navbar-start">
          <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  {menuItems}
              </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">Laptop</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
              {menuItems}
          </ul>
      </div>
      
      <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
  </div>
);
};

export default Navbar;