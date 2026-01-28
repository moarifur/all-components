import Link from 'next/link'

const MobileMenu: React.FC<Props> = ({ mobileMenuOpen, scrolled, navLinks, setMobileMenuOpen }) => {
    return (
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
            mobileMenuOpen ? 'max-h-96' : 'max-h-0'
        } ${scrolled ? 'bg-white' : 'bg-gray-900 bg-opacity-95'}`}>
            <div className="px-4 py-4 space-y-3">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block py-2 transition-colors duration-300 ${
                            scrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-gray-300'
                        }`}
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
    mobileMenuOpen: boolean;
    scrolled: boolean;
    navLinks: NavLink[];
    setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
//----------------------------------------------------------------------------

export default MobileMenu