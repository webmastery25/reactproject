import { useState } from 'react';

function Counter() {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="counter">
      <button
        onClick={() => {
          if (quantity > 0) {
            setQuantity(quantity - 1);
          }
        }}
      >
        {' '}
        -{' '}
      </button>

      <span>{quantity}</span>

      <button onClick={() => setQuantity(quantity + 1)}>+</button>
    </div>
  );
}

export default Counter;
