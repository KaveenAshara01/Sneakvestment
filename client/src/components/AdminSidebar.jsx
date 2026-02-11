import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const AdminSidebar = () => {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <aside className="w-64 bg-white border-r border-secondary hidden md:block shadow-lg z-10 min-h-screen">
            <div className="p-6 border-b border-secondary">
                <Link to="/admin/dashboard">
                    <h3 className="text-2xl font-heading text-gray-900 italic">Admin Panel</h3>
                </Link>
            </div>
            <nav className="p-4 space-y-2">
                <Link to="/admin/dashboard" className="block px-4 py-3 text-gray-500 hover:text-primary hover:bg-slate-50 border border-transparent hover:border-secondary transition-all font-mono text-sm uppercase">Overview</Link>
                <Link to="/admin/products" className="block px-4 py-3 text-gray-500 hover:text-primary hover:bg-slate-50 border border-transparent hover:border-secondary transition-all font-mono text-sm uppercase">Products</Link>
                <Link to="/admin/inquiries" className="block px-4 py-3 text-gray-500 hover:text-primary hover:bg-slate-50 border border-transparent hover:border-secondary transition-all font-mono text-sm uppercase">Inquiries</Link>
                <div onClick={handleLogout} className="cursor-pointer block px-4 py-3 text-red-500 hover:text-red-700 hover:bg-red-50 border border-transparent hover:border-red-200 transition-all font-mono text-sm uppercase mt-8">
                    Logout
                </div>
                <Link to="/" className="block px-4 py-3 text-primary mt-4 border border-primary text-center hover:bg-primary hover:text-white font-bold uppercase text-sm">Back to Site</Link>
            </nav>
        </aside>
    );
};

export default AdminSidebar;
