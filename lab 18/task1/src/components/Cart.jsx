export default function Cart({ items, onUpdateQuantity, onRemove }) {
  const itemCount = items.reduce((count, item) => count + item.quantity, 0);
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart ({itemCount})</h2>
      {items.length === 0 ? (
        <p className="cart-empty">Your added items will appear here</p>
      ) : (
        <>
          <div className="cart-items">
            {items.map((item) => (
              <div className="cart-item" key={item.name}>
                <div>
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-meta">
                    {item.quantity} x ${item.price.toFixed(2)}
                  </div>
                </div>
                <div className="cart-item-actions">
                  <button
                    type="button"
                    aria-label={`Decrease ${item.name} quantity`}
                    onClick={() =>
                      onUpdateQuantity(item.name, item.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    type="button"
                    aria-label={`Increase ${item.name} quantity`}
                    onClick={() =>
                      onUpdateQuantity(item.name, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                  <button
                    className="btn-remove"
                    type="button"
                    aria-label={`Remove ${item.name}`}
                    onClick={() => onRemove(item.name)}
                  >
                    x
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <span>Order Total</span>
            <strong>${total.toFixed(2)}</strong>
          </div>
        </>
      )}
    </div>
  );
}
