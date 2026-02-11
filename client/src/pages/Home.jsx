import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-h-screen bg-white text-gray-900 pt-20">
            {/* Hero Section - Minimalist & Bold with Floating Images */}
            <section className="relative w-full h-[90vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden border-b border-gray-100">
                <div className="absolute inset-0 bg-white -z-20"></div>

                {/* Floating Images - Local Assets (Bottoms Lowered Only) */}
                {/* Top Left - Red/White Sneaker (JPG - Needs Blend Mode) -> Back Up */}
                <img
                    src="/floating/pngtree-red-white-sneaker-transparent-background-png-image_12861690.jpg"
                    alt="Floating Sneaker 1"
                    className="absolute w-56 md:w-80 top-[12%] left-[5%] animate-float rotate-[-15deg] transition-all duration-500 pointer-events-none z-0 brightness-110 contrast-125"
                    style={{ mixBlendMode: 'multiply' }}
                />
                {/* Top Right - Nike Run Swift (Yellow/Sea Glass) -> Back Up */}
                <img
                    src="/floating/MENS-NIKE-RUN-SWIFT-3-ROAD-RUNNING-SHOES-UNIVERSITY-RED-SEA-GLASS-WHITE-DR2695-600-1_1728x.webp"
                    alt="Floating Sneaker 2"
                    className="absolute w-56 md:w-80 top-[15%] right-[5%] animate-float-delayed rotate-[10deg] transition-all duration-500 pointer-events-none z-0 brightness-110 contrast-125"
                    style={{ mixBlendMode: 'multiply' }}
                />
                {/* Bottom Left - 360 Stock (Black?) -> Pushed Down Further */}
                <img
                    src="/floating/360_F_436659277_vp2706cMybOmUSoGNbRDGeGWttlVOqL9.jpg"
                    alt="Floating Sneaker 3"
                    className="absolute w-60 md:w-96 -bottom-[5%] left-[5%] animate-float-delayed rotate-[5deg] transition-all duration-500 pointer-events-none z-0 brightness-110 contrast-125"
                    style={{ mixBlendMode: 'multiply' }}
                />
                {/* Bottom Right - Depositphotos -> Pushed Down Further */}
                <img
                    src="/floating/depositphotos_73933823-stock-photo-sneaker-on-white-background.jpg"
                    alt="Floating Sneaker 4"
                    className="absolute w-60 md:w-96 -bottom-[2%] right-[5%] animate-float rotate-[-8deg] transition-all duration-500 pointer-events-none z-0 brightness-110 contrast-125"
                    style={{ mixBlendMode: 'multiply' }}
                />

                <div className="relative z-10 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-black font-heading uppercase tracking-tighter mb-4 text-gray-900 leading-[0.9]">
                        Designer Pieces<br />Handpicked For You
                    </h1>
                    <p className="text-sm md:text-base text-gray-500 font-mono tracking-widest uppercase mb-10">
                        Exclusive Sneakers, Luxury Designer Pieces, and More.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link to="/wholesale" className="btn bg-[#ff3b30] text-white border-[#ff3b30] hover:bg-white hover:text-[#ff3b30] text-sm md:text-base px-8 py-3 shadow-none">
                            Bulk Offers
                        </Link>
                        <Link to="/wholesale" className="btn bg-white text-gray-900 border-gray-300 hover:border-gray-900 text-sm md:text-base px-8 py-3 shadow-none">
                            Shop Items
                        </Link>
                    </div>
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
