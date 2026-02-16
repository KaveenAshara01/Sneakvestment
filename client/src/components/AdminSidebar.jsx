import React, { useContext } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const AdminSidebar = () => {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const getLinkClass = ({ isActive }) => {
        const baseClass = "block px-4 py-3 border transition-all font-mono text-sm uppercase";
        const activeClass = "text-primary bg-slate-50 border-secondary font-bold";
        const inactiveClass = "text-gray-700 hover:text-primary hover:bg-slate-50 border-transparent hover:border-secondary";
        return `${baseClass} ${isActive ? activeClass : inactiveClass}`;
    };

    return (
        <aside className="w-64 bg-white border-r border-secondary hidden md:block shadow-lg z-40 min-h-screen pt-20">
            <div className="p-6 border-b border-secondary">
                <Link to="/admin/dashboard">
                    <h3 className="text-2xl font-heading text-gray-900 italic">Admin Panel</h3>
                </Link>
            </div>
            <nav className="p-4 space-y-2">
                <NavLink to="/admin/dashboard" end className={getLinkClass}>Overview</NavLink>
                <NavLink to="/admin/products" className={getLinkClass}>Products</NavLink>
                <NavLink to="/admin/inquiries" className={getLinkClass}>Inquiries</NavLink>
                <div onClick={handleLogout} className="cursor-pointer block px-4 py-3 text-red-600 hover:text-red-800 hover:bg-red-50 border border-transparent hover:border-red-200 transition-all font-mono text-sm uppercase mt-8">
                    Logout
                </div>
                <Link to="/" className="block px-4 py-3 text-primary mt-4 border border-primary text-center hover:bg-primary hover:text-white font-bold uppercase text-sm">Back to Site</Link>
            </nav>
        </aside>
    );
};

export default AdminSidebar;
