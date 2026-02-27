import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import api from '../api/axios';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState('All');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await api.get('/products?type=single');
                setProducts(res.data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const filteredProducts = activeCategory === 'All'
        ? products
        : products.filter(product => product.category === activeCategory);

    return (
        <div className="min-h-screen bg-background pt-24 pb-20 px-6">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-secondary pb-4 gap-6">
                    <div>
                        <h1 className="text-5xl font-heading text-gray-900 mb-2">Shop Items</h1>
                        <p className="text-gray-500 font-mono">Exclusive single items. Ready to ship.</p>
                    </div>

                    {/* Category Tabs */}
                    <div className="flex gap-4 overflow-x-auto pb-2 md:pb-0">
                        {['All', 'Sneakers', 'Designer Items'].map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`text-sm font-bold uppercase tracking-widest px-4 py-2 border ${activeCategory === cat ? 'bg-black text-white border-black' : 'bg-white text-gray-500 border-gray-200 hover:border-black hover:text-black'} transition-all whitespace-nowrap`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="text-primary font-mono text-sm hidden md:block">
                        {filteredProducts.length} ITEMS AVAILABLE
                    </div>
                </div>

                {loading ? (
                    <div className="text-center text-primary font-mono animate-pulse">LOADING_DATA...</div>
                ) : filteredProducts.length === 0 ? (
                    <div className="text-center text-gray-400 font-mono py-20">No items available in this category.</div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {filteredProducts.map(product => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Shop;
