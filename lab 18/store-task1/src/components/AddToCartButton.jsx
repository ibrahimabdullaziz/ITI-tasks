import { useCart } from "../context/CartContext";

export default function AddToCartButton({ product }) {
  const { addItem } = useCart();

  return (
    <button className="btn-add" type="button" onClick={() => addItem(product)}>
      Add to Cart
    </button>
  );
}
