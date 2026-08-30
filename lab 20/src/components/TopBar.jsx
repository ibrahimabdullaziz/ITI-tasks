import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <header className="topbar">
      <div className="topbar__inner">
        <Link to="/" className="topbar__title">
          Where in the World?
        </Link>
      </div>
    </header>
  );
}
