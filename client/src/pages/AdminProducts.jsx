import React, { useState, useEffect } from 'react';
import AdminSidebar from '../components/AdminSidebar';
import api from '../api/axios';
import { FaEdit, FaTrash, FaPlus, FaBoxOpen } from 'react-icons/fa';

const AdminProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [uploading, setUploading] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        brand: '',
        price: '',
        minOrder: 10,
        images: '',
        description: '',
        category: 'Sneakers',
        type: 'bulk',
        inStock: true,
        options: []
    });

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const res = await api.get('/products');
            setProducts(res.data);
            setLoading(false);
        } catch (err) {
            console.error(err);
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            try {
                await api.delete(`/products/${id}`);
                setProducts(products.filter(p => p._id !== id));
            } catch (err) {
                console.error(err);
            }
        }
    };

    const handleEdit = (product) => {
        setEditingProduct(product);
        setFormData({
            name: product.name,
            brand: product.brand,
            price: product.price,
            minOrder: product.minOrder,
            images: product.images.join(','), // Simple CSV for now
            description: product.description,
            category: product.category || 'Sneakers',
            type: product.type || 'bulk',
            inStock: product.inStock,
            options: product.options || []
        });
        setIsModalOpen(true);
    };

    const handleAddNew = () => {
        setEditingProduct(null);
        setFormData({
            name: '',
            brand: '',
            price: '',
            minOrder: 10,
            images: '',
            description: '',
            category: 'Sneakers',
            type: 'bulk',
            inStock: true,
            options: []
        });
        setIsModalOpen(true);
    };

    const handleImageUpload = async (e) => {
        const files = Array.from(e.target.files);
        if (files.length === 0) return;

        setUploading(true);
        const formData = new FormData();
        files.forEach(file => {
            formData.append('images', file);
        });

        try {
            const res = await api.post('/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            // Append new URLs to existing images (handled as comma-separated string in state)
            const currentImages = formData.images ? formData.images.split(',').filter(Boolean) : [];
            const newImages = [...currentImages, ...res.data.urls];
            setFormData(prev => ({ ...prev, images: newImages.join(',') }));
            setUploading(false);
        } catch (err) {
            console.error(err);
            alert("Image upload failed");
            setUploading(false);
        }
    };

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData({ ...formData, [e.target.name]: value });
    };

    const handleOptionChange = (index, field, value) => {
        const newOptions = [...formData.options];
        newOptions[index][field] = value;
        setFormData({ ...formData, options: newOptions });
    };

    const addOption = () => {
        setFormData({ ...formData, options: [...formData.options, { label: '', price: '' }] });
    };

    const removeOption = (index) => {
        const newOptions = formData.options.filter((_, i) => i !== index);
        setFormData({ ...formData, options: newOptions });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const productData = {
            ...formData,
            images: formData.images.split(',').map(url => url.trim()).filter(url => url !== '')
        };

        try {
            if (editingProduct) {
                const res = await api.put(`/products/${editingProduct._id}`, productData);
                setProducts(products.map(p => p._id === editingProduct._id ? res.data : p));
            } else {
                const res = await api.post('/products', productData);
                setProducts([...products, res.data]);
            }
            setIsModalOpen(false);
        } catch (err) {
            console.error(err);
            alert("Error saving product check console.");
        }
    };

    return (
        <div className="min-h-screen bg-background flex">
            <AdminSidebar />
            <main className="flex-1 p-8 bg-white min-h-screen pt-28">
                <header className="mb-8 flex justify-between items-center">
                    <div>
                        <h1 className="text-4xl text-gray-900 font-heading">Products</h1>
                        <p className="text-gray-500 font-mono text-sm">Manage your inventory, prices, and categories.</p>
                    </div>
                    <button onClick={handleAddNew} className="btn bg-primary text-white hover:bg-black px-6 py-3 flex items-center gap-2">
                        <FaPlus /> Add New Product
                    </button>
                </header>

                <div className="bg-white border border-secondary shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-100 text-gray-500 font-mono text-xs uppercase tracking-wider border-b border-secondary">
                                    <th className="p-4">Image</th>
                                    <th className="p-4">Name</th>
                                    <th className="p-4">Brand</th>
                                    <th className="p-4">Category/Type</th>
                                    <th className="p-4">Price</th>
                                    <th className="p-4">Stock</th>
                                    <th className="p-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 font-sans text-sm text-gray-700">
                                {loading ? (
                                    <tr><td colSpan="7" className="p-8 text-center">Loading...</td></tr>
                                ) : products.length === 0 ? (
                                    <tr><td colSpan="7" className="p-8 text-center">No products found.</td></tr>
                                ) : (
                                    products.map(product => (
                                        <tr key={product._id} className="hover:bg-gray-50 transition-colors">
                                            <td className="p-4">
                                                <img src={product.images[0] || 'https://via.placeholder.com/50'} alt={product.name} className="w-12 h-12 object-cover rounded border border-gray-200" />
                                            </td>
                                            <td className="p-4 font-bold">{product.name}</td>
                                            <td className="p-4">{product.brand}</td>
                                            <td className="p-4">
                                                <span className="block">{product.category}</span>
                                                <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${product.type === 'bulk' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'}`}>
                                                    {product.type}
                                                </span>
                                            </td>
                                            <td className="p-4 font-mono">€{product.price}</td>
                                            <td className="p-4">
                                                {product.inStock ? (
                                                    <span className="text-green-600 font-bold flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500"></span> In Stock</span>
                                                ) : (
                                                    <span className="text-red-500 font-bold flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-500"></span> Out</span>
                                                )}
                                            </td>
                                            <td className="p-4 text-right">
                                                <div className="flex justify-end gap-2">
                                                    <button onClick={() => handleEdit(product)} className="text-blue-500 hover:text-blue-700 p-2"><FaEdit /></button>
                                                    <button onClick={() => handleDelete(product._id)} className="text-red-500 hover:text-red-700 p-2"><FaTrash /></button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
                    <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded shadow-2xl animate-fade-in">
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                            <h3 className="text-2xl font-heading">{editingProduct ? 'Edit Product' : 'Add New Product'}</h3>
                            <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-900 text-2xl">&times;</button>
                        </div>
                        <form onSubmit={handleSubmit} className="p-6 space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Product Name</label>
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full border border-gray-300 p-2 rounded focus:border-primary focus:outline-none" required />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Brand</label>
                                    <input type="text" name="brand" value={formData.brand} onChange={handleChange} className="w-full border border-gray-300 p-2 rounded focus:border-primary focus:outline-none" required />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Price (€)</label>
                                    <input type="number" name="price" value={formData.price} onChange={handleChange} className="w-full border border-gray-300 p-2 rounded focus:border-primary focus:outline-none" required />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Type</label>
                                    <select name="type" value={formData.type} onChange={handleChange} className="w-full border border-gray-300 p-2 rounded focus:border-primary focus:outline-none">
                                        <option value="bulk">Bulk (Wholesale)</option>
                                        <option value="single">Single Item</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Category</label>
                                    <select name="category" value={formData.category} onChange={handleChange} className="w-full border border-gray-300 p-2 rounded focus:border-primary focus:outline-none">
                                        <option value="Sneakers">Sneakers</option>
                                        <option value="Designer Items">Designer Items</option>
                                        <option value="Streetwear">Streetwear</option>
                                        <option value="Accessories">Accessories</option>
                                    </select>
                                </div>
                            </div>


                            {formData.type === 'bulk' && (
                                <div className="col-span-1 md:col-span-2 border p-4 rounded bg-gray-50">
                                    <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Bulk Pricing Options (Variants)</label>
                                    {formData.options.map((option, index) => (
                                        <div key={index} className="flex gap-2 mb-2 items-center">
                                            <input
                                                type="text"
                                                placeholder="Label (e.g. x25)"
                                                value={option.label}
                                                onChange={(e) => handleOptionChange(index, 'label', e.target.value)}
                                                className="border p-2 rounded w-1/3 text-sm"
                                            />
                                            <input
                                                type="number"
                                                placeholder="Price"
                                                value={option.price}
                                                onChange={(e) => handleOptionChange(index, 'price', e.target.value)}
                                                className="border p-2 rounded w-1/3 text-sm"
                                            />
                                            <button type="button" onClick={() => removeOption(index)} className="text-red-500 hover:text-red-700 font-bold px-2">&times;</button>
                                        </div>
                                    ))}
                                    <button type="button" onClick={addOption} className="text-primary text-xs font-bold uppercase hover:underline">+ Add Option</button>
                                </div>
                            )}
                            <div>
                                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Product Images</label>

                                {/* File Upload Input */}
                                <div className="mb-2">
                                    <label className="cursor-pointer bg-secondary hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded inline-flex items-center gap-2 transition-colors">
                                        <FaBoxOpen /> <span>{uploading ? 'Uploading...' : 'Select Images'}</span>
                                        <input type="file" multiple onChange={handleImageUpload} className="hidden" accept="image/*" disabled={uploading} />
                                    </label>
                                </div>

                                {/* URL Input (Fallback/Display) */}
                                <input type="text" name="images" value={formData.images} onChange={handleChange} className="w-full border border-gray-300 p-2 rounded focus:border-primary focus:outline-none text-xs" placeholder="Image URLs will appear here..." readOnly />

                                {/* Preview */}
                                {formData.images && (
                                    <div className="flex gap-2 mt-2 overflow-x-auto pb-2">
                                        {formData.images.split(',').map((url, index) => (
                                            url && <img key={index} src={url.trim()} alt="Preview" className="h-16 w-16 object-cover rounded border border-gray-200" />
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Description</label>
                                <textarea name="description" value={formData.description} onChange={handleChange} rows="4" className="w-full border border-gray-300 p-2 rounded focus:border-primary focus:outline-none"></textarea>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" name="inStock" checked={formData.inStock} onChange={handleChange} id="inStock" className="w-4 h-4 text-primary focus:ring-primary border-gray-300 rounded" />
                                <label htmlFor="inStock" className="text-sm text-gray-700 font-bold">In Stock</label>
                            </div>
                            <div className="flex justify-end gap-4 pt-4 border-t border-gray-100">
                                <button type="button" onClick={() => setIsModalOpen(false)} className="px-6 py-2 text-gray-500 hover:text-gray-900 font-bold uppercase text-sm">Cancel</button>
                                <button type="submit" className="btn bg-primary text-white hover:bg-black px-8 py-2 shadow-lg">Save Product</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminProducts;
