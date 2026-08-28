export default function ProductImage({ image, name }) {
  return <img src={image.desktop} alt={name} />;
}
