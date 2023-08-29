import { Link, Route } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Chips from "./Chip";
import Sodas from "./Soda";
import Sardines from "./Sardine";

function App() {
  return (
    <>
      <Route exact path="/">
        <VendingMachine />
      </Route>
      <Route exact path="/chips">
        <Chips />
      </Route>
      <Route exact path="/soda">
        <Sodas />
      </Route>
      <Route exact path="/sardines">
        <Sardines />
      </Route>
    </>
  );
}

export default App;
