import React, { createContext, useContext, useState, useEffect } from "react";
import { db } from "../firebase/config";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  orderBy,
} from "firebase/firestore";

const ShopContext = createContext();

export const useShop = () => useContext(ShopContext);

export function ShopProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  // Cart operations
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      setCart((prev) =>
        prev.map((item) => (item.id === id ? { ...item, quantity } : item)),
      );
    }
  };

  const clearCart = () => setCart([]);

  // Create Order function saving to Firestore
  const createOrder = async (orderData) => {
    const newOrder = {
      ...orderData,
      id: `ORD-${Date.now()}`,
      createdAt: new Date().toISOString(),
      status: "Processing",
      estimatedDelivery: "3 - 5 Business Days",
    };

    try {
      if (db) {
        await addDoc(collection(db, "orders"), newOrder);
      }
    } catch (err) {
      console.warn("Firestore save failed, falling back to local state:", err);
    }

    setOrders((prev) => [newOrder, ...prev]);
    clearCart();
    return newOrder;
  };

  return (
    <>
      <ShopContext.Provider
        value={{
          cart,
          addToCart,
          removeFromCart,
          updateQuantity,
          clearCart,
          orders,
          createOrder,
        }}
      >
        {children}
      </ShopContext.Provider>
    </>
  );
}
