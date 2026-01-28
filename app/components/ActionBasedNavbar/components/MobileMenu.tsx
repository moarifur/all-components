import Link from 'next/link'
import React from "react";

const MobileMenu: React.FC<Props> = ({ isScrolled, setIsMobileMenuOpen, navLinks }) => {
    return (
        <div className={`md:hidden ${isScrolled ? 'bg-white' : 'bg-gray-900'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={`block px-3 py-2 rounded-md text-base font-medium ${
                            isScrolled
                                ? 'text-gray-700 hover:bg-gray-100'
                                : 'text-white hover:bg-gray-800'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

//---------------------------- Define Types --------------------------------
type NavLink = {
    name: string;
    href: string;
};

interface Props {
    isScrolled: boolean;
    setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    navLinks: NavLink[];
}

//----------------------------------------------------------------------------

export default MobileMenu