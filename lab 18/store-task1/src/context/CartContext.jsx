import { createContext, useContext, useReducer } from "react";

const CartContext = createContext(null);

function cartReducer(items, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = items.find(
        (item) => item.name === action.product.name,
      );

      if (existingItem) {
        return items.map((item) =>
          item.name === action.product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...items, { ...action.product, quantity: 1 }];
    }
    case "UPDATE_QUANTITY":
      if (action.quantity <= 0) {
        return items.filter((item) => item.name !== action.productName);
      }

      return items.map((item) =>
        item.name === action.productName
          ? { ...item, quantity: action.quantity }
          : item,
      );
    case "REMOVE_ITEM":
      return items.filter((item) => item.name !== action.productName);
    default:
      return items;
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, []);
  const itemCount = items.reduce((count, item) => count + item.quantity, 0);
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const value = {
    items,
    itemCount,
    total,
    addItem: (product) => dispatch({ type: "ADD_ITEM", product }),
    updateQuantity: (productName, quantity) =>
      dispatch({ type: "UPDATE_QUANTITY", productName, quantity }),
    removeItem: (productName) => dispatch({ type: "REMOVE_ITEM", productName }),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside a CartProvider");
  }

  return context;
}
