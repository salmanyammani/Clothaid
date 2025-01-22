import { ArrowRight, Clock, Heart, Leaf } from 'lucide-react'
import React from 'react'

export default function OurMission() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Our Mission for{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#acb742] to-[#e46955]">
                        Global Impact
                    </span>
                </h2>
                <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                    At Clothaid, we&lsquo;re committed to creating a sustainable future while helping those in need. Every piece of clothing donated contributes to environmental preservation and social progress.
                </p>
            </div>

            {/* Impact Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {[
                    {
                        icon: Leaf,
                        number: "1.5M",
                        label: "kg of textiles",
                        sublabel: "collected and reused"
                    },
                    {
                        icon: Heart,
                        number: "$80K",
                        label: "raised to fund",
                        sublabel: "community led projects"
                    },
                    {
                        icon: Clock,
                        number: "10+",
                        label: "years collecting",
                        sublabel: "textiles for reuse"
                    }
                ].map((stat, index) => (
                    <div key={index} className="glass-effect p-8 rounded-2xl text-center group hover:transform hover:scale-105 transition-all duration-300">
                        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#acb742]/10 flex items-center justify-center group-hover:bg-[#acb742]/20 transition-colors duration-300">
                            <stat.icon className="h-8 w-8 text-[#acb742]" />
                        </div>
                        <h3 className="text-4xl font-bold text-white mb-2">{stat.number}</h3>
                        <p className="text-gray-300">{stat.label}</p>
                        <p className="text-gray-400 text-sm">{stat.sublabel}</p>
                    </div>
                ))}
            </div>

            <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-8">
                    Your used clothing donations add up and help
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#acb742] to-[#e46955]">
                        drive significant positive change.
                    </span>
                </h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="group inline-flex items-center justify-center px-8 py-4 bg-[#acb742] hover:bg-[#acb742]/90 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(172,183,66,0.3)]">
                        Donate Now
                        <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
                    </button>
                    <button className="group inline-flex items-center justify-center px-8 py-4 bg-transparent border border-[#e46955] hover:bg-[#e46955]/10 text-white rounded-lg font-medium transition-all duration-300">
                        Partner With Us
                        <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
                    </button>
                </div>
            </div>
        </section>
    )
}
