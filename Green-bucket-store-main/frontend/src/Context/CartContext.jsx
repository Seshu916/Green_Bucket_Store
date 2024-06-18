import { createContext, useContext, useState,useEffect } from "react";


const CartContext = createContext()

export const CartProvider = ({ children }) => {
      const [cart, setCart] = useState(() => {
      const storedCart = localStorage.getItem('cart');
      return storedCart ? JSON.parse(storedCart) : [];
    });
  
    useEffect(() => {
      // Update localStorage whenever cart changes
      localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);
  
    const addToCart = (product) => {
      const updatedCart = [...cart, { product, count: 1 }]; // Ensure each item has a 'product' and 'count' property
      setCart(updatedCart);
    };
  
    const removeFromCart = (productId) => {
      // Find the first occurrence of the product in the cart
      const indexToRemove = cart.findIndex((item) => item.product.pid === productId);
  
      if (indexToRemove !== -1) {
        // Create a new cart array with the item removed
        const updatedCart = [...cart];
        updatedCart.splice(indexToRemove, 1);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
      }
    };
  
    const clearCart = () => {
      setCart([]);
    };
  
    const value = {
      cart,
      addToCart,
      removeFromCart,
      clearCart,
    };
    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart=()=>{
    return useContext(CartContext)
}