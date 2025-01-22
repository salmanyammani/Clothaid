'use client';

import { useState, useEffect } from 'react';
import { ArrowRight} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 w-full z-50 px-4 sm:px-6 lg:px-8 mt-2 transition-all duration-300',
                // isScrolled
                //     ? 'bg-background/30 backdrop-blur-xl border-b border-white/10 shadow-lg'
                //     : 'bg-transparent'
            )}
        >
            <div className={cn("container mx-auto px-4", isScrolled
                ? 'bg-background/30 backdrop-blur-xl border-b border-white/10 shadow-lg rounded-[18px] transition-all duration-300 mt-4'
                : 'bg-transparent')}>
                <div className="flex h-16 items-center justify-between">
                    <Link href="/">
                        <Image src={"/logos/main-logo.png"} alt="logo" width={240} height={240} className='object-cover lg:-ml-6'/>
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        {['Home', 'How It Works', 'NGOs'].map((item) => (
                            <Link
                                key={item}
                                href={`/${item.toLowerCase().replace(' ', '-')}`}
                                className="text-gray-300 hover:text-white transition-colors relative group"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#acb742] transition-all group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center space-x-4">
                        <Link href={"/sign-in"} className="group inline-flex items-center px-6 py-2 text-white transition-all duration-300 rounded-full bg-transparent border border-[#e46955] hover:bg-[#e46955]/10">
                            Login
                            <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link href={"/sign-up"} className="gradient-spotlight px-6 py-2 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-[#acb742]/20">
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
// "use client"

// import React, { useState } from "react"
// import Link from "next/link"
// import { usePathname } from "next/navigation"
// import { Car, Menu, X, User, Bell, ChevronDown } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { UserButton } from "@clerk/nextjs"
// import Image from "next/image"

// const navItems = [
//     { name: "Ride", href: "/ride" },
//     { name: "Package", href: "/package" },
//     { name: "About", href: "/about" },
// ]

// export function Navbar() {
//     const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
//     const pathname = usePathname()

//     return (
//         <nav className="bg-white shadow-md">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
//                 <div className="flex justify-between h-16">
//                     <div className="flex">
//                        <Link href={"/"} className="flex items-center">
//                             <Image height={400} width={200} src="/logos/app-logo.png" alt="logo" className="object-cover lg:-ml-10"/>
//                        </Link>
//                         <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
//                             {navItems.map((item) => (
//                                 <Link
//                                     key={item.name}
//                                     href={item.href}
//                                     className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-semibold ${pathname === item.href
//                                             ? "border-primary text-primary"
//                                             : "border-transparent text-zinc-400 hover:border-gray-300 hover:text-gray-700"
//                                         }`}
//                                 >
//                                     {item.name}
//                                 </Link>
//                             ))}
//                         </div>
//                     </div>
//                     <div className="hidden sm:ml-6 sm:flex sm:items-center gap-2">
//                         <Button variant="ghost" size="icon">
//                             <Bell className="h-5 w-5" />
//                         </Button>
//                         {/* <DropdownMenu>
//                             <DropdownMenuTrigger asChild>
//                                 <Button variant="ghost" className="ml-3 flex items-center">
//                                     <User className="h-5 w-5 mr-2" />
//                                     <span>John Doe</span>
//                                     <ChevronDown className="h-4 w-4 ml-2" />
//                                 </Button>
//                             </DropdownMenuTrigger>
//                             <DropdownMenuContent align="end">
//                                 <DropdownMenuItem>Profile</DropdownMenuItem>
//                                 <DropdownMenuItem>Settings</DropdownMenuItem>
//                                 <DropdownMenuItem>Sign out</DropdownMenuItem>
//                             </DropdownMenuContent>
//                         </DropdownMenu> */} <UserButton/>
//                     </div>
//                     <div className="-mr-2 flex items-center sm:hidden">
//                         <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//                             <span className="sr-only">Open main menu</span>
//                             {mobileMenuOpen ? (
//                                 <X className="block h-6 w-6" aria-hidden="true" />
//                             ) : (
//                                 <Menu className="block h-6 w-6" aria-hidden="true" />
//                             )}
//                         </Button>
//                     </div>
//                 </div>
//             </div>

//             {mobileMenuOpen && (
//                 <div className="sm:hidden">
//                     <div className="pt-2 pb-3 space-y-1">
//                         {navItems.map((item) => (
//                             <Link
//                                 key={item.name}
//                                 href={item.href}
//                                 className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${pathname === item.href
//                                         ? "bg-primary-50 border-primary text-primary"
//                                         : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
//                                     }`}
//                             >
//                                 {item.name}
//                             </Link>
//                         ))}
//                     </div>
//                     <div className="pt-4 pb-3 border-t border-gray-200">
//                         <div className="flex items-center px-4">
//                             <div className="flex-shrink-0">
//                                 <User className="h-10 w-10 rounded-full bg-gray-300 p-2" />
//                             </div>
//                             <div className="ml-3">
//                                 <div className="text-base font-medium text-gray-800">John Doe</div>
//                                 <div className="text-sm font-medium text-gray-500">john@example.com</div>
//                             </div>
//                             <Button variant="ghost" size="icon" className="ml-auto">
//                                 <Bell className="h-5 w-5" />
//                             </Button>
//                         </div>
//                         <div className="mt-3 space-y-1">
//                             <Button
//                                 variant="ghost"
//                                 className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 w-full text-left"
//                             >
//                                 Profile
//                             </Button>
//                             <Button
//                                 variant="ghost"
//                                 className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 w-full text-left"
//                             >
//                                 Settings
//                             </Button>
//                             <Button
//                                 variant="ghost"
//                                 className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 w-full text-left"
//                             >
//                                 Sign out
//                             </Button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </nav>
//     )
// }

