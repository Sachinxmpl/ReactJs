import Carditem from "./components/carditem.tsx";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <Carditem />
      <NavLink to={"/cart"}>Go to Cart</NavLink>
    </>
  );
}

export default App;
