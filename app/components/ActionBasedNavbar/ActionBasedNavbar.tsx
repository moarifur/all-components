'use client'

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { Menu, X } from 'lucide-react';
import { navLinks } from "@/app/components/ActionBasedNavbar/data";
import MobileMenu from "@/app/components/ActionBasedNavbar/components/MobileMenu";
import IconSection from "@/app/components/ActionBasedNavbar/components/IconSection";

{/*========================= Editorial Navbar ==================================
Content style: Very few items, action-focused
Best for:
    News portals
    Blogs
    Media sites
==============================================================================*/}

const ActionBasedNavbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-white shadow-lg'
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo Section */}
                    <div className="flex-shrink-0">
                        <Link href="#" className={`text-2xl font-bold transition-colors ${
                            isScrolled ? 'text-gray-900' : 'text-white'
                        }`}>
                            Logo
                        </Link>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`transition-colors hover:opacity-80 ${
                                    isScrolled ? 'text-gray-700' : 'text-white'
                                }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Right Section - Icons */}
                    <IconSection
                        isScrolled={isScrolled}
                    />


                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`p-2 rounded-md ${
                                isScrolled ? 'text-gray-700' : 'text-white'
                            }`}
                        >
                            {isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <MobileMenu
                    isScrolled={isScrolled}
                    setIsMobileMenuOpen={setIsMobileMenuOpen}
                    navLinks={navLinks}
                />
            )}
        </nav>
    );
}

export default ActionBasedNavbar