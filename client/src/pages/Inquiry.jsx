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
        <div className="min-h-screen bg-background pt-24 pb-20">
            {/* Hero Section */}
            <div className="container-custom px-4 mb-16 text-center">
                <h1 className="text-5xl md:text-7xl font-heading text-gray-900 mb-6 uppercase tracking-wide">
                    Looking for a <span className="text-primary">Rare Find</span>?
                </h1>
                <h2 className="text-2xl md:text-3xl font-heading text-gray-700 mb-4">Let Us Source It for You</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto font-sans leading-relaxed">
                    From exclusive sneakers, luxury bags and rare jewelry, we specialize in sourcing the items you need.
                    Our dedicated team is committed to uncovering hidden gems from around the world.
                </p>
            </div>

            <div className="container-custom px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                {/* Left Column: Content */}
                <div className="space-y-12">

                    {/* Finding the Impossible */}
                    <section>
                        <h3 className="text-3xl font-heading text-gray-900 mb-4 border-l-4 border-primary pl-4">Finding the Impossible</h3>
                        <p className="text-gray-600 font-sans leading-relaxed text-justify mb-6">
                            Leveraging our extensive global network and industry expertise, we fulfill even the most challenging requests.
                            Whether you're searching for a rare vintage luxury bag, a one-of-a-kind piece of jewelry, or a sample sneaker,
                            we're here to make the impossible possible. Choose us because we're passionate about finding the perfect item for you.
                        </p>
                        <img
                            src="/images/sourcing-shelf.jpg"
                            alt="Rare Sneakers Shelf"
                            className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500 border border-secondary"
                        />
                    </section>

                    {/* Recently Sourced */}
                    <section>
                        <h3 className="text-3xl font-heading text-gray-900 mb-6 border-l-4 border-primary pl-4">Rare Items Recently Sourced</h3>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 p-4 border border-secondary bg-white hover:border-primary transition-colors group">
                                <div className="w-24 h-24 bg-gray-100 overflow-hidden border border-gray-200">
                                    <img src="/images/dunk.jpg" alt="Nike Dunk" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 uppercase text-lg">Nike Dunk Chunky Dunky</h4>
                                    <p className="text-sm text-primary font-mono">Sourced for a private client</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 border border-secondary bg-white hover:border-primary transition-colors group">
                                <div className="w-24 h-24 bg-gray-100 overflow-hidden border border-gray-200">
                                    <img src="/images/jordan.jpg" alt="Jordan 4" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 uppercase text-lg">Jordan 4 x Union Noir</h4>
                                    <p className="text-sm text-primary font-mono">Sourced for a VIP Client</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 border border-secondary bg-white hover:border-primary transition-colors group">
                                <div className="w-24 h-24 bg-gray-100 overflow-hidden border border-gray-200">
                                    <img src="/images/bapesta.jpg" alt="Bapesta" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 uppercase text-lg">Kanye West x Bapesta</h4>
                                    <p className="text-sm text-primary font-mono">Sourced for a Personal Shopper</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section>
                        <h3 className="text-3xl font-heading text-gray-900 mb-6 border-l-4 border-primary pl-4">Sourcing FAQ</h3>
                        <div className="space-y-4">
                            <details className="group border border-secondary bg-white p-4 cursor-pointer">
                                <summary className="font-bold text-gray-900 uppercase flex justify-between items-center list-none">
                                    Can you source for international customers?
                                    <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <p className="mt-2 text-gray-600 text-sm">Yes, we ship worldwide and source items for clients across the globe.</p>
                            </details>
                            <details className="group border border-secondary bg-white p-4 cursor-pointer">
                                <summary className="font-bold text-gray-900 uppercase flex justify-between items-center list-none">
                                    How long does sourcing take?
                                    <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <p className="mt-2 text-gray-600 text-sm">Typically 1-2 weeks depending on rarity and availability.</p>
                            </details>
                            <details className="group border border-secondary bg-white p-4 cursor-pointer">
                                <summary className="font-bold text-gray-900 uppercase flex justify-between items-center list-none">
                                    Is authenticity guaranteed?
                                    <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <p className="mt-2 text-gray-600 text-sm">Absolutely. Our team inspects every item. We assume full responsibility for authenticity.</p>
                            </details>
                        </div>
                    </section>
                </div>

                {/* Right Column: Form */}
                <div className="lg:sticky lg:top-24">
                    <div className="bg-white border text-center border-secondary p-8 shadow-[8px_8px_0px_#3b82f6]">
                        <h3 className="text-3xl font-heading text-gray-900 mb-2">Submit a Request</h3>
                        <p className="text-gray-500 mb-6 font-mono text-xs">Fill out the form below and our team will start hunting.</p>

                        {status === 'success' && (
                            <div className="bg-green-50 text-green-700 p-4 mb-6 border border-green-200 font-bold text-sm">
                                ✅ REQUEST RECEIVED. WE WILL BE IN TOUCH.
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4 text-left">
                            <div>
                                <label className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1 block">Full Name</label>
                                <input
                                    type="text" name="name"
                                    value={formData.name} onChange={handleChange} required
                                    className="w-full bg-slate-50 border border-secondary p-3 text-gray-900 focus:outline-none focus:border-primary focus:shadow-[2px_2px_0px_#3b82f6] text-sm"
                                />
                            </div>
                            <div>
                                <label className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1 block">Email Address</label>
                                <input
                                    type="email" name="email"
                                    value={formData.email} onChange={handleChange} required
                                    className="w-full bg-slate-50 border border-secondary p-3 text-gray-900 focus:outline-none focus:border-primary focus:shadow-[2px_2px_0px_#3b82f6] text-sm"
                                />
                            </div>
                            <div>
                                <label className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1 block">Phone (WhatsApp)</label>
                                <input
                                    type="tel" name="phone"
                                    value={formData.phone} onChange={handleChange}
                                    className="w-full bg-slate-50 border border-secondary p-3 text-gray-900 focus:outline-none focus:border-primary focus:shadow-[2px_2px_0px_#3b82f6] text-sm"
                                />
                            </div>
                            <div>
                                <label className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1 block">Item Details (Size, Color, etc.)</label>
                                <textarea
                                    name="message" rows="4"
                                    value={formData.message} onChange={handleChange} required
                                    className="w-full bg-slate-50 border border-secondary p-3 text-gray-900 focus:outline-none focus:border-primary focus:shadow-[2px_2px_0px_#3b82f6] text-sm"
                                ></textarea>
                            </div>
                            <button type="submit" className="w-full btn btn-primary py-3 text-lg mt-4">
                                Start Sourcing
                            </button>
                        </form>
                    </div>

                    {/* WhatsApp Box */}
                    <div className="mt-8 bg-[#25D366] text-white p-6 shadow-[8px_8px_0px_#000] text-center group cursor-pointer hover:-translate-y-1 transition-transform">
                        <h4 className="font-heading text-2xl mb-1">Prefer to Chat?</h4>
                        <p className="font-mono text-sm mb-4">Message us directly on WhatsApp for faster response.</p>
                        <a href="https://wa.me/" target="_blank" rel="noreferrer" className="inline-block bg-white text-[#25D366] font-bold px-6 py-2 uppercase text-sm hover:bg-black hover:text-white transition-colors">
                            Chat Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inquiry;
