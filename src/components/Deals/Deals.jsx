import React, { useRef } from 'react';
import specialOffers from './DealsData';
import { motion, useInView } from 'framer-motion';

const Deals = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false });

  return (
    <main className="container max-w-[1440px] mx-auto px-4" id="deals">
      <section className="mt-10 lg:mt-[6rem]">
        <div ref={ref}>
          {/* Section Heading */}
          <h2 className="heading text-3xl md:text-5xl text-center mb-10">Special Deals</h2>
          
          {/* Grid Container with Motion Animation */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 100 }, 
              visible: {
                opacity: 1, 
                y: 0,             
                transition: {
                  staggerChildren: 0.2,       
                  duration: window.innerWidth < 768 ? 1 : 1.5, 
                  ease: 'easeInOut',           
                },
              },
            }}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {specialOffers.map((offer, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 50 }, 
                    visible: { opacity: 1, y: 0 },  
                  }}
                  transition={{ duration: 0.6, ease: 'easeOut' }} 
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  {/* Offer Content */}
                  <figure>
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="w-full object-cover h-[300px]"
                      loading="lazy" 
                    />
                    <div className="p-4">
                      <p className="text-lg font-bold">Rating: {offer.rating}⭐</p>
                      <p className="text-lg text-purple font-semibold">Price: ${offer.originalPrice}</p>
                      <p className="text-lg text-purple font-semibold">Discounted Price: ${offer.discountedPrice}</p>
                    </div>
                  </figure>
                  <figcaption className="p-4">
                    <h3 className="text-xl font-semibold">{offer.title}</h3>
                    <h4 className="text-md font-medium text-purple">Author: {offer.author}</h4>
                    <p className="text-sm text-gray-600 mt-2">{offer.details}</p>
                  </figcaption>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Deals;
