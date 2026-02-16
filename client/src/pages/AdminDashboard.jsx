import React, { Fragment, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar';

const AdminDashboard = () => {
    return (
        <div className="min-h-screen bg-white flex relative z-0">
            {/* Sidebar */}
            <AdminSidebar /> {/* Use the Reusable Component */}

            {/* Content */}
            <main className="flex-1 p-8 bg-white pt-28">
                <header className="mb-8 flex justify-between items-center">
                    <h1 className="text-4xl text-gray-900 font-heading">Dashboard Overview</h1>
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
