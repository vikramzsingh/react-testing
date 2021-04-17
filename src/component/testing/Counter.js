import React from "react";

export default function Counter() {
  const [count, setCount] = React.useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };


  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Current count: {count}</p>
      <button className="increment" onClick={handleIncrement}>Increment</button>
      <button className="decrement" onClick={handleDecrement}>Decrement</button>
    </div>
  );
}
