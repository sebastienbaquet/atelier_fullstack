import React, { useState, useEffect } from "react";
import axios from "axios";

function CarForm() {
  const [formData, setFormData] = useState({
    brand: "",
    engine: "",
    image: "",
    fonction_id: "",
  });
  const [fonctions, setFonctions] = useState([]);
  const [Cars, setCars] = useState([]);

  const getFonctions = async () => {
    try {
      const myFonctions = await axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/fonctions`)
        .then((res) => res.data);
      setFonctions(myFonctions);
    } catch (error) {
      console.error("Erreur ajout fonction", error);
    }
  };

  const getCars = async () => {
    try {
      const myCars = await axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/cars`)
        .then((res) => res.data);
      setCars(myCars);
    } catch (error) {
      console.error("Erreur ajout fonction", error);
    }
  };

  useEffect(() => {
    console.info(formData);
  }, [formData]);

  useEffect(() => {
    getFonctions();
    getCars();
  }, []);

  const handleChange = (e) => {
    setFormData((prevFormData) => {
      const updatedFormData = {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
      return updatedFormData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/cars`,
        formData
      );
      console.info("Nouvelle voiture ajouté:", response.data);
    } catch (error) {
      console.error("Erreur lors de l'ajout d'une voiture':", error);
    }
  };

  const deleteCar = async (id) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/cars/${id}`
      );
      getCars();
      console.info("Nouvelle voiture effacer:", response.data);
    } catch (error) {
      console.error("Erreur lors de la suppression d'une voiture':", error);
    }
  };

  return (
    <div className="all">
      <form onSubmit={handleSubmit}>
        <label>
          Brand:
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Engine:
          <input
            type="text"
            name="engine"
            value={formData.engine}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Image:
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Fonction:
          <select name="fonction_id" onChange={handleChange} required>
            <option value="">choose</option>
            {fonctions.map((fonction) => (
              <option key={fonction.id} value={fonction.id}>
                {fonction.label}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Ajouter</button>
      </form>
      <section className="modif">
        <h2> Toutes les voitures</h2>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>brand</th>
              <th>engine</th>
              <th>image</th>
              <th>Fonction</th>
              <th>Modifier</th>
            </tr>
          </thead>
          <tbody>
            {Cars.map((car) => {
              return (
                <tr key={car.id} value={car.id}>
                  <td>{car.id}</td>
                  <td>{car.brand}</td>
                  <td>{car.engine}</td>
                  <td>
                    <img src={car.image} alt="voiture" />
                  </td>
                  <td> {car.fonction_label}</td>
                  <td className="tdmodif">
                    <button
                      className="delete"
                      type="button"
                      onClick={() => deleteCar(car.id)}
                    >
                      delete
                    </button>
                    <button className="modifier" type="button">
                      modifier
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default CarForm;
