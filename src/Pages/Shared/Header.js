import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate()
    const logOut = () => {
        signOut(auth)
        localStorage.removeItem("accessToken")

    }

    const menuItem = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/portfolio">My portfolio</Link></li>
        <li>{user && <Link to="/dashboard">Dashboard</Link>}</li>
        <li>{user ? <Link onClick={logOut} to="/login">Logout</Link> : <Link to="/login">Login</Link>}</li>

    </>
    return (
        <div className="navbar bg-primary text-white">
            <div className="navbar-center">
                <div className="dropdown">
                    <label tabIndex="1" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="1" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-500 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <p className="btn btn-ghost normal-case text-2xl ">National Computer IT</p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>


            </div>

        </div>
    );
};

export default Header;