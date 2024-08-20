import { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Header = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    const toggleMobileNav = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };

    const handleLinkClick = (link) => {
        setActiveLink(link);
        setIsMobileNavOpen(false);
    };

    return (
        <main className='flex justify-between items-center border bg-white fixed top-0 left-0 z-50 p-4 px-4 lg:px-[5rem] shadow w-full'>
            <div className="container flex items-center justify-between max-w-[1440px] w-full mx-auto">
                {/* Logo */}
                <div className='logo'>
                    <a href="/"><h2 className="text-xl lg:text-2xl">Book<span className="text-purple font-bold">Lovers</span></h2></a>
                </div>
                {/* Desktop Navigation */}
                <nav className='menu-links hidden lg:flex space-x-8 items-center text-[14px] font-medium'>
                    <a
                        href="/"
                        className={`hover:text-purple ${activeLink === '/' ? 'text-purple font-bold' : ''}`}
                        onClick={() => handleLinkClick('/')}
                    >
                        Home
                    </a>
                    <a
                        href="#trending"
                        className={`hover:text-purple ${activeLink === '#trending' ? 'text-purple font-bold' : ''}`}
                        onClick={() => handleLinkClick('#trending')}
                    >
                        Trending
                    </a>
                    <a
                        href="#deals"
                        className={`hover:text-purple ${activeLink === '#deals' ? 'text-purple font-bold' : ''}`}
                        onClick={() => handleLinkClick('#deals')}
                    >
                        Deals
                    </a>
                    <a
                        href="#categories"
                        className={`hover:text-purple ${activeLink === '#categories' ? 'text-purple font-bold' : ''}`}
                        onClick={() => handleLinkClick('#categories')}
                    >
                        Categories
                    </a>
                    <a
                        href="#wishlist"
                        className={`hover:text-purple ${activeLink === '#wishlist' ? 'text-purple font-bold' : ''}`}
                        onClick={() => handleLinkClick('#wishlist')}
                    >
                        Wishlist
                    </a>
                    <a
                        href="#contact"
                        className={`hover:text-purple ${activeLink === '#contact' ? 'text-purple font-bold' : ''}`}
                        onClick={() => handleLinkClick('#contact')}
                    >
                        Contact
                    </a>
                    <button className="group flex items-center bg-gradient-to-r from-lightPurple to-purple px-5 py-1 text-lightPurple rounded-full transition-all duration-200 gap-4 focus:outline-none focus:ring-2 focus:ring-purple-400" aria-label="Order item">
                        <span>Order</span>
                        <FaCartPlus />
                    </button>
                </nav>
                {/* Mobile Navigation Button */}
                <div className="flex items-center lg:hidden">
                    <button className="group flex items-center bg-gradient-to-r from-lightPurple to-purple px-5 py-1 text-lightPurple rounded-full transition-all duration-200 gap-4 mr-5">
                        <span className="hidden group-hover:block transition-all duration-200" aria-label="Order item">Order</span>
                        <FaCartPlus />
                    </button>
                    <button
                        id="mobile-menu-button"
                        className="focus:outline-none"
                        onClick={toggleMobileNav}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="3"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
                {/* Mobile Navigation Menu */}
                <div id="mobile-nav" className={`lg:hidden mobile-nav-container ${isMobileNavOpen ? "open" : ""}`}>
                    <div className="mobile-nav-overlay"></div>
                    <div className="mobile-nav-menu">
                        {/* Mobile close icon */}
                        <button className="close-button" onClick={toggleMobileNav}>
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        {/* Mobile menu navigation */}
                        <a
                            href="/"
                            className={`block ${activeLink === '/' ? 'text-purple font-bold' : ''}`}
                            onClick={() => handleLinkClick('/')}
                        >
                            Home
                        </a>
                        <a
                            href="#trending"
                            className={`block ${activeLink === '#trending' ? 'text-purple font-bold' : ''}`}
                            onClick={() => handleLinkClick('#trending')}
                        >
                            Trending
                        </a>
                        <a
                            href="#deals"
                            className={`block ${activeLink === '#deals' ? 'text-purple font-bold' : ''}`}
                            onClick={() => handleLinkClick('#deals')}
                        >
                            Deals
                        </a>
                        <a
                            href="#categories"
                            className={`block ${activeLink === '#categories' ? 'text-purple font-bold' : ''}`}
                            onClick={() => handleLinkClick('#categories')}
                        >
                            Categories
                        </a>
                        <a
                            href="#wishlist"
                            className={`block ${activeLink === '#wishlist' ? 'text-purple font-bold' : ''}`}
                            onClick={() => handleLinkClick('#wishlist')}
                        >
                            Wishlist
                        </a>
                        <a
                            href="#contact"
                            className={`block ${activeLink === '#contact' ? 'text-purple font-bold' : ''}`}
                            onClick={() => handleLinkClick('#contact')}
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Header;
