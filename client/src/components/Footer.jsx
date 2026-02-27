import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="py-12 px-6 bg-white text-center border-t border-gray-100 mt-auto">
            <div className="container-custom">
                <img src="/logo.png" alt="Sneakvestment" className="h-16 w-auto mx-auto mb-6 opacity-100 grayscale hover:grayscale-0 transition-all" />

                <div className="flex justify-center gap-8 mb-6">
                    <Link to="/wholesale" className="text-gray-500 hover:text-gray-900 font-bold uppercase text-sm tracking-widest transition-colors">Shop</Link>
                    <Link to="/inquiry" className="text-gray-500 hover:text-gray-900 font-bold uppercase text-sm tracking-widest transition-colors">Contact</Link>
                    <Link to="/admin/login" className="text-gray-500 hover:text-gray-900 font-bold uppercase text-sm tracking-widest transition-colors">Admin</Link>
                </div>

                <div className="flex justify-center gap-6 mb-6">
                    <a href="https://wa.me/447498198421" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#25D366] transition-colors text-2xl">
                        <FaWhatsapp />
                    </a>
                    <a href="https://instagram.com/sneakvestment" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#E4405F] transition-colors text-2xl">
                        <FaInstagram />
                    </a>
                </div>

                <div className="text-gray-400 text-xs font-mono space-y-2">
                    <p>&copy; 2026 Sneakvestment Inc. All Rights Reserved.</p>
                    <p>Designed for the culture.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
