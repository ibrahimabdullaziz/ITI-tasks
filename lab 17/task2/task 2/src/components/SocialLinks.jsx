export default function SocialLinks({ links }) {
  return (
    <div className="links">
      {links.map((link) => (
        <a key={link.name} href={link.url} target="_blank" rel="noreferrer">
          {link.name}
        </a>
      ))}
    </div>
  );
}
