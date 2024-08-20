import React, { useState, useEffect } from "react";
import BookData from "./BookData";
import Button from "../Reusable/Button";
import Order from "../Reusable/Order";
import BookCategories from "./BookCategories";
import { getWishlist } from '../../Utilities/LocalStorage';

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [wishlist, setWishlist] = useState([]);

  
  useEffect(() => {
    setWishlist(getWishlist());
  }, []);

  const handleWishlistUpdate = () => {
    const updatedWishlist = getWishlist();
    setWishlist(updatedWishlist); 
  };

  // Filter books based on selected category or display all if "All" is selected
  const filteredBooks = selectedCategory === "All" ? BookData : BookData.filter(book => book.category === selectedCategory);

  return (
    <main className="container max-w-[1440px] mx-auto px-4" id="categories">
      <section className="mt-10 lg:mt-[8rem]">
        <h2 className="heading text-3xl md:text-5xl text-center mb-10">Books Categories</h2>
        <BookCategories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-10">
          {filteredBooks.map((book, index) => (
            <figure key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={book.image}
                alt={`Cover image of the book titled ${book.title}`}
                className="w-full object-cover h-[200px]"
                loading="lazy"
              />
              <figcaption className="p-2">
                <div className="p-4 flex justify-between items-center">
                  <p className="text-lg text-purple font-semibold">${book.price}</p>
                  <p className="text-lg font-bold">{book.rating}⭐</p>
                  <Order order="wishlist" book={book} onWishlistUpdate={handleWishlistUpdate} />
                </div>
                <h3 className="text-xl font-semibold">{book.title}</h3>
                <h4 className="text-md font-medium text-purple">Author: {book.author}</h4>
                <p className="text-sm text-gray-600 mt-2">{book.description}</p>
                <Button ariaLabel='Order item' link='/order' className='mt-3 rounded-full'>Order Now</Button>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Categories;