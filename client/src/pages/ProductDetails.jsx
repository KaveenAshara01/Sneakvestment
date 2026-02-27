import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api/axios';
import { FaWhatsapp, FaArrowLeft } from 'react-icons/fa';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState('');
    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await api.get(`/products/${id}`);
                setProduct(res.data);
                if (res.data.images && res.data.images.length > 0) {
                    setSelectedImage(res.data.images[0]);
                }
                if (res.data.options && res.data.options.length > 0) {
                    setSelectedOption(res.data.options[0]);
                }
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    if (loading) return <div className="min-h-screen pt-32 text-center">Loading...</div>;
    if (!product) return <div className="min-h-screen pt-32 text-center">Product not found.</div>;

    // Calculate display price
    const displayPrice = selectedOption ? selectedOption.price : product.price;
    const priceLabel = selectedOption ? `${selectedOption.label} - €${selectedOption.price}` : `€${product.price}`;

    // Prepare WhatsApp Message
    const whatsappNumber = "447498198421"; // Updated number
    const message = encodeURIComponent(
        `Hi, I'm interested in this product: ${product.name}` +
        (selectedOption ? `\nOption: ${selectedOption.label} (€${selectedOption.price})` : '') +
        `\nLink: ${window.location.href}`
    );
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

    return (
        <div className="min-h-screen bg-white pt-24 pb-20">
            <div className="container-custom px-4">
                <Link to={product.type === 'bulk' ? '/wholesale' : '/shop'} className="inline-flex items-center gap-2 text-gray-500 hover:text-black mb-8 font-mono text-sm uppercase tracking-wide">
                    <FaArrowLeft /> Back to {product.type === 'bulk' ? 'Wholesale' : 'Shop'}
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left: Check Gallery */}
                    <div className="space-y-4">
                        <div className="bg-gray-100 aspect-square overflow-hidden border border-gray-200 cursor-zoom-in">
                            <img src={selectedImage || 'https://via.placeholder.com/600'} alt={product.name} className="w-full h-full object-cover" />
                        </div>
                        {product.images && product.images.length > 1 && (
                            <div className="flex gap-4 overflow-x-auto pb-2">
                                {product.images.map((img, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(img)}
                                        className={`w-20 h-20 flex-shrink-0 border-2 ${selectedImage === img ? 'border-primary' : 'border-transparent hover:border-gray-300'} transition-all`}
                                    >
                                        <img src={img} alt={`Thumb ${index}`} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Right: Info */}
                    <div>
                        <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">{product.brand}</span>
                        <h1 className="text-4xl md:text-5xl font-heading text-gray-900 mb-6 uppercase leading-tight">{product.name}</h1>

                        <div className="mb-8 border-b border-gray-100 pb-8">
                            {product.type === 'bulk' && product.options && product.options.length > 0 ? (
                                <div className="space-y-4">
                                    <label className="block text-sm font-bold uppercase text-gray-500">Choose Package</label>
                                    <div className="relative">
                                        <select
                                            className="w-full p-4 border border-gray-300 bg-white font-mono text-lg appearance-none focus:outline-none focus:border-primary cursor-pointer"
                                            onChange={(e) => {
                                                const opt = product.options.find(o => o._id === e.target.value || o.label === e.target.value);
                                                // Fallback to index if needed, but value matches label usually
                                                // Let's rely on index for safety in map
                                                const selectedIndex = e.target.selectedIndex;
                                                setSelectedOption(product.options[selectedIndex]);
                                            }}
                                        >
                                            {product.options.map((opt, idx) => (
                                                <option key={idx} value={opt.label}>
                                                    {opt.label} - €{opt.price}
                                                </option>
                                            ))}
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">▼</div>
                                    </div>
                                    <p className="text-3xl font-heading mt-4">€{displayPrice}</p>
                                </div>
                            ) : (
                                <p className="text-3xl font-heading">€{product.price}</p>
                            )}
                        </div>

                        {/* Actions */}
                        <div className="mb-10">
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="w-full btn btn-primary py-4 text-lg flex items-center justify-center gap-3 shadow-[4px_4px_0px_#000000] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000000] transition-all"
                            >
                                <FaWhatsapp className="text-2xl" />
                                <span>{product.type === 'bulk' ? 'Order Batch Now' : 'Buy Now'}</span>
                            </a>
                            <p className="text-center text-xs text-gray-500 mt-3 font-mono">
                                Direct WhatsApp connection with our sales team.
                            </p>
                        </div>

                        {/* Details */}
                        <div className="space-y-6 text-gray-600 font-sans leading-relaxed text-sm">
                            <div>
                                <h4 className="font-bold text-gray-900 uppercase mb-2">Description</h4>
                                <p className="whitespace-pre-line">{product.description || "No description available."}</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
                                <div>
                                    <h5 className="font-bold text-gray-900 uppercase text-xs mb-1">Authenticity</h5>
                                    <p className="text-xs">Guaranteed 100% Authentic</p>
                                </div>
                                <div>
                                    <h5 className="font-bold text-gray-900 uppercase text-xs mb-1">Shipping</h5>
                                    <p className="text-xs">Worldwide Express Shipping</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
