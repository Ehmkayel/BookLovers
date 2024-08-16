import React from 'react'
import Button from '../Reusable/Button'

const Hero = () => {
  return (
    <main className='pt-[4rem] md:pt-[8rem]'>
        <section className='container flex flex-col items-center justify-between max-w-[1440px] w-full  md:flex-row px-4 lg:px-[5rem] mx-auto'>
            <figcaption className='flex flex-col space-y-3 md:space-y-6 text-center md:text-left mb-8  w-full md:w-[60%] xl:w-[50%]'>
                <h2 className='heading text-2xl lg:text-4xl xl:text-6xl leading-[30px] lg:leading-[78px] font-normal'>Reading a book can change your life so <span className='text-purple font-bold'>Start Reading!</span></h2>
                <p className='text-base lg:text-lg max-w-[505px]'>Discover captivating stories and insightful knowledge. Your next great read is just a click away. Explore our vast collection and immerse yourself in the world of books.</p>
                <div className='flex flex-row'>
                <Button>Buy Now</Button>
                
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


        