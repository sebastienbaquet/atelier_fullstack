const express = require("express");

const router = express.Router();

// const CarController= require("../database/client");

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const carControllers = require("./controllers/CaraControllers");
const motoControllers = require("./controllers/MotoControllers");
const userControllers = require("./controllers/UserControllers");
const validateUser = require("./validators/validateUser");
const validateLogin = require("./validators/validateLogin");
const validateCar = require("./validators/validateCar");
const validateMoto = require("./validators/validateMoto");
const checkCredentials = require("./controllers/middleware/checkCredentials");

// Route to get a list of items
router.get("/cars", carControllers.browse);
// Route to get a list of items
router.get("/motos", motoControllers.browse);

router.get("/users", userControllers.browse);

const fonctionControllers = require("./controllers/fonctionControllers");
const AttributControllers = require("./controllers/AttributControllers");

router.get("/fonctions", fonctionControllers.browse);
router.get("/Attributs", AttributControllers.browse);

// Route to get a specific item by ID
router.get("/cars/:id", carControllers.read);
router.get("/motos/:id", motoControllers.read);

// Route to add a new item
router.post("/cars", checkCredentials, validateCar, carControllers.add);
router.post("/motos", checkCredentials, validateMoto, motoControllers.add);
router.post("/users", validateUser, userControllers.add);

// Route to update a specific item by ID

router.put("/cars/:id", checkCredentials, validateCar, carControllers.edit);
router.put("/motos/:id", checkCredentials, validateMoto, motoControllers.edit);

router.delete("/cars/:id", checkCredentials, carControllers.destroy);
router.delete("/motos/:id", checkCredentials, motoControllers.destroy);

router.post("/login", validateLogin, userControllers.login);
router.post("/logout", userControllers.logout);

// router.get("/cars", (req, res) => {
//   client
//     .query("SELECT * FROM car")
//     .then((result) => {
//       res.status(200).json(result[0]);
//     })
//     .catch((err) => {
//       console.error(err);
//       res.sendStatus(500);
//     });
// });

// router.get("/cars/:id", (req, res) => {
//   const carId = req.params.id;
//   const query = `
//       SELECT car.*, fonction.*
//       FROM car
//       RIGHT JOIN fonction ON car.fonction_id = fonction.id
//       WHERE car.id = ?
//     `;
//   client
//     .query(query, [carId])
//     .then((result) => {
//       if (result[0].length === 0) {
//         res.status(404).json({ message: "Rien trouvé" });
//       } else {
//         res.status(200).json(result[0][0]);
//       }
//     })
//     .catch((err) => {
//       console.error(err);
//       res.sendStatus(500);
//     });
// });

/* ************************************************************************* */

module.exports = router;
