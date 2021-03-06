import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hook/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-slate-300 my-4 p-10 rounded-md">

                <h2 className='text-2xl font-bold text-purple-500 text-center'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">

                    {!admin && <> <li><Link to='/dashboard'>My Orders</Link></li>
                        <li><Link to='/dashboard/addReview'>Add a Review</Link></li></>}
                    <li><Link to='/dashboard/myProfile'>My Profile</Link></li>
                    {admin && <><li><Link to='/dashboard/users'>Manage All Users</Link></li>
                        <li><Link to='/dashboard/addProduct'>Add a Product</Link></li>
                        <li><Link to='/dashboard/manageProduct'>Manage All product</Link></li>
                        <li><Link to='/dashboard/manageOrders'>Manage All Orders</Link></li>
                    </>}

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;