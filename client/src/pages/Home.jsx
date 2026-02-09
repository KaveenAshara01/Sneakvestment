import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-h-screen bg-white text-gray-900 pt-20">
            {/* Hero Section - Minimalist & Bold with Floating Images */}
            <section className="relative w-full h-[90vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden border-b border-gray-100">
                <div className="absolute inset-0 bg-white -z-20"></div>

                {/* Floating Images (Absolute Positioned) */}
                {/* Top Left - Sneaker */}
                <img
                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2670&auto=format&fit=crop"
                    alt="Floating Shoe 1"
                    className="floating-img w-48 md:w-64 top-[10%] left-[5%] animate-float rotate-[-15deg] opacity-90 grayscale hover:grayscale-0 transition-all duration-500"
                />
                {/* Top Right - Accessory/Bag */}
                <img
                    src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=2669&auto=format&fit=crop"
                    alt="Floating Bag"
                    className="floating-img w-40 md:w-56 top-[15%] right-[8%] animate-float-delayed rotate-[10deg] opacity-90 grayscale hover:grayscale-0 transition-all duration-500"
                />
                {/* Bottom Left - Detailed Shoe */}
                <img
                    src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=2564&auto=format&fit=crop"
                    alt="Floating Shoe 2"
                    className="floating-img w-56 md:w-72 bottom-[15%] left-[8%] animate-float-delayed rotate-[15deg] opacity-90 grayscale hover:grayscale-0 transition-all duration-500"
                />
                {/* Bottom Right - Hat/Accessory */}
                <img
                    src="https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=2574&auto=format&fit=crop"
                    alt="Floating Hat"
                    className="floating-img w-32 md:w-48 bottom-[20%] right-[10%] animate-float rotate-[-10deg] opacity-90 grayscale hover:grayscale-0 transition-all duration-500"
                />

                <h1 className="text-[14vw] leading-none font-heading font-black tracking-tighter text-gray-100 mb-0 select-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full whitespace-nowrap -z-10">
                    SNEAKVESTMENT
                </h1>

                <div className="relative z-10 bg-white/30 backdrop-blur-sm p-4 rounded-xl border border-white/50 shadow-sm">
                    <h2 className="text-5xl md:text-8xl font-bold font-heading uppercase tracking-wide mb-4 text-gray-900 drop-shadow-sm">
                        Designer Pieces<br /><span className="text-primary block md:inline">Handpicked</span> For You
                    </h2>
                </div>

                <p className="text-lg md:text-xl text-gray-600 max-w-xl font-sans leading-relaxed mb-10 relative z-10 mt-6 bg-white/50 backdrop-blur-sm p-2 rounded">
                    Exclusive Sneakers, Luxury Designer Pieces, and More.
                </p>

                <div className="flex gap-4 relative z-10">
                    <Link to="/wholesale" className="btn btn-primary text-xl px-12 py-5 shadow-[8px_8px_0px_#000]">
                        Wholesale Boxes
                    </Link>
                    <Link to="/wholesale" className="btn btn-secondary text-xl px-12 py-5 bg-white hover:bg-gray-50">
                        Shop Items
                    </Link>
                </div>
            </section>

            {/* Editorial Content Section 1: Philosophy */}
            <section className="py-32 px-6 border-b border-gray-100">
                <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">01 — Our Philosophy</span>
                        <h3 className="text-4xl md:text-5xl font-heading font-medium mb-8 leading-tight">
                            Elevating the Standard<br />of Sneaker Trading.
                        </h3>
                        <div className="space-y-6 text-gray-600 font-sans text-lg leading-loose">
                            <p>
                                In an industry flooded with uncertainty, Sneakvestment stands as a pillar of reliability. We don't just sell shoes; we provide asset security. Every pair that enters our facility is treated not as footwear, but as a tradable commodity with real market value.
                            </p>
                            <p>
                                Our sourcing network spans three continents, allowing us to secure exclusive releases, regional shock-drops, and back-catalog gems that others simply cannot access. We operate with the precision of a financial institution and the passion of a streetwear boutique.
                            </p>
                            <Link to="/wholesale" className="inline-block mt-4 text-gray-900 font-bold border-b-2 border-transparent hover:border-primary transition-all">Read More About Us &rarr;</Link>
                        </div>
                    </div>
                    <div className="bg-gray-100 h-[600px] w-full relative overflow-hidden group">
                        <img
                            src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=2525&auto=format&fit=crop"
                            alt="Sneaker Wall"
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                        />
                    </div>
                </div>
            </section>

            {/* New Section: Trending Assets (Categories) */}
            <section className="py-24 px-6 bg-white border-b border-gray-100">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">02 — The Vault</span>
                        <h3 className="text-4xl md:text-5xl font-heading font-medium">Trending Assets</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <Link to="/wholesale" className="group block relative h-[500px] overflow-hidden bg-gray-100">
                            <img src="https://images.unsplash.com/photo-1579338559194-a162d19bf842?q=80&w=2574&auto=format&fit=crop" alt="Jordan Brand" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
                            <div className="absolute bottom-6 left-6">
                                <span className="text-xs font-mono text-white bg-black px-2 py-1 mb-2 inline-block">MNFC: NIKE INC</span>
                                <h4 className="text-3xl text-white font-heading uppercase">Heritage<br />Classics</h4>
                            </div>
                        </Link>
                        {/* Card 2 */}
                        <Link to="/wholesale" className="group block relative h-[500px] overflow-hidden bg-gray-100">
                            <img src="https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=2670&auto=format&fit=crop" alt="Yeezy / Future" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
                            <div className="absolute bottom-6 left-6">
                                <span className="text-xs font-mono text-white bg-black px-2 py-1 mb-2 inline-block">MNFC: ADIDAS / YEEZY</span>
                                <h4 className="text-3xl text-white font-heading uppercase">Future<br />Silhouettes</h4>
                            </div>
                        </Link>
                        {/* Card 3 */}
                        <Link to="/wholesale" className="group block relative h-[500px] overflow-hidden bg-gray-100">
                            <img src="https://images.unsplash.com/photo-1555529733-0e670560f7e1?q=80&w=2574&auto=format&fit=crop" alt="Luxury" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
                            <div className="absolute bottom-6 left-6">
                                <span className="text-xs font-mono text-white bg-black px-2 py-1 mb-2 inline-block">MNFC: VARIOUS</span>
                                <h4 className="text-3xl text-white font-heading uppercase">Luxury<br />Collaborations</h4>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* New Section: Statistics / Logistics */}
            <section className="py-32 px-6 bg-slate-50 border-b border-gray-100">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-200">
                        <div className="p-4">
                            <h4 className="text-6xl font-black font-heading text-gray-900 mb-2">50K+</h4>
                            <p className="text-gray-500 font-mono text-xs uppercase tracking-widest">Pairs Authenticated</p>
                        </div>
                        <div className="p-4">
                            <h4 className="text-6xl font-black font-heading text-gray-900 mb-2">32</h4>
                            <p className="text-gray-500 font-mono text-xs uppercase tracking-widest">Global Partners</p>
                        </div>
                        <div className="p-4">
                            <h4 className="text-6xl font-black font-heading text-gray-900 mb-2">24h</h4>
                            <p className="text-gray-500 font-mono text-xs uppercase tracking-widest">Dispatch Time</p>
                        </div>
                        <div className="p-4">
                            <h4 className="text-6xl font-black font-heading text-gray-900 mb-2">0%</h4>
                            <p className="text-gray-500 font-mono text-xs uppercase tracking-widest">Fake Rate</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Editorial Content Section 2: Process */}
            <section className="py-32 px-6 bg-white border-b border-gray-100">
                <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="bg-white h-[700px] w-full relative overflow-hidden order-2 md:order-1 border border-gray-200 group">
                        <img
                            src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=2574&auto=format&fit=crop"
                            alt="Authentication"
                            className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-1000"
                        />
                        <div className="absolute bottom-0 left-0 bg-white p-6 border-t border-r border-gray-200 max-w-xs">
                            <p className="font-mono text-xs text-gray-500 leading-relaxed">
                                Scanning Process /// <br />
                                Batch ID: #88291-A <br />
                                Verified by: Specialist T.
                            </p>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 pl-0 md:pl-12">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">03 — The Process</span>
                        <h3 className="text-4xl md:text-5xl font-heading font-medium mb-8 leading-tight">
                            Verify. Verify.<br />Then Verify Again.
                        </h3>
                        <div className="space-y-6 text-gray-600 font-sans text-lg leading-loose">
                            <p>
                                Counterfeits are the plague of this industry. We are the cure. Our multi-stage authentication process involves human expertise backed by AI-driven analysis. We examine stitching density, UV responsiveness, material composition, and packaging integrity.
                            </p>
                            <p>
                                When you buy from Sneakvestment, you are purchasing a guarantee. A promise that your inventory is legitimate, deadstock, and ready for retail. No doubts. No questions. Just business.
                            </p>
                        </div>

                        <ul className="mt-8 space-y-4 font-mono text-sm text-gray-500 border-t border-gray-100 pt-8">
                            <li className="flex items-center gap-4">
                                <span className="w-2 h-2 bg-primary"></span> Multi-point Visual Inspection
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="w-2 h-2 bg-primary"></span> UV & Blacklight Scanning
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="w-2 h-2 bg-primary"></span> Digital Provenance Tracking
                            </li>
                        </ul>

                        <div className="mt-10">
                            <Link to="/inquiry" className="btn btn-primary px-8 py-4 text-sm">
                                Start an Inquiry
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ticker Tape */}
            <div className="bg-gray-900 text-white py-4 overflow-hidden whitespace-nowrap border-b border-gray-800">
                <div className="inline-block animate-marquee">
                    <span className="mx-8 font-heading text-xl tracking-widest">GLOBAL SHIPPING AVAILABLE</span>
                    <span className="mx-8 font-heading text-xl tracking-widest text-primary">///</span>
                    <span className="mx-8 font-heading text-xl tracking-widest">100% AUTHENTIC GUARANTEED</span>
                    <span className="mx-8 font-heading text-xl tracking-widest text-primary">///</span>
                    <span className="mx-8 font-heading text-xl tracking-widest">WHOLESALE PRICING FOR RETAILERS</span>
                    <span className="mx-8 font-heading text-xl tracking-widest text-primary">///</span>
                    <span className="mx-8 font-heading text-xl tracking-widest">GLOBAL SHIPPING AVAILABLE</span>
                    <span className="mx-8 font-heading text-xl tracking-widest text-primary">///</span>
                    <span className="mx-8 font-heading text-xl tracking-widest">100% AUTHENTIC GUARANTEED</span>
                    <span className="mx-8 font-heading text-xl tracking-widest text-primary">///</span>
                    <span className="mx-8 font-heading text-xl tracking-widest">WHOLESALE PRICING FOR RETAILERS</span>
                </div>
            </div>

            {/* Newsletter Section */}
            <section className="py-24 px-6 bg-black text-white">
                <div className="container-custom text-center max-w-4xl mx-auto">
                    <h3 className="text-3xl md:text-5xl font-heading mb-6">Join The Inner Circle</h3>
                    <p className="text-gray-400 mb-10 font-sans text-lg">
                        Get early access to wholesale updated catalogs, market analysis, and exclusive drops.
                    </p>
                    <div className="flex flex-col md:flex-row gap-0 max-w-lg mx-auto">
                        <input type="email" placeholder="Enter your email address" className="flex-1 bg-white/10 border border-white/20 p-4 text-white focus:outline-none focus:border-primary placeholder-gray-500 font-mono" />
                        <button className="bg-primary text-black font-bold uppercase tracking-widest px-8 py-4 hover:bg-white transition-colors">Subscribe</button>
                    </div>
                </div>
            </section>

            {/* Footer Minimal */}
            <footer className="py-20 px-6 bg-white text-center border-t border-gray-100">
                <img src="/logo.png" alt="Sneakvestment" className="h-12 w-auto mx-auto mb-8 opacity-100 grayscale" />
                <div className="flex justify-center gap-8 mb-8">
                    <Link to="/wholesale" className="text-gray-500 hover:text-gray-900 font-bold uppercase text-sm tracking-widest">Shop</Link>
                    <Link to="/inquiry" className="text-gray-500 hover:text-gray-900 font-bold uppercase text-sm tracking-widest">Contact</Link>
                    <Link to="/admin/login" className="text-gray-500 hover:text-gray-900 font-bold uppercase text-sm tracking-widest">Admin</Link>
                </div>
                <div className="text-gray-400 text-xs font-mono space-y-2">
                    <p>&copy; 2026 Sneakvestment Inc. All Rights Reserved.</p>
                    <p>Designed for the culture.</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
