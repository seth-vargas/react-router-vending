import { Link } from "react-router-dom";
import { useState } from "react";

export default function Chip() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Chips: {count}</h1>
        <button onClick={() => setCount(count + 1)}>MORE</button>
      </div>
      <Link to="/">Go back</Link>
    </>
  );
}
