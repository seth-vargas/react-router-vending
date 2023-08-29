import { Link } from "react-router-dom";

export default function Soda() {
  return (
    <>
      <div>
        <h1>Uh oh</h1>
        <img
          style={{ height: "10rem" }}
          src="https://media.tenor.com/Pm64Gh-mbJIAAAAC/pepsi-mentos.gif"
          alt="Popping bottles"
        />
      </div>
      <Link to="/">Go Back</Link>
    </>
  );
}
