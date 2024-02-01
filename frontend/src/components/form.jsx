import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import connexion from "../services/connexion";
import "./FormMotor.css";
import "react-toastify/dist/ReactToastify.css";

function CarForm() {
  const [formData, setFormData] = useState({
    brand: "",
    engine: "",
    image: "",
    fonction_id: null,
  });
  const [fonctions, setFonctions] = useState([]);
  const [Cars, setCars] = useState([]);

  const getFonctions = async () => {
    try {
      const myFonctions = await connexion
        .get("/fonctions")
        .then((res) => res.data);
      setFonctions(myFonctions);
    } catch (error) {
      console.error("Erreur lecture fonction", error);
    }
  };

  const getCars = async () => {
    try {
      const myCars = await connexion.get("/cars").then((res) => res.data);
      setCars(myCars);
    } catch (error) {
      console.error("Erreur lecture car", error);
    }
  };
  useEffect(() => {
    console.info(formData);
  }, [formData]);

  useEffect(() => {
    getFonctions();
    getCars();
  }, []);

  const handleChange = (e) => {
    if (e.target.name === "fonction_id") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [e.target.name]: +e.target.value,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await connexion.post("/cars", formData);
      getCars();
      setFormData({
        brand: "",
        engine: "",
        image: "",
        fonction_id: "",
      });
      console.info("Nouvelle voiture ajouté:", response.data);
    } catch (error) {
      console.error("Erreur lors de l'ajout d'une voiture':", error);
    }
  };

  const deleteCar = async (id) => {
    try {
      await toast.promise(
        async (resolve, reject) => {
          const confirm = window.confirm(
            "Voulez-vous vraiment supprimer cette voiture ?"
          );
          if (confirm) {
            const response = await connexion.delete(`/cars/${id}`);
            getCars();
            resolve("voiture supprimée avec succès !");
            console.info("Nouvelle voiture effacer:", response.data);
          } else {
            reject("Suppression annulée.");
          }
        },
        {
          pending: "Attente de confirmation...",
          success: { duration: 2000 },
          error: { duration: 2000 },
        }
      );
    } catch (error) {
      console.error("Erreur lors de la suppression d'une voiture':", error);
    }
  };

  const putCar = async (event) => {
    event.preventDefault();
    try {
      await connexion.put(`/cars/${formData.id}`, formData);
      getCars();
      setFormData({
        brand: "",
        engine: "",
        image: "",
        fonction_id: "",
      });
    } catch (error) {
      console.error("Erreur lors de la modification d'une voiture':", error);
    }
  };

  const loadCar = (car) => {
    setFormData(car);
  };

  const handleRequest = (e) => {
    if (formData.id) {
      putCar(e);
    } else {
      handleSubmit(e);
    }
  };

  return (
    <div className="form_container">
      <div className="form_all">
        <form onSubmit={handleRequest}>
          <div className="form_label">
            <label className="form_brand">
              Brand:
              <input
                className="input"
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
              />
            </label>
            <br />
            <label className="form_engine">
              Engine:
              <input
                className="input"
                type="text"
                name="engine"
                value={formData.engine}
                onChange={handleChange}
              />
            </label>
            <br />
            <label className="form_image">
              Image:
              <input
                className="input"
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
              />
            </label>
            <br />
            <label className="form_attribut">
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
            <button type="submit">
              {formData.id ? "modifier " : "ajouter"}
            </button>
          </div>
        </form>
      </div>
      <section className="modif">
        <h2 className="title_modif"> Toutes les voitures</h2>
        <table className="tablef">
          <thead>
            <tr className="tr_container">
              <th className="tr_image">image</th>
              <th className="tr_id">id</th>
              <th className="tr_brand">brand</th>
              <th className="tr_engine">engine</th>
              <th className="tr_attribut">Fonction</th>
              <th className="tr_modifier">Modifier</th>
            </tr>
          </thead>
          <tbody className="tbody_container">
            {Cars.map((car) => {
              return (
                <tr className="containerEntre" key={car.id} value={car.id}>
                  <td className="tdr_image">
                    <img className="tdr_imaget" src={car.image} alt="voiture" />
                  </td>
                  <td className="tr_id">{car.id}</td>
                  <td className="tr_brand">{car.brand}</td>
                  <td className="tr_engine">{car.engine}</td>
                  <td className="tr_attribut"> {car.fonction_label}</td>
                  <td className="tdmodif tr_modifier">
                    <button
                      className="delete"
                      type="button"
                      onClick={() => deleteCar(car.id)}
                    >
                      delete
                    </button>
                    <button
                      className="modifier"
                      type="button"
                      onClick={() => loadCar(car)}
                    >
                      modifier
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default CarForm;
