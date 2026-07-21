import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

import { toast } from "react-toastify";

import { useAuth } from "./AuthContext";

import {
  getCart,
  addItem,
  updateItem,
  removeItem,
} from "../services/cartService";

const CartContext = createContext();

export function CartProvider({ children }) {

  const { currentUser } = useAuth();

  const [cartItems, setCartItems] = useState([]);

  // Load Cart

  useEffect(() => {

    async function loadCart() {

      if (!currentUser) {

        setCartItems([]);

        return;

      }

      try {

        const data = await getCart(currentUser.uid);

        setCartItems(data);

      }

      catch (error) {

        console.error(error);

      }

    }

    loadCart();

  }, [currentUser]);

  // Add To Cart

  async function addToCart(product) {

    if (!currentUser) {

      toast.warning("Please login first");

      return;

    }

    try {

      const existing = cartItems.find(
        (item) => item.id === product.id
      );

      if (existing) {

        const quantity = existing.quantity + 1;

        await updateItem(
          currentUser.uid,
          product.id,
          quantity
        );

        setCartItems((prev) =>
          prev.map((item) =>
            item.id === product.id
              ? {
                  ...item,
                  quantity,
                }
              : item
          )
        );

        toast.info("Quantity Updated 🛒");

      }

      else {

        const newItem = {
          ...product,
          quantity: 1,
        };

        await addItem(
          currentUser.uid,
          newItem
        );

        setCartItems((prev) => [
          ...prev,
          newItem,
        ]);

        toast.success("Added To Cart 🛒");

      }

    }

    catch (error) {

      console.error(error);

      toast.error(error.message);

    }

  }

  // Increase Quantity

  async function increaseQuantity(id) {

    try {

      const item = cartItems.find(
        (item) => item.id === id
      );

      if (!item) return;

      const quantity = item.quantity + 1;

      await updateItem(
        currentUser.uid,
        id,
        quantity
      );

      setCartItems((prev) =>
        prev.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity,
              }
            : item
        )
      );

    }

    catch (error) {

      console.error(error);

    }

  }

  // Decrease Quantity

  async function decreaseQuantity(id) {

    try {

      const item = cartItems.find(
        (item) => item.id === id
      );

      if (!item) return;

      if (item.quantity === 1) {

        await removeFromCart(id);

        return;

      }

      const quantity = item.quantity - 1;

      await updateItem(
        currentUser.uid,
        id,
        quantity
      );

      setCartItems((prev) =>
        prev.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity,
              }
            : item
        )
      );

    }

    catch (error) {

      console.error(error);

    }

  }

  // Remove Item

  async function removeFromCart(id) {

    try {

      await removeItem(
        currentUser.uid,
        id
      );

      setCartItems((prev) =>
        prev.filter((item) => item.id !== id)
      );

      toast.success("Removed");

    }

    catch (error) {

      console.error(error);

    }

  }

  // Clear Cart

  async function clearCart() {

    try {

      for (const item of cartItems) {

        await removeItem(
          currentUser.uid,
          item.id
        );

      }

      setCartItems([]);

      toast.success("Cart Cleared");

    }

    catch (error) {

      console.error(error);

    }

  }



  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (

    <CartContext.Provider

      value={{

        cartItems,

        addToCart,

        increaseQuantity,

        decreaseQuantity,

        removeFromCart,

        clearCart,

        totalItems,

        totalPrice,

      }}

    >

      {children}

    </CartContext.Provider>

  );

}

export function useCart() {

  return useContext(CartContext);

}