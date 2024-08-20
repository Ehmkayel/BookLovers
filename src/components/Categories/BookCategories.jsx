import React from 'react';
import Button from '../Reusable/Button';

const categories = [
  "All", 
  "Teen",
  "Non-fiction",
  "Health and Wellness",
  "Fiction",
  "Children Books",
  "Classics",
  "Mystery & Thriller",
  "Business & Economics",
 
];

const BookCategories = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <section className=" flex justify-center mb-8 gap-5 flex-wrap">
      {categories.map(category => (
        <Button
          key={category}
          className={`rounded-full ${selectedCategory === category ? 'bg-purple text-white' : ''}`}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </Button>
      ))}
    </section>
  );
};

export default BookCategories;
