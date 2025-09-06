import { createContext, useContext, useState } from "react";
// {التعريف}
const CartContext = createContext();

// {الاستخدام}
export function useCart() {
  return useContext(CartContext);
}

// {الاستدعاء}
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    if (product.soldOut === true || product.soldOut === "true") return;
    setCartItems((prev) => {
      // لو المنتج موجود نزود الكمية، لو مش موجود نضيفه جديد
      const existing = prev.find(
        (item) => item.productId === product.productId
      );
      if (existing) {
        return prev.map((item) =>
          item.productId === product.productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  }

  function increaseQuantity(id) {
    setCartItems((prev) =>
      prev.map((p) => (p.id === id ? { ...p, quantity: p.quantity + 1 } : p))
    );
  }

  function decreaseQuantity(id) {
    setCartItems((prev) =>
      prev.map((p) =>
        p.id === id && p.quantity > 1 ? { ...p, quantity: p.quantity - 1 } : p
      )
    );
  }

  function removeItem(id) {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
