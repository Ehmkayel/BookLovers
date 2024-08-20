import React from 'react'

const Confirmation = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-lg text-center">
        <h1 className="text-2xl font-bold text-green-500 mb-4">Order Confirmed!</h1>
        <p className="text-gray-700 mb-3">
          Thank you for your purchase. Your order has been successfully placed.
        </p>
        <p className="text-gray-700 mb-6">
          A confirmation email has been sent to your provided email address.
        </p>
        <a
          href="/"
          className="inline-block bg-purple text-white font-bold py-2 px-4 rounded-md hover:bg-white hover:text-purple transition duration-300 ease-in-out"
        >
          Return to Home
        </a>
      </div>
    </div>
  )
}

export default Confirmation