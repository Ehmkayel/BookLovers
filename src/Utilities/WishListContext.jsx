import React, { createContext, useContext, useState, useEffect } from 'react';
import { getWishlist, addToWishlist, removeFromWishlist } from '../Utilities/LocalStorage'

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState(getWishlist());

    useEffect(() => {
        setWishlist(getWishlist());
    }, []);

    const updateWishlist = () => {
        setWishlist(getWishlist());
    };

    const handleAddToWishlist = (item) => {
        addToWishlist(item);
        updateWishlist(); 
    };

    const handleRemoveFromWishlist = (id) => {
        removeFromWishlist(id);
        updateWishlist(); 
    };

    return (
        <WishlistContext.Provider value={{ wishlist, handleAddToWishlist, handleRemoveFromWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};

export const useWishlist = () => useContext(WishlistContext);
