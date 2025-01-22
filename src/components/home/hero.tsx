import React from 'react'
import { Button } from '../ui/button'
import { ArrowRight, Award, Heart, Package, Users } from 'lucide-react'

export default function Hero() {
    return (
        <div className="relative h-screen">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80")',
                }}
            >
                <div className="absolute inset-0 bg-[#1a1a1a]/60 backdrop-blur-sm"></div>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
                <div className="max-w-3xl">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                        Donate Warmth, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#acb742] to-[#e46955]">Spread Happiness</span>
                    </h1>
                    <p className="text-xl text-gray-300 mb-8">
                        Your old belongings, someone&lsquo;s new hope
                    </p>
                    <Button size="lg" className="btn-primary relative glass-effect overflow-hidden rounde-md">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#8e6643]/20 to-[#e46955]/20" />
                        Get Started <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </div>
            </div>

            {/* Stats */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-xl border-t border-white/10">
                <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { number: '1000+', label: 'Donations Made', icon: Heart },
                            { number: '500+', label: 'NGOs Partnered', icon: Users },
                            { number: '2000+', label: 'Items Donated', icon: Package },
                            { number: '750+', label: 'Happy Donors', icon: Award },
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="text-center"
                            >
                                <stat.icon className="h-8 w-8 mx-auto mb-2 text-[#acb742]" />
                                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                                <div className="text-gray-400">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
