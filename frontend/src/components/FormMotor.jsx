import React, { useState } from "react";

function FormMotor() {
  const [formData, setFormData] = useState({
    brand: "",
    engine: "",
    image: "",
    fonction_id: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRequest = (e) => {
    e.preventDefault();
  };

  const fonctions = [];

  return (
    <div className="all">
      <form onSubmit={handleRequest}>
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
            onChange={handleChange}
            required
            value={formData.fonction_id}
          >
            <option value="">choose</option>
            {fonctions.map((fonction) => (
              <option key={fonction.id} value={fonction.id}>
                {fonction.label}
              </option>
            ))}
          </select>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormMotor;
