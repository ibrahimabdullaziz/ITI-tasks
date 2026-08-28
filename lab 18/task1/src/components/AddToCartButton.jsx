export default function AddToCartButton({ product, onAdd }) {
  return (
    <button className="btn-add" type="button" onClick={() => onAdd(product)}>
      Add to Cart
    </button>
  );
}
