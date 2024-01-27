import { Link } from "react-router-dom";
import "./App.css";
import NavMotos from "./components/NavMotos";
import NavCar from "./components/NavCar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container_nav">
      <div className="Nav">
        <NavMotos />
        <NavCar />
      </div>
      <div className="Nav_button">
        <Link to="/Signup">
          <button type="button">s'inscrire</button>
        </Link>
        <Link to="/Signin">
          <button type="button">Connecter</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default App;
