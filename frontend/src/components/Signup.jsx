import React, { useState } from "react";
import "./Signin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    haspassword: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

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
        console.info("Utilisateur enregistré avec succès !");
        setTimeout(() => {
          navigate("/Signin");
        }, 2000);
      }
    } catch (error) {
      console.error("Erreur :", error.message);
    }
  };

  return (
    <div className="containerConnect">
      <div className="containerC1">
        <h2 className="text-h2">Inscription</h2>
        <form onSubmit={handleSubmit}>
          <label className="email">
            Email :
            <input
              className="input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <br />

          <label className="password">
            Mot de passe :
            <input
              className="input"
              type="password"
              name="haspassword"
              value={formData.haspassword}
              onChange={handleChange}
              required
            />
          </label>
          <br />

          <label className="password">
            Confirmer le mot de passe :
            <input
              className="input"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </label>
          <br />

          <button className="signin" type="submit">
            Inscription
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
