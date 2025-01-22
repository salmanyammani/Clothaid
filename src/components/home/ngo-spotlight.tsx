import React from 'react'
import { Card } from '../ui/card'

export default function NGO_Spotlight() {
    return (
        <section className="py-20 relative">
            {/* Background accents */}
            <div className="absolute top-28 left-1/2 w-72 h-72 rounded-full" style={{ background: '#acb742', filter: 'blur(120px)', opacity: '0.15' }} />
            {/* <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full" style={{ background: '#e46955', filter: 'blur(120px)', opacity: '0.15' }} /> */}
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-white mb-16">NGO Spotlight</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            name: 'Edhi Foundation',
                            description: 'Providing clothing to underprivileged communities since 2010',
                            image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80'
                        },
                        {
                            name: 'Saylani Welfare Trust',
                            description: 'Supporting homeless shelters with essential supplies',
                            image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80'
                        },
                        {
                            name: 'JDC Foundation',
                            description: 'Empowering rural communities through clothing donations',
                            image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80'
                        }
                    ].map((ngo, index) => (
                        <Card
                            key={index}
                            className="glass-effect p-8 rounded-2xl transition-all duration-100 hover:shadow-xl hover:shadow-black/20 hover:transform hover:-translate-y-2"
                        >
                            <div
                                className="h-48 bg-cover bg-center"
                                style={{ backgroundImage: `url(${ngo.image})` }}
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-2">{ngo.name}</h3>
                                <p className="text-gray-400">{ngo.description}</p>
                                <button className="bg-[#acb742] py-2 mt-6 w-full">
                                    Learn More
                                </button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
