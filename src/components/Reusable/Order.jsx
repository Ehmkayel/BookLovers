import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useWishlist } from '../../Utilities/WishListContext';
import { FaCartArrowDown } from 'react-icons/fa';

const Order = ({ ariaLabel, order, book, link, ...props }) => {
  const navigate = useNavigate();
  const { handleAddToWishlist } = useWishlist();

  const handleClick = () => {
    if (book) {
      handleAddToWishlist(book);
    }
    if (link) {
      navigate(link);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="group flex items-center bg-gradient-to-r from-lightPurple to-purple px-5 py-1 text-lightPurple rounded-full transition-all duration-200 gap-4 mr-5"
      aria-label={ariaLabel}
      {...props}
    >
      {order && <span className="hidden group-hover:block transition-all duration-200">{order}</span>}
      <FaCartArrowDown />
    </button>
  );
};

export default Order;