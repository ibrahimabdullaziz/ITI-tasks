import AddToCartButton from "./AddToCartButton";
import ProductDetails from "./ProductDetails";
import ProductImage from "./ProductImage";

export default function ProductCard({ product }) {
  return (
    <div>
      <div className="card-img-wrap">
        <ProductImage image={product.image} name={product.name} />
        <AddToCartButton />
      </div>
      <ProductDetails
        category={product.category}
        name={product.name}
        price={product.price}
      />
    </div>
  );
}
