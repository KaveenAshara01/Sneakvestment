import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <div className="group bg-white border border-gray-100 transition-all duration-300">
            {/* Image Container */}
            <Link to={`/product/${product._id}`} className="block h-72 overflow-hidden relative bg-[#F6F6F6]">
                <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                />
                {product.type === 'bulk' && (
                    <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-2 py-1 uppercase tracking-tighter">
                        Top Pick
                    </div>
                )}
            </Link>

            {/* Info */}
            <div className="p-5 text-center">
                <Link to={`/product/${product._id}`} className="block">
                    <h3 className="text-sm font-black text-gray-900 mb-1 truncate uppercase tracking-tight hover:text-primary transition-colors">
                        {product.name}
                    </h3>
                </Link>

                {/* Star Ratings (Mocked for Saru Look) */}
                <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3 h-3 fill-primary" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    ))}
                </div>

                <div className="mb-4">
                    <span className="text-sm font-bold text-gray-900">
                        ${product.price ? `${product.price.toLocaleString()}.00` : '0.00'}
                        {product.type === 'bulk' && ' – $3,000.00'}
                    </span>
                </div>

                <Link
                    to={`/product/${product._id}`}
                    className="block w-full bg-primary text-white font-black py-3 uppercase text-xs tracking-widest hover:bg-black transition-colors"
                >
                    {product.type === 'bulk' ? 'View Box' : 'View Item'}
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
