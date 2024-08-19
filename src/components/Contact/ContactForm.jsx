import React from 'react'
import Button from '../Reusable/Button'

const ContactForm = () => {
  return (
    <form className='w-full'>
        <div className='mb-2 lg:mb-4 text-base lg:text-xl'>
          <label htmlFor='fullName' className='font-medium block mb-2 lg:mb-4'>Full Name</label>
          <input
            type='text'
            id='fullName'
            placeholder='Enter your name'
            className='font-normal w-full xl:w-[600px] border outline-purple shadow-sm bg-white text-purple py-[6px] lg:py-[11px] px-[8px] lg:px-[11px]'
            autoComplete='off'
          />
        </div>
        <div className='flex justify-between gap-3 xl:gap-0 '>
        <div className='mb-2 lg:mb-4 text-base lg:text-xl'>
          <label htmlFor='email' className='font-medium block mb-2 lg:mb-4'>Email</label>
          <input
            type='email'
            id='email'
            placeholder='example@gmail.com'
            className='font-normal border outline-purple shadow-sm bg-white text-purple py-[6px] lg:py-[11px] px-[8px] lg:px-[11px] w-full xl:w-[292px]'
            autoComplete='off'
          />
        </div>
        <div className='mb-2 lg:mb-4 text-base lg:text-xl'>
          <label htmlFor='number' className='font-medium block mb-2 lg:mb-4'>Phone Number</label>
          <input
            type='tel'
            id='number'
            placeholder='phone number'
            className='font-normal border outline-purple shadow-sm bg-white text-purple py-[6px] lg:py-[11px] px-[8px] lg:px-[11px] w-full xl:w-[292px]'
            autoComplete='off'
          />
        </div>

        </div>
        <div className='mb-2 lg:mb-4 text-base lg:text-xl'>
          <label htmlFor='message' className='font-medium block mb-2 lg:mb-4'>Your message</label>
          <textarea
            type='text'
            id='message'
            placeholder='Type something...'
            className='font-normal w-full border  outline-purple shadow-sm bg-white text-purple py-[6px] lg:py-[11px] px-[8px] lg:px-[11px] h-20 xl:h-40'
            autoComplete='off'
          />
        </div>
        
        <div className="mt-5">
       <Button>SEND MESSAGE</Button>
       
        </div>
        
      </form>
  )
}

export default ContactForm