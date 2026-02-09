import React, { useState } from 'react';
import api from '../api/axios';

const Inquiry = () => {
    const [formData, setFormData] = useState({
        name: '',
        businessName: '',
        email: '',
        phone: '',
        message: '',
        quantity: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        try {
            await api.post('/inquiries', formData);
            setStatus('success');
            setFormData({ name: '', businessName: '', email: '', phone: '', message: '', quantity: '' });
        } catch (err) {
            console.error(err);
            setStatus('error');
        }
    };

    return (
        <div className="min-h-screen bg-background pt-24 pb-12 flex items-center justify-center px-4">
            <div className="w-full max-w-2xl bg-white border border-secondary p-8 md:p-12 shadow-[8px_8px_0px_#e2e8f0]">
                <h1 className="text-4xl font-heading text-gray-900 mb-2 text-center">Start an Order</h1>
                <p className="text-gray-500 text-center mb-8 font-mono text-sm border-b border-secondary pb-4">
                    Serious inquiries only. Best wholesale rates guaranteed.
                </p>

                {status === 'success' && (
                    <div className="bg-primary/10 border border-primary text-primary p-4 mb-6 text-center font-bold">
                        INQUIRY RECEIVED. WE WILL CONTACT YOU SHORTLY.
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs text-gray-500 uppercase font-bold tracking-wider">Full Name</label>
                            <input
                                type="text" name="name"
                                value={formData.name} onChange={handleChange} required
                                className="w-full bg-slate-50 border border-secondary p-3 text-gray-900 focus:outline-none focus:border-primary focus:shadow-[2px_2px_0px_#3b82f6] transition-all rounded-none"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs text-gray-500 uppercase font-bold tracking-wider">Business Name</label>
                            <input
                                type="text" name="businessName"
                                value={formData.businessName} onChange={handleChange}
                                className="w-full bg-slate-50 border border-secondary p-3 text-gray-900 focus:outline-none focus:border-primary focus:shadow-[2px_2px_0px_#3b82f6] transition-all rounded-none"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs text-gray-500 uppercase font-bold tracking-wider">Email Address</label>
                            <input
                                type="email" name="email"
                                value={formData.email} onChange={handleChange} required
                                className="w-full bg-slate-50 border border-secondary p-3 text-gray-900 focus:outline-none focus:border-primary focus:shadow-[2px_2px_0px_#3b82f6] transition-all rounded-none"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs text-gray-500 uppercase font-bold tracking-wider">Phone Number</label>
                            <input
                                type="tel" name="phone"
                                value={formData.phone} onChange={handleChange}
                                className="w-full bg-slate-50 border border-secondary p-3 text-gray-900 focus:outline-none focus:border-primary focus:shadow-[2px_2px_0px_#3b82f6] transition-all rounded-none"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs text-gray-500 uppercase font-bold tracking-wider">Inquiry / Order Details</label>
                        <textarea
                            name="message" rows="4"
                            value={formData.message} onChange={handleChange} required
                            className="w-full bg-slate-50 border border-secondary p-3 text-gray-900 focus:outline-none focus:border-primary focus:shadow-[2px_2px_0px_#3b82f6] transition-all rounded-none"
                        ></textarea>
                    </div>

                    <button type="submit" className="w-full btn btn-primary py-4 text-lg">
                        Submit Inquiry
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Inquiry;
