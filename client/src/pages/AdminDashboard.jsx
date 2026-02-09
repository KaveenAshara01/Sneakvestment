import React, { Fragment, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div className="min-h-screen bg-background flex">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-secondary hidden md:block shadow-lg z-10">
                <div className="p-6 border-b border-secondary">
                    <h3 className="text-2xl font-heading text-gray-900 italic">Admin Panel</h3>
                </div>
                <nav className="p-4 space-y-2">
                    <Link to="/admin/dashboard" className="block px-4 py-3 text-gray-500 hover:text-primary hover:bg-slate-50 border border-transparent hover:border-secondary transition-all font-mono text-sm uppercase">Overview</Link>
                    <Link to="/admin/products" className="block px-4 py-3 text-gray-500 hover:text-primary hover:bg-slate-50 border border-transparent hover:border-secondary transition-all font-mono text-sm uppercase">Products</Link>
                    <Link to="/admin/inquiries" className="block px-4 py-3 text-gray-500 hover:text-primary hover:bg-slate-50 border border-transparent hover:border-secondary transition-all font-mono text-sm uppercase">Inquiries</Link>
                    <Link to="/" className="block px-4 py-3 text-primary mt-8 border border-primary text-center hover:bg-primary hover:text-white font-bold uppercase text-sm">Back to Site</Link>
                </nav>
            </aside>

            {/* Content */}
            <main className="flex-1 p-8 bg-slate-50">
                <header className="mb-8 flex justify-between items-center">
                    <h1 className="text-4xl text-gray-900 font-heading">Dashboard</h1>
                    <div className="text-gray-500 font-mono text-sm">Welcome back, Admin</div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* Stats Cards */}
                    <div className="bg-white p-6 border border-secondary shadow-sm">
                        <div className="text-gray-500 text-xs font-mono uppercase mb-2">Total Products</div>
                        <div className="text-4xl font-bold text-gray-900 font-sans">24</div>
                    </div>
                    <div className="bg-white p-6 border border-secondary shadow-sm">
                        <div className="text-gray-500 text-xs font-mono uppercase mb-2">Pending Inquiries</div>
                        <div className="text-4xl font-bold text-primary font-sans">12</div>
                    </div>
                    <div className="bg-white p-6 border border-secondary shadow-sm">
                        <div className="text-gray-500 text-xs font-mono uppercase mb-2">Total Views</div>
                        <div className="text-4xl font-bold text-gray-900 font-sans">1,204</div>
                    </div>
                </div>

                <div className="bg-white border border-secondary p-8 text-center text-gray-500 font-mono">
                    Select a section from the sidebar to manage content.
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;
