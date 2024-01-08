import { useNavigate, Link } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();

  const handleShowCarsClick = () => {
    navigate("/cars");
  };

  const handleShowMotosClick = () => {
    navigate("/motos");
  };

  return (
    <div>
      <button type="button" onClick={handleShowMotosClick}>
        Afficher Motos
      </button>
      <button type="button" onClick={handleShowCarsClick}>
        Afficher car
      </button>
      <Link to="/Signup">
        <button type="button">Connecter</button>
      </Link>
    </div>
  );
}

export default App;
