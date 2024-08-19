import { useState } from "react"
import { FaCartPlus } from "react-icons/fa"


const Header = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
    const toggleMobileNav= () =>{
        setIsMobileNavOpen(!isMobileNavOpen)
    }

  return (
    <main className='flex justify-between items-center border bg-white fixed top-0 left-0 z-50 p-4 px-4 lg:px-[5rem] shadow w-full'>
      <div className="container flex items-center justify-between max-w-[1440px] w-full mx-auto">
            {/* logo */}
        <div className='logo'>
            <a href="/"><h2 className="text-xl lg:text-2xl">Book<span className="text-purple font-bold">Lovers</span></h2></a>
            
        </div>
        {/* Wishlist */}
       
        {/* desktop navigation */}
        <nav className='menu-links hidden lg:flex space-x-8 items-center text-[14px] font-medium'>
            <a href="/" className="block hover:text-purple">Home</a>
            <a href="#trending" className="block hover:text-purple">Trending</a>
            <a href="#deals" className="block hover:text-purple">Deals</a>
            <a href="#categories" className="block hover:text-purple">Categories</a>
            <a href="#wishlist" className="block hover:text-purple">Wishlist</a>
            <a href="#contact" className="block hover:text-purple">Contact</a> 
            <button className="group flex items-center bg-gradient-to-r from-lightPurple to-purple px-5 py-1 text-lightPurple rounded-full transition-all duration-200 gap-4 "><span>Order</span><FaCartPlus/></button>
      
          
        </nav>
        {/* Mobile navigation button */}
        <div className="flex items-center lg:hidden ">
        <button className="group flex items-center bg-gradient-to-r from-lightPurple to-purple px-5 py-1 text-lightPurple rounded-full transition-all duration-200 gap-4 mr-5 "><span className="hidden group-hover:block transition-all duration-200">Order</span><FaCartPlus/></button>
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
                {/* mobile close icon */}
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
                <a href="/" className="block">Home</a>
                <a href="#trending" className="block">Trending</a>
                <a href="#deals" className="block">Deals</a>
                <a href="#categories" className="block">Categories</a>
                <a href="#wishlist" className="block">Wishlist</a>
                <a href="#contact" className="block">Contact</a>
                
            </div>
        </div>
        
        </div>
    </main>
  )
}

export default Header







 

 
