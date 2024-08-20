// get wishlist
export const getWishlist = () => {
    const wishlist = localStorage.getItem('wishlist');
    if (wishlist) {
        return JSON.parse(wishlist);
    } else {
        return [];
    }
};

// Add an item to the wishlist
export const addToWishlist = (item) => {
    const wishlist = getWishlist();

    // Check if the item already exists in the wishlist
    const itemExists = wishlist.some(existingItem => existingItem.id === item.id);

    if (!itemExists) {
        // Add item to wishlist if it doesn't exist
        const updatedWishlist = [...wishlist, item];
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    }
};

// Remove an item from the wishlist
export const removeFromWishlist = (id) => {
    const wishlist = getWishlist();

    // Filter out the item with the given id
    const updatedWishlist = wishlist.filter(item => item.id !== id);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
};