import React, { useState } from "react";
import axios from "axios";

function CarForm() {
  const [formData, setFormData] = useState({
    brand: "",
    engine: "",
    image: "",
    label: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/cars", formData);
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
        <select name="label" value={formData.label} onChange={handleChange}>
          <option value="sport">sport</option>
          <option value="SUV">SUV</option>
          <option value="city_car">city_car</option>
          <option value="road">road</option>
        </select>
      </label>
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default CarForm;
