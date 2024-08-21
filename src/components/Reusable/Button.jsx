import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = ({link, className, ariaLabel, children, ...props}) => {
    const navigate = useNavigate()
    const handleClick = () =>{
        navigate(link)
    }
  return (
    <button
        onClick={handleClick}
        className={`bg-purple text-white border border-purple hover:bg-white hover:text-purple px-4 py-1 flex justify-center items-center  & ${className} `}
        aria-label={ariaLabel}
        {...props}>{children}</button>
  )
}

export default Button


