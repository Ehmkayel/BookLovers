import React from 'react'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <main className='pt-[4rem] md:pt-[4rem]' id="contact">
        <section className='bg-lightPurple container flex flex-col-reverse items-center max-w-[1440px] w-full lg:flex-row px-4 lg:px-[5rem] mx-auto pt-[4rem] md:pt-[4rem] lg:gap-10 py-5'>
            <figcaption>
                <ContactForm/>
            </figcaption>
            <figure className='lg:w-[50%]'>
                <img src="https://res.cloudinary.com/drphumgcb/image/upload/v1723853147/pexels-olly-789822_fledmu.jpg" alt="contact image" className="border-gray-300  transform transition duration-500
                hover:scale-105 w-full lg:h-[500px] object-cover"/>
            </figure>
           
            
        </section>
    </main>
  )
}

export default Contact