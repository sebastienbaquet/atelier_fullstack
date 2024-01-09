import React, { useState } from "react";
import axios from "axios";

function Signin() {
  const [formData, setFormData] = useState({
    email: "",
    haspassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/users`,
        formData
      );

      if (response.status === 201) {
        console.info("utilisateur ok!");
      } else {
        console.error("utilisateur no");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div>
      <h2>Signin</h2>
      <form onSubmit={handleSubmit}>
        <label className="email">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label className="password">
          Password:
          <input
            type="password"
            name="haspassword"
            value={formData.haspassword}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Signin</button>
      </form>
    </div>
  );
}

export default Signin;
