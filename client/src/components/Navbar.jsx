import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { FaUser, FaSearch, FaShoppingBag } from 'react-icons/fa'; // Assuming react-icons is installed

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 transition-all duration-300">
            <div className="container-custom h-20 flex items-center justify-between">

                {/* Left: Navigation Links */}
                <div className="hidden md:flex gap-8 flex-1">
                    <Link to="/wholesale" className="text-sm font-bold uppercase tracking-widest text-gray-900 hover:text-primary transition-colors">Bulk Offers</Link>
                    <Link to="/shop" className="text-sm font-bold uppercase tracking-widest text-gray-900 hover:text-primary transition-colors">Shop Items</Link>
                    <Link to="/inquiry" className="text-sm font-bold uppercase tracking-widest text-gray-900 hover:text-primary transition-colors">Sourcing Services</Link>
                </div>

                {/* Center: Logo */}
                <div className="flex-shrink-0 flex justify-center">
                    <Link to="/">
                        <img src="/logo.png" alt="Sneakvestment" className="h-16 w-auto object-contain" />
                    </Link>
                </div>

                {/* Right: Actions */}
                <div className="flex items-center justify-end gap-8 flex-1">
                    <Link to="/" className="text-sm font-bold uppercase tracking-widest text-gray-900 hover:text-primary transition-colors">Home</Link>
                    <Link to="/wholesale" className="text-sm font-bold uppercase tracking-widest text-gray-900 hover:text-primary transition-colors">About</Link>
                    <Link to="/inquiry" className="text-sm font-bold uppercase tracking-widest text-gray-900 hover:text-primary transition-colors">Contact</Link>
                    <button className="text-gray-900 hover:text-primary transition-colors"><FaSearch /></button>
                    <Link to="/wholesale" className="text-gray-900 hover:text-primary transition-colors relative">
                        <FaShoppingBag />
                        <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">0</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
