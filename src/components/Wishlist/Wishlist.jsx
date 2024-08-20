import React from 'react';
import { useWishlist } from '../../Utilities/WishListContext';
import Button from '../Reusable/Button';

const Wishlist = () => {
  const { wishlist, handleRemoveFromWishlist } = useWishlist();

  return (
    <main className="container max-w-[1440px] mx-auto px-4" id="wishlist">
      <section id="wishlist" className="wishlist-section mt-10 lg:mt-[8rem]">
        <h2 className="heading text-3xl md:text-5xl text-center mb-10">
          Your Wishlist
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
          {wishlist.length === 0 ? (
            <li className="mx-auto text-lightPurple font-bold text-center bg-purple py-2 px-4 max-w-[200px]">
              Your wishlist is empty.
            </li>
          ) : (
            wishlist.map((item) => (
              <li key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <figure className="w-full">
                  {/* Consider adding a placeholder image here */}
                  <img
                    src={item.image}
                    alt={`Cover image of the book titled ${item.title}`}
                    className="w-full object-cover h-[200px]"
                    loading="lazy"
                  />
                  <figcaption className="p-2">
                    <div className="p-4 flex justify-between items-center">
                      <p className="text-lg text-purple font-semibold">${item.price}</p>
                      <p className="text-lg font-bold">{item.rating}⭐</p>
                    </div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <h4 className="text-md font-medium text-purple">Author: {item.author}</h4>
                    <p className="text-sm text-gray-600 mt-2">{item.description}</p>
                    <div className="flex justify-between items-center mt-3">
                      <Button ariaLabel="Order item" link="/order" className="rounded-full">
                        Order Now
                      </Button>
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded"
                        onClick={() => handleRemoveFromWishlist(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </figcaption>
                </figure>
              </li>
            ))
          )}
        </ul>
      </section>
    </main>
  );
};

export default Wishlist;
