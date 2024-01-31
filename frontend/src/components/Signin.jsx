import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import connexion from "../services/connexion";
import "./Signin.css";

function Signin() {
  const [formData, setFormData] = useState({
    email: "",
    hashpassword: "",
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
    try {
      const response = await connexion.post(`/login`, formData);

      if (response.status === 200) {
        console.info("utilisateur ok!");
        setTimeout(() => {
          navigate("/Selec");
        }, 2000);
      } else {
        console.error("utilisateur no");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div className="containerConnect">
      <div className="containerC1">
        <h2 className="text-h2">Connecte- Toi</h2>
        <form onSubmit={handleSubmit}>
          <label className="email">
            Email:
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
            Password:
            <input
              className="input"
              type="password"
              name="hashpassword"
              value={formData.hashpassword}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <button className="signin" type="submit">
            connecter
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signin;
