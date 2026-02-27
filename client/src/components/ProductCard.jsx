import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <div className="group bg-white transition-all duration-300">
            {/* Image Container */}
            <Link to={`/product/${product._id}`} className="block h-80 md:h-[450px] overflow-hidden relative bg-[#F9F9F9]">
                <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-contain p-8 transition-transform duration-500 group-hover:scale-105"
                />
            </Link>

            {/* Info */}
            <div className="pt-6 pb-2 px-1">
                <Link to={`/product/${product._id}`} className="block">
                    <h3 className="text-xl font-black text-gray-900 mb-2 truncate uppercase tracking-tighter">
                        {product.name}
                    </h3>
                </Link>

                <div className="mb-6">
                    <span className="text-xs font-medium text-gray-500 font-mono tracking-tight">
                        €{product.price ? `${product.price.toLocaleString()}.00` : '0.00'}
                        {product.type === 'bulk' && ` - €${(product.price * 2.5).toLocaleString()}.00`}
                    </span>
                </div>

                <Link
                    to={`/product/${product._id}`}
                    className="block w-full bg-primary text-white font-black py-4 uppercase text-xs tracking-widest hover:bg-black transition-colors text-center"
                >
                    {product.type === 'bulk' ? 'View Box' : 'View Item'}
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
