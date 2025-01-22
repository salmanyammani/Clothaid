"use client";

import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Landing() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <section className="min-h-screen relative overflow-hidden pt-24 pb-20">
            {/* Gradient Orbs */}
            <div className="absolute top-40 left-20 w-96 h-96 rounded-full" style={{ background: '#acb742', filter: 'blur(150px)', opacity: '0.15' }} />
            <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full" style={{ background: '#e46955', filter: 'blur(150px)', opacity: '0.15' }} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                    {/* Text Content */}
                    <div className={`space-y-8 transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                            Give Your Clothes
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#acb742] to-[#e46955]">
                                A Second Life
                            </span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-xl">
                            Join our mission to reduce textile waste and help those in need. Every piece of clothing you donate makes a difference in someone's life.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="group inline-flex items-center justify-center px-8 py-4 bg-[#acb742] hover:bg-[#acb742]/90 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(172,183,66,0.3)]">
                                Donate Now
                                <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
                            </button>
                            <button className="group inline-flex items-center justify-center px-8 py-4 bg-transparent border border-[#e46955] hover:bg-[#e46955]/10 text-white rounded-lg font-medium transition-all duration-300">
                                Learn More
                                <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    </div>

                    {/* 3D Model */}
                    <div className={`lg:-ml-10 transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                        <iframe
                            src="https://my.spline.design/donatenow-13e9d08259b23730cfd0e7318eab4308/"
                            width="100%"
                            height="600px"
                            className=""
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            loading="lazy"
                            title="Donate Now 3D Model"
                            sandbox="allow-scripts allow-same-origin"
                        />
                    </div>
                </div>

                {/* Stats */}
                <div className={`mt-16 glass-effect rounded-2xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-white mb-2">50K+</div>
                        <p className="text-gray-400">Donations Made</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-white mb-2">100+</div>
                        <p className="text-gray-400">NGO Partners</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-white mb-2">25K+</div>
                        <p className="text-gray-400">Lives Impacted</p>
                    </div>
                </div>
            </div>
        </section>
    );
}