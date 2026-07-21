import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {

  const [wishlistItems, setWishlistItems] = useState([]);

  // Add / Remove Wishlist

  function toggleWishlist(product) {

    const exists = wishlistItems.some(
      (item) => item.id === product.id
    );

    if (exists) {

      toast.error("Removed from Wishlist 💔", {
        toastId: `wishlist-remove-${product.id}`,
      });

      setWishlistItems((prev) =>
        prev.filter((item) => item.id !== product.id)
      );

    } else {

      toast.success("Added to Wishlist ❤️", {
        toastId: `wishlist-add-${product.id}`,
      });

      setWishlistItems((prev) => [
        ...prev,
        product,
      ]);

    }

  }

  // Remove Wishlist

  function removeFromWishlist(id) {

    toast.error("Removed from Wishlist 💔", {
      toastId: `wishlist-remove-${id}`,
    });

    setWishlistItems((prev) =>
      prev.filter((item) => item.id !== id)
    );

  }

  // Clear Wishlist

  function clearWishlist() {

    toast.warning("Wishlist Cleared 🗑", {
      toastId: "wishlist-clear",
    });

    setWishlistItems([]);

  }

  return (

    <WishlistContext.Provider

      value={{

        wishlistItems,

        toggleWishlist,

        removeFromWishlist,

        clearWishlist,

      }}

    >

      {children}

    </WishlistContext.Provider>

  );

}

export function useWishlist() {

  return useContext(WishlistContext);

}