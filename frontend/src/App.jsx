import { useNavigate } from "react-router-dom";

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
      <button type="button" onClick={handleShowCarsClick}>
        Afficher Cars
      </button>
      <button type="button" onClick={handleShowMotosClick}>
        Afficher Motos
      </button>
    </div>
  );
}

export default App;
