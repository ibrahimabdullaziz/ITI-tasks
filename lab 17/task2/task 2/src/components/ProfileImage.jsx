export default function ProfileImage({ imageUrl, name }) {
  return <img src={imageUrl} alt={name} className="avatar" />;
}
