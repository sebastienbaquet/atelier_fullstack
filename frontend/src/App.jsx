import { Link } from "react-router-dom";
import "./App.css";
import NavMotos from "./components/NavMotos";
import NavCar from "./components/NavCar";

function App() {
  return (
    <div>
      <div className="Nav">
        <NavMotos />
        <NavCar />
      </div>
      <Link to="/Signup">
        <button type="button">s'inscrire</button>
      </Link>
      <Link to="/Signin">
        <button type="button">Connecter</button>
      </Link>
    </div>
  );
}

export default App;
