import { Link } from "react-router-dom";

export default function VendingMachine() {
  return (
    <>
      <h1>Vending Machine</h1>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/soda">Soda</Link>
        <Link to="/chips">Chips</Link>
        <Link to="/sardines">Fresh Sardines</Link>
      </nav>
    </>
  );
}
