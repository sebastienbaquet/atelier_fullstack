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

  useEffect(() => {
    console.info(formData);
  }, [formData]);

  useEffect(() => {
    getFonctions();
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

  return (
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
  );
}

export default CarForm;
