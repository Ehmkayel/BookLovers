import React from 'react';
import specialOffers from './DealsData';

const Deals = () => {
  return (
    <main className="container max-w-[1440px] mx-auto px-4">
      <section className="mt-10 lg:mt-[6rem]">
        <h2 className="heading text-3xl md:text-5xl text-center mb-10">Special Deals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialOffers.map((offers, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <figure>
                <img
                  src={offers.image}
                  alt={offers.title}
                  className="w-full object-cover h-[300px]"
                />
                <div className="p-4">
                  <p className="text-lg font-bold">Rating: {offers.rating}⭐</p>
                  <p className="text-lg text-purple font-semibold">Price: ${offers.originalPrice}</p>
                  <p className="text-lg text-purple font-semibold">Discounted Price: ${offers.discountedPrice}</p>
                </div>
              </figure>
              <figcaption className="p-4">
                <h3 className="text-xl font-semibold">{offers.title}</h3>
                <h4 className="text-md font-medium text-purple">Author: {offers.author}</h4>
                <p className="text-sm text-gray-600 mt-2">{offers.details}</p>
                
              </figcaption>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Deals;
