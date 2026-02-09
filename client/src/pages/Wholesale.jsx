import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import api from '../api/axios';

const Wholesale = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await api.get('/products');
                setProducts(res.data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className="min-h-screen bg-background pt-24 pb-20 px-6">
            <div className="container-custom">
                <div className="flex justify-between items-end mb-12 border-b border-secondary pb-4">
                    <div>
                        <h1 className="text-5xl font-heading text-gray-900 mb-2">Inventory</h1>
                        <p className="text-gray-500 font-mono">Live wholesale stock. Updated hourly.</p>
                    </div>
                    <div className="text-primary font-mono text-sm">
                        {products.length} ITEMS AVAILABLE
                    </div>
                </div>

                {loading ? (
                    <div className="text-center text-primary font-mono animate-pulse">LOADING_DATA...</div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {products.map(product => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Wholesale;
