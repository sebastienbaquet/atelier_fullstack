import React, { useState, useEffect } from "react";
import axios from "axios";

function CarForm() {
  const [formData, setFormData] = useState({
    brand: "",
    engine: "",
    image: "",
    fonction_id: "",
  });

  useEffect(() => {
    console.info(formData);
  }, [formData]);

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
        <select
          name="fonction_id"
          value={formData.fonction_id}
          onChange={handleChange}
        >
          <option value="">choose</option>
          <option value="1">sport</option>
          <option value="2">SUV</option>
          <option value="3">city_car</option>
          <option value="4">road</option>
        </select>
      </label>
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default CarForm;
