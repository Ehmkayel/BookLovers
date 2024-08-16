import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <main className='mt-[3rem] lg:mt-[8rem] relative border pb-[2rem] flex  p-4 px-4 lg:px-[5rem] shadow w-full'>
        <section className='flex flex-col container justify-between max-w-[1440px] w-full mx-auto'>
            <div className=' md:flex md:justify-between md:space-x-[1rem] lg:space-x-[4rem] md:py-[2.5rem] top-[1rem] text-gray-900'>
                 {/* first row */}
                 <section className='logo md:w-[30%]'>
                 <div className='logo'>
                    <h2 className="cursor-pointer text-2xl">Book<span className="text-purple font-bold">Lovers</span></h2>
                </div>

                </section>
                {/* second row */}
                <section className="">
                    <p className=" mt-2 text-[16px] heading ">ADDRESS</p>
                    <p className="mt-2 text-base lg:text-xl">Journalist Estate, Lagos</p>
                </section>
                {/* third row */}
                <section className=''>
                    <p className=" mt-2 text-[16px] header">CONTACT</p>
                    <ul className="mt-2 space-y-1 text-base lg:text-xl">
                        <li>Book services</li>
                        <li>Shop</li> 
                        <li>Featured</li>    
                    </ul>
                </section>
                {/* fourth row */}
                <section>
                <p className=" mt-2 text-[16px] header">SOCIALS</p>
                 <ul className="mt-2 flex space-x-3 pt-1">
                    <li className="flex justify-center items-center py-3 w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] shadow-md border rounded-full border-neutral">
                        <FaInstagram /> 
                    </li>
                    <li className="flex justify-center items-center py-3 w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] shadow-md border rounded-full border-neutral">
                        <FaFacebook/> 
                    </li>
                    <li className="flex justify-center items-center py-3 w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] shadow-md border rounded-full border-neutral">
                        <FaTwitter /> 
                    </li>
                    <li className="flex justify-center items-center py-3 w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] shadow-md border rounded-full border-neutral">
                        <FaWhatsapp /> 
                    </li>
                 </ul>
                </section>
                
            </div>
            {/* footer bottom */}
            <div>
            <hr className='pb-5'/>
                <span className='text-base lg:text-lg'>&copy; Ramadan 2024.All Rights Reserved</span>
            </div>  

        </section>
    </main>
  )
}

export default Footer