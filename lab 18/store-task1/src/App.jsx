import Cart from "./components/Cart";
import ProductCard from "./components/ProductCard";
import productsData from "./assets/data.json";
import { CartProvider } from "./context/CartContext";
import "./App.css";

export default function App() {
  return (
    <CartProvider>
      <div className="layout">
        <div className="products-container">
          <h1>Desserts</h1>
          <div className="grid">
            {productsData.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>

        <Cart />
      </div>
    </CartProvider>
  );
}
