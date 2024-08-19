import React, { useRef } from 'react';
import TrendingBooks from './TrendingData';
import { motion, useInView } from 'framer-motion';

const Trending = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false });

  return (
    <main className="container max-w-[1440px] mx-auto px-4" id="trending">
      <section className="mt-10 lg:mt-[6rem]">
        <div ref={ref}>
          <h2 className="heading text-3xl md:text-5xl text-center mb-10">Trending Books</h2>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {TrendingBooks.map((book, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <figure>
                    <img
                      src={book.image}
                      alt={`Cover image of the book titled ${book.title}`}
                      className="w-full object-cover h-[300px]"
                      loading="lazy" 
                    />
                    <div className="p-4">
                      <p className="text-lg font-bold">Rating: {book.rating}⭐</p>
                      <p className="text-lg text-purple font-semibold">${book.price.toFixed(2)}</p>
                    </div>
                  </figure>
                  <figcaption className="p-4">
                    <h3 className="text-xl font-semibold">{book.title}</h3>
                    <h4 className="text-md font-medium text-purple">Author: {book.author}</h4>
                    <p className="text-sm text-gray-600 mt-2">{book.details}</p>
                    <div className="mt-3">
                      <h4 className="text-lg font-medium">Reviews:</h4>
                      {book.reviews.map((review, reviewIndex) => (
                        <blockquote key={reviewIndex} className="text-sm text-gray-700 italic mt-2">
                          "{review.comment}" - <span className="font-bold">{review.user}</span>
                        </blockquote>
                      ))}
                    </div>
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

export default Trending;
