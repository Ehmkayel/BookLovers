import React from 'react'
import { FaCartArrowDown } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Order = ({ariaLabel, order, ...props}) => {
    const navigate = useNavigate()
    const handleClick = () =>{
        navigate(link)
    }
  return (
    <button 
    onClick={handleClick}
    className={`group flex items-center bg-gradient-to-r from-lightPurple to-purple px-5 py-1 text-lightPurple rounded-full transition-all duration-200 gap-4 mr-5`}
    aria-label={ariaLabel}><span className="hidden group-hover:block transition-all duration-200" aria-label="add to wishlist" {...props}>{order}</span><FaCartArrowDown/></button>
  )
}

export default Order