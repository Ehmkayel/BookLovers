import React, { useState } from 'react';

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bookTitle: '',
    author: '',
    quantity: 1,
    delivery: 'standard',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

   
    const { name, email, phone, bookTitle, author, quantity } = formData;
    if (!name || !email || !phone || !bookTitle || !author || quantity < 1) {
      alert('Please fill in all fields correctly.');
      return;
    }

    // If validation passes, proceed with form submission
    window.location.href = "/confirmation"; 
  };

  return (
    <form className="max-w-lg mx-auto p-2 md:p-4 bg-white shadow-md rounded" onSubmit={handleSubmit}>
      <div className="mb-4 flex items-center">
        <label htmlFor="name" className="w-1/3 text-gray-700 text-sm font-bold">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-2/3 px-2 py-1 md:px-3 md:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple"
          required
        />
      </div>
      <div className="mb-4 flex items-center">
        <label htmlFor="email" className="w-1/3 text-gray-700 text-sm font-bold">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-2/3 px-2 py-1 md:px-3 md:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple"
          required
        />
      </div>
      <div className="mb-4 flex items-center">
        <label htmlFor="phone" className="w-1/3 text-gray-700 text-sm font-bold">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="w-2/3 px-2 py-1 md:px-3 md:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple"
          required
        />
      </div>
      {/* Book Details */}
      <div className="mb-4 flex items-center">
        <label htmlFor="bookTitle" className="w-1/3 text-gray-700 text-sm font-bold">Book Title:</label>
        <input
          type="text"
          id="bookTitle"
          name="bookTitle"
          value={formData.bookTitle}
          onChange={handleInputChange}
          className="w-2/3 px-2 py-1 md:px-3 md:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple"
          required
        />
      </div>
      <div className="mb-4 flex items-center">
        <label htmlFor="author" className="w-1/3 text-gray-700 text-sm font-bold">Author:</label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleInputChange}
          className="w-2/3 px-2 py-1 md:px-3 md:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple"
          required
        />
      </div>
      <div className="mb-4 flex items-center">
        <label htmlFor="quantity" className="w-1/3 text-gray-700 text-sm font-bold">Quantity:</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={formData.quantity}
          onChange={handleInputChange}
          className="w-2/3 px-2 py-1 md:px-3 md:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple"
          min="1"
          required
        />
      </div>
      <div className="mb-4 flex items-center">
        <label htmlFor="delivery" className="w-1/3 text-gray-700 text-sm font-bold">Delivery Method:</label>
        <select
          id="delivery"
          name="delivery"
          value={formData.delivery}
          onChange={handleInputChange}
          className="w-2/3 px-2 py-1 md:px-3 md:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple"
          required
        >
          <option value="standard">Standard Shipping</option>
          <option value="express">Express Shipping</option>
          <option value="pickup">Store Pickup</option>
        </select>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-purple text-white font-bold border px-2 py-1 md:px-3 md:py-2 rounded-md hover:bg-white hover:text-purple transition duration-300 ease-in-out cursor-pointer"
        >
          Submit Order
        </button>
      </div>
    </form>
  );
};

export default OrderForm;
