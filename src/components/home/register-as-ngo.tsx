"use client"
import { ArrowRight, Building2, HandHeart, Users } from 'lucide-react'
import React from 'react'

export default function RegisterAsNGO() {
    const [hoveredCard, setHoveredCard] = React.useState<number | null>(null);
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
            {/* Background accents */}
            <div className="absolute top-20 left-10 w-72 h-72 rounded-full" style={{ background: '#acb742', filter: 'blur(120px)', opacity: '0.15' }} />
            <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full" style={{ background: '#e46955', filter: 'blur(120px)', opacity: '0.15' }} />

            <div className="text-center mb-16 relative">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4">
                    Register as an{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#acb742] to-[#e46955]">
                        NGO Partner
                    </span>
                </h1>
                <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300">
                    Join Clothaid's network of trusted NGOs and connect with donors ready to make a difference. Together, we can ensure every piece of clothing finds its purpose.
                </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {[
                    {
                        icon: HandHeart,
                        title: "Direct Donations",
                        description: "Connect with local donors and receive quality clothing and blankets directly through our platform."
                    },
                    {
                        icon: Users,
                        title: "Verified Network",
                        description: "Join our network of verified NGOs and build trust with donors through our verification system."
                    },
                    {
                        icon: Building2,
                        title: "Impact Tracking",
                        description: "Track and showcase your impact with detailed analytics and donor engagement metrics."
                    }
                ].map((benefit, index) => (
                    <div
                        key={index}
                        className={`glass-effect p-8 rounded-2xl transition-all duration-300 ${hoveredCard === index ? 'transform -translate-y-2' : ''
                            }`}
                        onMouseEnter={() => setHoveredCard(index)}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        <div className={`h-12 w-12 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${hoveredCard === index
                            ? 'bg-[#acb742] bg-opacity-20'
                            : 'bg-white/10'
                            }`}>
                            <benefit.icon className={`h-6 w-6 animate-pulse-slow ${hoveredCard === index
                                ? 'text-[#acb742]'
                                : 'text-white'
                                }`} />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                        <p className="text-gray-300">{benefit.description}</p>
                    </div>
                ))}
            </div>

            {/* CTA Section */}
            <div className="glass-effect rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#8e6643]/20 to-[#e46955]/20" />
                <div className="relative">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        Ready to Make a Difference?
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        Start receiving donations from caring individuals in your community. Our simple registration process gets you connected with donors quickly and efficiently.
                    </p>
                    <button className="group inline-flex items-center justify-center px-6 py-3 bg-[#acb742] hover:bg-[#acb742]/90 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(172,183,66,0.3)]">
                        Register Your NGO
                        <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
                    </button>
                </div>
            </div>
        </section>
    )
}
