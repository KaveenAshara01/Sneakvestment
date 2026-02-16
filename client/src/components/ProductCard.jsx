import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <div className="group bg-white border border-secondary hover:border-primary hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.2)] transition-all duration-300">
            {/* Image Container */}
            <Link to={`/product/${product._id}`} className="block h-64 overflow-hidden relative bg-gray-100">
                <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                {product.type === 'bulk' ? (
                    <div className="absolute top-2 right-2 bg-white/90 text-black text-xs font-bold px-2 py-1 font-mono border border-black">
                        MOQ: {product.minOrder}
                    </div>
                ) : (
                    <div className="absolute top-2 right-2 bg-black/90 text-white text-xs font-bold px-2 py-1 font-mono border border-white">
                        SINGLE PAIR
                    </div>
                )}
            </Link>

            {/* Info */}
            <div className="p-4 border-t border-secondary">
                <span className="text-primary text-xs font-bold uppercase tracking-wider block mb-1">
                    {product.brand}
                </span>
                <Link to={`/product/${product._id}`} className="block">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 truncate font-heading hover:text-primary transition-colors">{product.name}</h3>
                </Link>

                <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-black text-gray-900 font-sans">${product.price}</span>
                    <span className="text-xs text-gray-500 font-mono">PER PAIR</span>
                </div>

                <Link to={`/product/${product._id}`} className="block w-full text-center border border-gray-900 text-gray-900 font-bold py-2 uppercase text-sm hover:bg-primary hover:text-white hover:border-primary hover:shadow-[2px_2px_0px_#000] transition-all">
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
