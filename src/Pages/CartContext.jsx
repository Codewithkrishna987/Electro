import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const deletefromCart = (product) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === product.id ? { ...item, quantity: 0 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const decreasefromCart = (product) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const addToWishlist = (product) => {
    setWishlist((prev) => {
      const existing = prev.find((item) => product.id === item.id);
      if (existing) {
        toast.info("Already in wishlist!",{
          autoClose:1000
        });
        return prev;
      } else {
        toast.success("Added to wishlist!",{
          autoClose:1000
        });
        return [...prev, product];
      }
    });
  };

  // const deletewishlist = (product) => {
  //   setWishlist((pre) =>
  //     pre.map((item) =>
  //       item.id === product.id
  //         ? wishlist.filter((item) => item.id !== product.id)
  //         : item
  //     )
  //   );
  // };

  const deletewishlist = (product) => {
    setWishlist((pre) => pre.filter((item) => item.id !== product.id))
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        wishlist,
        setWishlist,
        addToCart,
        deletefromCart,
        decreasefromCart,
        addToWishlist,
        deletewishlist,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
