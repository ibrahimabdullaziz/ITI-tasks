import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main className="status-container">
      <p className="status-text">This page does not exist.</p>
      <Link to="/" className="back-btn" style={{ marginTop: 24 }}>
        ← Back home
      </Link>
    </main>
  );
}
