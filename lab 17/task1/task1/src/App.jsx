import Cart from "./components/Cart";
import ProductCard from "./components/ProductCard";
import productsData from "./assets/data.json";
import "./App.css";

export default function App() {
  return (
    <div className="layout">
      <div className="products-container">
        <h1>Desserts</h1>
        <div className="grid">
          {productsData.map((product) => {
            return <ProductCard key={product.name} product={product} />;
          })}
        </div>
      </div>

      <Cart />
    </div>
  );
}
