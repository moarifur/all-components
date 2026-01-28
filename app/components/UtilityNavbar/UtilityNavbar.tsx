"use client";

import { useState, useEffect } from 'react';
import Link from "next/link";
import { navLinks } from "@/app/components/UtilityNavbar/data";
import {Menu, X} from "lucide-react";
import MobileMenu from "@/app/components/UtilityNavbar/components/MobileMenu";

{/*========================= Minimal / Utility Navbar =========================
Content style: Very few items, action-focused
Best for:
    SaaS products
    Landing pages
    Startups
==============================================================================*/}

const UtilityNavbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className={`text-2xl font-bold transition-colors duration-300 ${
                        scrolled ? 'text-gray-900' : 'text-white'
                    }`}>
                        Logo
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`transition-colors duration-300 hover:opacity-75 ${
                                    scrolled ? 'text-gray-700' : 'text-white'
                                }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
                            scrolled ? 'text-gray-900' : 'text-white'
                        }`}
                    >
                        {mobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                    </button>
                </div>
            </div>

                {/* Mobile Menu */}
                <MobileMenu
                    mobileMenuOpen={mobileMenuOpen}
                    scrolled={scrolled}
                    navLinks={navLinks}
                    setMobileMenuOpen={setMobileMenuOpen}
                />
        </nav>
);
}

export default UtilityNavbar

