import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = ({link, className, children, ...props}) => {
    const navigate = useNavigate()
    const handleClick = () =>{
        navigate(link)
    }
  return (
    <button
        onClick={handleClick}
        className={`bg-purple text-white border border-purple hover:bg-white hover:text-pink px-4 py-2 flex justify-center items-center  & ${className}`}
        {...props}>{children}</button>
  )
}

export default Button


