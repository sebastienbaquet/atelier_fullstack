import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import connexion from "../services/connexion";
import "./Signin.css";

function Signin() {
  const [formData, setFormData] = useState({
    email: "",
    hashpassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const showToast = (message) => {
    toast(message);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await connexion.post(`/login`, formData);

      if (response.status === 200) {
        showToast("Super on y va ");
        console.info("utilisateur ok!");
        setTimeout(() => {
          navigate("/Selec");
        }, 2000);
      } else {
        console.error("utilisateur no");
      }
    } catch (error) {
      console.error("Error:", error.message);
      showToast("Erreur");
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
              type={showPassword ? "text" : "password"}
              name="hashpassword"
              value={formData.hashpassword}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <button
            className="signin"
            type="button"
            onClick={handleTogglePassword}
          >
            {showPassword ? "Cacher password" : "Afficher password"}
          </button>
          <br />
          <button className="signin" type="submit">
            connecter
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Signin;
