import React from 'react'
import Button from '../Reusable/Button'
import { FaSearch } from 'react-icons/fa'

const Hero = () => {
  return (
    <main className='pt-[4rem] md:pt-[8rem]'>
        <section className='container flex flex-col items-center justify-between max-w-[1440px] w-full  md:flex-row px-4 lg:px-[5rem] mx-auto'>
            <figcaption className='flex flex-col space-y-3 md:space-y-6 text-center md:text-left mb-8  w-full md:w-[60%] xl:w-[50%]'>
                <h2 className='heading text-2xl lg:text-4xl xl:text-6xl leading-[30px] lg:leading-[78px] font-normal'>Reading a book can change your life so <span className='text-purple font-bold'>Start Reading!</span></h2>
                <p className='text-base lg:text-lg max-w-[505px]'>Discover captivating stories and insightful knowledge. Your next great read is just a click away. Explore our vast collection and immerse yourself in the world of books.</p>
                <div className='flex flex-col md:flex-row gap-5 items-center'>
                <Button>Buy Now</Button>
                <div className="group relative">
                    <input type="text" placeholder="search" className="w-[200px] group-hover:w-[300px] px-3 py-2 focus:outline-none border border-purple focus:border-2 focus:border-purple transition-all duration-300 "/>
                    <FaSearch className="text-violet-900 group-hover:text-purple absolute top-1/2 right-4 -translate-y-1/2"/>
                </div>
                
                </div>
              
                
                

            </figcaption>
            <figure className='hidden xl:block overflow-hidden '>
                <img 
                src="https://res.cloudinary.com/drphumgcb/image/upload/v1723848865/pexels-fotios-photos-1516983_juhzru.jpg" alt="hero-image"
                className='w-full h-[500px] object-cover border-gray-300  transform transition duration-500
                hover:scale-105'/>

            </figure>
            <figure className="overflow-hidden xl:hidden block w-full md:w-[50%] mt-8 md:mt-0">
                <img
                 src="https://res.cloudinary.com/drphumgcb/image/upload/v1723848865/pexels-fotios-photos-1516983_juhzru.jpg"
                 className="w-full md:h-[450px] border-gray-300 transform transition duration-500 hover:scale-105"
                 alt="Hero image"
          />
        </figure>
        </section>
    </main>
  )
}

export default Hero


        