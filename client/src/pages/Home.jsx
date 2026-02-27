import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/axios';
import ProductCard from '../components/ProductCard';

const Home = () => {
    const [bulkProducts, setBulkProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBulkProducts = async () => {
            try {
                const res = await api.get('/products?type=bulk');
                setBulkProducts(res.data.slice(0, 4)); // Fetch top 4
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchBulkProducts();
    }, []);

    const scrollToBulk = () => {
        document.getElementById('bulk-section')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-white text-black">
            {/* Hero Section - sarugeneral Style */}
            <section className="relative w-full h-[95vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden border-b border-gray-100 bg-white pt-24">
                {/* Floating Images - Local Assets */}
                <img
                    src="/floating/pngtree-red-white-sneaker-transparent-background-png-image_12861690.jpg"
                    alt="Floating Sneaker 1"
                    className="absolute w-32 md:w-72 top-[15%] left-[2%] md:left-[5%] animate-float rotate-[-15deg] pointer-events-none z-0 brightness-105 opacity-0 animate-pop-in"
                    style={{ mixBlendMode: 'multiply', animationDelay: '0.2s' }}
                />
                <img
                    src="/floating/MENS-NIKE-RUN-SWIFT-3-ROAD-RUNNING-SHOES-UNIVERSITY-RED-SEA-GLASS-WHITE-DR2695-600-1_1728x.webp"
                    alt="Floating Sneaker 2"
                    className="absolute w-32 md:w-72 top-[18%] right-[2%] md:right-[5%] animate-float-delayed rotate-[12deg] pointer-events-none z-0 brightness-105 opacity-0 animate-pop-in"
                    style={{ mixBlendMode: 'multiply', animationDelay: '0.4s' }}
                />
                <img
                    src="/floating/360_F_436659277_vp2706cMybOmUSoGNbRDGeGWttlVOqL9.jpg"
                    alt="Floating Sneaker 3"
                    className="absolute w-40 md:w-80 bottom-[5%] left-[2%] md:left-[5%] animate-float-delayed rotate-[5deg] pointer-events-none z-0 brightness-105 opacity-0 animate-pop-in"
                    style={{ mixBlendMode: 'multiply', animationDelay: '0.6s' }}
                />
                <img
                    src="/floating/depositphotos_73933823-stock-photo-sneaker-on-white-background.jpg"
                    alt="Floating Sneaker 4"
                    className="absolute w-40 md:w-80 bottom-[3%] right-[2%] md:right-[5%] animate-float rotate-[-8deg] pointer-events-none z-0 brightness-105 opacity-0 animate-pop-in"
                    style={{ mixBlendMode: 'multiply', animationDelay: '0.8s' }}
                />

                <div className="relative z-10 max-w-5xl mx-auto px-6 opacity-0 animate-reveal-up" style={{ animationDelay: '0.1s' }}>
                    <h1 className="text-6xl md:text-8xl font-black font-heading uppercase tracking-tighter mb-8 leading-[0.85] text-black">
                        DESIGNER PIECES<br />HANDPICKED FOR YOU.
                    </h1>
                    <div className="flex flex-col md:flex-row justify-center gap-4">
                        <button
                            onClick={scrollToBulk}
                            className="bg-primary text-white font-black px-12 py-4 text-sm md:text-base uppercase tracking-widest hover:bg-black transition-colors"
                        >
                            Bulk Offers
                        </button>
                        <Link
                            to="/shop"
                            className="bg-white text-black border-2 border-black font-black px-12 py-4 text-sm md:text-base uppercase tracking-widest hover:bg-black hover:text-white transition-all"
                        >
                            Shop Items
                        </Link>
                    </div>
                </div>
            </section>

            {/* Brand Ticker Tape Section */}
            <div className="bg-white py-20 border-b border-gray-100 overflow-hidden whitespace-nowrap">
                <div className="inline-block animate-marquee-slow">
                    <div className="flex items-center gap-32 md:gap-40 px-12">
                        {/* Duplicate logos for seamless scroll */}
                        {[...Array(3)].map((_, i) => (
                            <React.Fragment key={i}>
                                {[
                                    '/images/brands/nike.png',
                                    '/images/brands/jordan.png',
                                    '/images/brands/offwhite.png',
                                    '/images/brands/supreme.png',
                                    '/images/brands/stussy.png',
                                    '/images/brands/chromehearts.png',
                                    '/images/brands/prada.png'
                                ].map((logo, index) => (
                                    <div key={`${i}-${index}`} className="flex-shrink-0">
                                        <img
                                            src={logo}
                                            alt="Brand Logo"
                                            className="h-20 md:h-28 w-auto object-contain transition-all duration-300"
                                            style={{
                                                mixBlendMode: 'multiply',
                                                filter: 'contrast(1.2) brightness(1.1)'
                                            }}
                                            onError={(e) => {
                                                console.error(`Failed to load logo: ${logo}`);
                                                e.target.style.display = 'none';
                                            }}
                                        />
                                    </div>
                                ))}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bulk Offers Section */}
            <section id="bulk-section" className="py-24 px-6 bg-white">
                <div className="max-w-[1400px] mx-auto">
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-black">
                            Check Out Popular Bulk Offers
                        </h2>
                    </div>

                    {loading ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="animate-pulse bg-gray-50 h-[550px]"></div>
                            ))}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            {bulkProducts.slice(0, 3).map(product => (
                                <ProductCard key={product._id} product={product} />
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Rare Find Section - sarugeneral Red CTA */}
            <section className="py-24 px-6 bg-primary text-white text-center border-y border-white/10">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
                        LOOKING FOR A<br />RARE FIND?
                    </h2>
                    <p className="text-lg md:text-xl font-medium uppercase tracking-widest mb-12 opacity-90">
                        Our sourcing experts can find any piece for you.
                    </p>
                    <Link
                        to="/inquiry"
                        className="inline-block bg-white text-primary font-black px-16 py-5 text-lg uppercase tracking-widest hover:bg-black hover:text-white transition-all"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>

            {/* Testimonials Section: "This is what people say about us" */}
            <section className="py-32 px-6 bg-white border-b border-gray-100">
                <div className="container-custom">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-black">
                            This is what people say about us
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                name: "JAMES W.",
                                text: "The variety and quality of the bulk offers are unmatched. Every item was authenticated and in perfect condition.",
                                rating: 5
                            },
                            {
                                name: "SARAH L.",
                                text: "Sneakvestment has become my primary source for inventory. Their customer service is exceptional and sourcing speed is incredible.",
                                rating: 5
                            },
                            {
                                name: "MICHAEL R.",
                                text: "Fast shipping and 100% authentic. The rare pieces they found for my collection were exactly what I was looking for.",
                                rating: 5
                            }
                        ].map((testimonial, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center group">
                                <div className="flex gap-1 mb-6">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 fill-primary" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-lg text-gray-800 font-medium italic mb-6 leading-relaxed">
                                    "{testimonial.text}"
                                </p>
                                <span className="text-sm font-black text-black tracking-widest uppercase border-t border-gray-100 pt-4 w-20">
                                    {testimonial.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ticker Tape */}
            <div className="bg-black text-white py-6 overflow-hidden whitespace-nowrap border-y border-gray-900">
                <div className="inline-block animate-marquee">
                    <span className="mx-12 font-black text-2xl tracking-tighter uppercase italic">GLOBAL SHIPPING AVAILABLE</span>
                    <span className="mx-12 font-black text-2xl tracking-tighter uppercase italic text-primary">★</span>
                    <span className="mx-12 font-black text-2xl tracking-tighter uppercase italic">100% AUTHENTIC GUARANTEED</span>
                    <span className="mx-12 font-black text-2xl tracking-tighter uppercase italic text-primary">★</span>
                    <span className="mx-12 font-black text-2xl tracking-tighter uppercase italic">WHOLESALE PRICING FOR RETAILERS</span>
                    <span className="mx-12 font-black text-2xl tracking-tighter uppercase italic text-primary">★</span>
                    {/* Repeat for seamless loop */}
                    <span className="mx-12 font-black text-2xl tracking-tighter uppercase italic">GLOBAL SHIPPING AVAILABLE</span>
                    <span className="mx-12 font-black text-2xl tracking-tighter uppercase italic text-primary">★</span>
                    <span className="mx-12 font-black text-2xl tracking-tighter uppercase italic text-primary">★</span>
                </div>
            </div>

            {/* Newsletter Section - Refined */}
            <section className="py-28 px-6 bg-white text-black text-center">
                <div className="max-w-3xl mx-auto">
                    <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">Join The Inner Circle</h3>
                    <p className="text-gray-500 mb-12 uppercase text-sm font-bold tracking-widest">
                        Early access to catalogs and market analysis.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
                        <input
                            type="email"
                            placeholder="EMAIL ADDRESS"
                            className="flex-1 bg-gray-50 border-2 border-gray-100 px-6 py-4 text-black focus:outline-none focus:border-black font-bold placeholder-gray-400"
                        />
                        <button className="bg-black text-white font-black uppercase tracking-widest px-10 py-4 hover:bg-primary transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
