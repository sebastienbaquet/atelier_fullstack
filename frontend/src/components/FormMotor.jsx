import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import connexion from "../services/connexion";
import "./FormMotor.css";
import "react-toastify/dist/ReactToastify.css";

function MotoForm() {
  const [formData, setFormData] = useState({
    brand: "",
    engine: "",
    image: "",
    attribut_id: null,
  });
  const [attributs, setattributs] = useState([]);
  const [Motos, setMotos] = useState([]);

  const getattributs = async () => {
    try {
      const myattributs = await connexion
        .get("/attributs")
        .then((res) => res.data);
      setattributs(myattributs);
    } catch (error) {
      console.error("Erreur ajout attribut", error);
    }
  };

  const getMotos = async () => {
    try {
      const myMotos = await connexion.get("/Motos").then((res) => res.data);
      setMotos(myMotos);
    } catch (error) {
      console.error("Erreur ajout attribut", error);
    }
  };

  useEffect(() => {
    console.info(formData);
  }, [formData]);

  useEffect(() => {
    getattributs();
    getMotos();
  }, []);

  const handleChange = (e) => {
    if (e.target.name === "attribut_id") {
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
      const response = await connexion.post("/Motos", formData);
      getMotos();
      setFormData({
        brand: "",
        engine: "",
        image: "",
        attribut_id: "",
      });
      console.info("Nouvelle moto ajouté:", response.data);
    } catch (error) {
      console.error("Erreur lors de l'ajout d'une moto':", error);
    }
  };

  const deleteMoto = async (id) => {
    try {
      await toast.promise(
        async (resolve, reject) => {
          const confirm = window.confirm(
            "Voulez-vous vraiment supprimer cette moto ?"
          );

          if (confirm) {
            const response = await connexion.delete(`/Motos/${id}`);
            getMotos();
            resolve("Moto supprimée avec succès !");
            console.info("Nouvelle moto effacée :", response.data);
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
      console.error("Erreur lors de la suppression d'une moto :", error);
    }
  };

  const putMoto = async (event) => {
    event.preventDefault();
    try {
      await connexion.put(`/Motos/${formData.id}`, formData);
      getMotos();
      setFormData({
        brand: "",
        engine: "",
        image: "",
        attribut_id: "",
      });
    } catch (error) {
      console.error("Erreur lors de la modification d'une voiture':", error);
    }
  };

  const loadMoto = (Moto) => {
    setFormData(Moto);
  };

  const handleRequest = (e) => {
    if (formData.id) {
      putMoto(e);
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
              Brand
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
              Engine
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
              Image
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
              attribut:
              <select
                name="attribut_id"
                onChange={handleChange}
                required
                value={formData.attribut_id}
              >
                <option value="">choose</option>
                {attributs.map((attribut) => (
                  <option key={attribut.id} value={attribut.id}>
                    {attribut.label}
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
        <h2 className="title_modif"> Toutes les motos</h2>
        <table className="tablef">
          <thead>
            <tr className="tr_container">
              <th className="tr_image">image</th>
              <th className="tr_id">id</th>
              <th className="tr_brand">brand</th>
              <th className="tr_engine">engine</th>
              <th className="tr_attribut">attribut</th>
              <th className="tr_modifier">Modifier</th>
            </tr>
          </thead>
          <tbody className="tbody_container">
            {Motos.map((Moto) => {
              return (
                <tr className="containerEntre" key={Moto.id} value={Moto.id}>
                  <td className="tdr_image">
                    <img
                      className="tdr_imaget"
                      src={Moto.image}
                      alt="voiture"
                    />
                  </td>
                  <td className="tr_id">{Moto.id}</td>
                  <td className="tr_brand">{Moto.brand}</td>
                  <td className="tr_engine">{Moto.engine}</td>
                  <td className="tr_attribut"> {Moto.attribut_label}</td>
                  <td className="tdmodif tr_modifier">
                    <button
                      className="delete"
                      type="button"
                      onClick={() => deleteMoto(Moto.id)}
                    >
                      delete
                    </button>
                    <button
                      className="modifier"
                      type="button"
                      onClick={() => loadMoto(Moto)}
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

export default MotoForm;
