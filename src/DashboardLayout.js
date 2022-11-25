import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from './component/Navbar';
import { AuthContext } from './context/AuthProvider';
import useAdmin from './hooks/useAdmin';
import useSeller from './hooks/useSeller';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller]= useSeller(user?.email);
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
                                isSeller && <>
                                    <li><Link to="/dashboard/addaproduct">Add A Product</Link></li>
                                    <li><Link to="/dashboard/myproducts">My Products</Link></li>
                                </>
                        }
                    </ul>
                    <ul className="menu p-4 w-80 text-base-content">
                        {
                            isAdmin && <>
                                <li><Link to="/dashboard/allusers">All users</Link></li>
                                <li><Link to="/dashboard/allseller">Add A Doctor</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;