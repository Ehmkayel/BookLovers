import React from 'react'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <main className='pt-[4rem] md:pt-[4rem]' id="contact">
        <section className='bg-lightPurple container flex flex-col items-center max-w-[1440px] w-full lg:flex-row px-4 lg:px-[5rem] mx-auto pt-[4rem] md:pt-[4rem] lg:gap-10'>
            <figcaption>
                <ContactForm/>
            </figcaption>
            <figure>
                <img src="https://res.cloudinary.com/drphumgcb/image/upload/v1723853147/pexels-olly-789822_fledmu.jpg" alt="contact image" className="mb-6"/>
            </figure>
           
            
        </section>
    </main>
  )
}

export default Contact