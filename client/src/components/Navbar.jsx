import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { FaUser, FaSearch, FaShoppingBag } from 'react-icons/fa'; // Assuming react-icons is installed

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 transition-all duration-300">
            <div className="container-custom h-20 flex items-center justify-between relative z-50 bg-white">

                {/* Left: Navigation Links (Desktop) */}
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

                {/* Right: Actions (Desktop) */}
                <div className="hidden md:flex items-center justify-end gap-8 flex-1">
                    <Link to="/" className="text-sm font-bold uppercase tracking-widest text-gray-900 hover:text-primary transition-colors">Home</Link>
                    <Link to="/wholesale" className="text-sm font-bold uppercase tracking-widest text-gray-900 hover:text-primary transition-colors">About</Link>
                    <Link to="/inquiry" className="text-sm font-bold uppercase tracking-widest text-gray-900 hover:text-primary transition-colors">Contact</Link>
                    <button className="text-gray-900 hover:text-primary transition-colors"><FaSearch /></button>
                    <Link to="/wholesale" className="text-gray-900 hover:text-primary transition-colors relative">
                        <FaShoppingBag />
                        <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">0</span>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <Link to="/wholesale" className="text-gray-900 hover:text-primary transition-colors relative">
                        <FaShoppingBag />
                        <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">0</span>
                    </Link>
                    <button onClick={toggleMenu} className="text-gray-900 hover:text-primary focus:outline-none">
                        {isOpen ? <span className="text-2xl">&times;</span> : <span className="text-2xl">&#9776;</span>}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out pt-24 px-6 ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
                <div className="flex flex-col gap-6 text-center">
                    <Link to="/" onClick={toggleMenu} className="text-xl font-bold uppercase tracking-widest text-gray-900 hover:text-primary">Home</Link>
                    <Link to="/wholesale" onClick={toggleMenu} className="text-xl font-bold uppercase tracking-widest text-gray-900 hover:text-primary">Bulk Offers</Link>
                    <Link to="/shop" onClick={toggleMenu} className="text-xl font-bold uppercase tracking-widest text-gray-900 hover:text-primary">Shop Items</Link>
                    <Link to="/inquiry" onClick={toggleMenu} className="text-xl font-bold uppercase tracking-widest text-gray-900 hover:text-primary">Sourcing Services</Link>
                    <Link to="/inquiry" onClick={toggleMenu} className="text-xl font-bold uppercase tracking-widest text-gray-900 hover:text-primary">Contact</Link>
                    <Link to="/admin/login" onClick={toggleMenu} className="text-sm font-mono text-gray-400 mt-4">Admin Login</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
