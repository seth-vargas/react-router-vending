import { Link } from "react-router-dom";

export default function Sardine() {
  return (
    <>
      <div>
        <h1>Fresh Sardines</h1>
        <img
          style={{ height: "10rem" }}
          src="https://media.tenor.com/CRrH5FNFLbYAAAAM/sardines-fish.gif"
          alt="bunch of sardines"
        />
      </div>
      <Link to="/">Go back</Link>
    </>
  );
}
