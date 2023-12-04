const express = require("express");

const router = express.Router();

// const CarController= require("../database/client");

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const carControllers = require("./controllers/carControllers");

// Route to get a list of items
router.get("/cars", carControllers.browse);
// Route to get a specific item by ID
router.get("/cars/:id", carControllers.read);

// Route to add a new item
router.post("/cars", carControllers.add);

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
