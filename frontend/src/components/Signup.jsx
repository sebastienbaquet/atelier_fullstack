import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";

function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    haspassword: "",
    confirmPassword: "",
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
    if (formData.haspassword !== formData.confirmPassword) {
      console.error("Les mots de passe ne correspondent pas.");
      return;
    }

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
      <h2>Signup</h2>
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

        <label className="confirme">
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
