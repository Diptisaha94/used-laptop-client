import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from './component/Navbar';
import { AuthContext } from './context/AuthProvider';
import useAdmin from './hooks/useAdmin';
import useBuyer from './hooks/useBuyer';
import useSeller from './hooks/useSeller';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller]= useSeller(user?.email);
    const [isBuyer]=useBuyer(user?.email);
    console.log(isBuyer);
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    
                
                    <ul className="menu p-4 w-80 text-base-content">
                        {
                            isBuyer && <>
                            <li><Link to="/dashboard/myorders">My Orders</Link></li>
                            </>
                        }
                    {
                                isSeller && <>
                                    <li><Link to="/dashboard/addaproduct">Add A Product</Link></li>
                                    <li><Link to={`/dashboard/myproducts/${user?.email}`}>My Products</Link></li>
                                </>
                        }
                        {
                            isAdmin && <>
                                <li><Link to="/dashboard/allbuyers">All Buyers</Link></li>
                                <li><Link to="/dashboard/allsellers">All Sellers</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;