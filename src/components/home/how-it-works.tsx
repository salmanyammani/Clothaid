import { Award, Package, Users } from 'lucide-react'
import React from 'react'
import { Card } from '../ui/card'

export default function HowItWorks() {
    return (
        <section className="py-20 ">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-white mb-16">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: 'Sign Up',
                            description: 'Create your account in minutes and join our community of donors',
                            icon: Users,
                            color: '#acb742'
                        },
                        {
                            title: 'Donate',
                            description: 'Schedule a pickup or drop off your clothes and blankets',
                            icon: Package,
                            color: '#e46955'
                        },
                        {
                            title: 'Earn Rewards',
                            description: 'Get points and rewards for your generous donations',
                            icon: Award,
                            color: '#8e6643'
                        }
                    ].map((step, index) => (
                        <Card
                            key={index}
                            className="overflow-hidden glass-effect relative p-8 rounded-2xl transition-all duration-200 hover:shadow-xl hover:shadow-black/20 hover:transform hover:scale-105"
                        >
                             <div className="absolute top-3 left-12 w-32 h-32 rounded-full" style={{ background: step.color, filter: 'blur(120px)', opacity: '0.15' }} />
                            <div className="text-center">
                                <div
                                    className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center backdrop-blur-xl"
                                    style={{ backgroundColor: `${step.color}20` }}
                                >
                                    <step.icon className="h-8 w-8" style={{ color: step.color }} />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                                <p className="text-gray-400">{step.description}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
