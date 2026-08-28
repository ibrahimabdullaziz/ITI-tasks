import { useState } from "react";
import Cart from "./components/Cart";
import ProductCard from "./components/ProductCard";
import productsData from "./assets/data.json";
import "./App.css";

export default function App() {
  const [items, setItems] = useState([]);

  function addItem(product) {
    setItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.name === product.name,
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...currentItems, { ...product, quantity: 1 }];
    });
  }

  function updateQuantity(productName, quantity) {
    setItems((prev) => {
      if (quantity <= 0)
        return prev.filter((item) => item.name !== productName);

      return prev.map((item) =>
        item.name === productName ? { ...item, quantity } : item,
      );
    });
  }

  function removeItem(productName) {
    updateQuantity(productName, 0);
  }

  return (
    <div className="layout">
      <div className="products-container">
        <h1>Desserts</h1>
        <div className="grid">
          {productsData.map((product) => {
            return (
              <ProductCard
                key={product.name}
                product={product}
                onAdd={addItem}
              />
            );
          })}
        </div>
      </div>

      <Cart
        items={items}
        onUpdateQuantity={updateQuantity}
        onRemove={removeItem}
      />
    </div>
  );
}
