export default function ProductDetails({ category, name, price }) {
  return (
    <>
      <div className="category">{category}</div>
      <div className="name">{name}</div>
      <div className="price">${price.toFixed(2)}</div>
    </>
  );
}
