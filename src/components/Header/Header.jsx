import { useState } from "react"


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
            <h2 className="cursor-pointer text-xl lg:text-2xl">Book<span className="text-purple font-bold">Lovers</span></h2>
        </div>
        {/* desktop navigation */}
        <nav className='menu-links hidden lg:flex space-x-8 items-center text-[14px] font-medium'>
            <a href="/services" className="block">Home</a>
            <a href="/services" className="block">About Us</a>
            <a href="/services" className="block">Books</a>
            <a href="/services" className="block">Trending</a>
            <a href="/services" className="block">Categories</a>
            <a href="/services" className="block">Contact</a>
            
          
        </nav>
        {/* Mobile navigation button */}
        <div className="flex items-center lg:hidden ">
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
                <a href="/services" className="block">Home</a>
                <a href="/services" className="block">About Us</a>
                <a href="/services" className="block">Shop</a>
                <a href="/services" className="block">Contact</a>
                
            </div>
        </div>
        
        </div>
    </main>
  )
}

export default Header







 

 
