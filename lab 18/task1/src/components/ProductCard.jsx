import AddToCartButton from "./AddToCartButton";
import ProductDetails from "./ProductDetails";
import ProductImage from "./ProductImage";

export default function ProductCard({ product, onAdd }) {
  return (
    <div>
      <div className="card-img-wrap">
        <ProductImage image={product.image} name={product.name} />
        <AddToCartButton product={product} onAdd={onAdd} />
      </div>
      <ProductDetails
        category={product.category}
        name={product.name}
        price={product.price}
      />
    </div>
  );
}
