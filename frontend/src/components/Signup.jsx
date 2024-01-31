import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Signin.css";
import { useNavigate } from "react-router-dom";
import connexion from "../services/connexion";

function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
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

  const showToast = (message, type = "error") => {
    toast[type](message);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      showToast("Les mots de passe ne correspondent pas !");
      return;
    }

    if (formData.password.length < 8) {
      showToast("Le mot de passe doit faire 8 caractères minimum !");
      return;
    }

    try {
      const response = await connexion.post(`/users`, formData);
      if (response.status === 201) {
        showToast(
          "Inscription réussie ! Passons à l'étape suivante !",
          "success"
        );
        console.info("Utilisateur enregistré avec succès !");
        setTimeout(() => {
          navigate("/Signin");
        }, 2000);
      }
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error.message);
      showToast("Mail déjà éxistant");
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
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>
          <label className="password">
            Confirmer le mot de passe :
            <input
              className="input"
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
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
            Inscription
          </button>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Signup;
