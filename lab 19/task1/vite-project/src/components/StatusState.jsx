export default function StatusState({ variant, message, onRetry }) {
  if (variant === "loading") {
    return (
      <div className="status-container" aria-live="polite" aria-busy="true">
        <div className="spinner" role="status" />
        <p className="status-text">Loading countries…</p>
      </div>
    );
  }

  if (variant === "error") {
    return (
      <div
        className="status-container status-container--error"
        aria-live="polite"
      >
        <p className="status-text">{message}</p>
        <button
          type="button"
          onClick={onRetry}
          style={{
            marginTop: "16px",
            padding: "10px 24px",
            background: "hsl(207, 60%, 45%)",
            border: "none",
            borderRadius: "6px",
            color: "#fff",
            fontWeight: 600,
            fontSize: "0.9rem",
          }}
        >
          Try Again
        </button>
      </div>
    );
  }

  if (variant === "empty") {
    return <p className="empty-state">{message}</p>;
  }

  return null;
}
