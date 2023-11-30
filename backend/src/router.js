const express = require("express");

const router = express.Router();

const client = require("../database/client");

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");

// Route to get a list of items
// router.get("/items", itemControllers.browse);

router.get("/cars", (req, res) => {
  client
    .query("SELECT * FROM car")
    .then((result) => {
      res.status(200).json(result[0]);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

// router.get("/garages/:id", (req, res) => {
//     const id = +req.params.id;
//     const query = `
//     SELECT cars.*, fonction.*
//     FROM cars
//     LEFT JOIN fonction ON cars.garage_id = fonction.garage_id
//     WHERE cars.garage_id = $1
//   `;
//     .then(([garage]) => {
//       if (garage[0] != null) {
//         res.status(200).json(garage[0]);
//       } else {
//         res.sendStatus(404);
//       }
//     })
//     .catch((error) => {
//       console.error(error);
//       res.sendStatus(500);
//     });
// });

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);

// Route to add a new item
router.post("/items", itemControllers.add);

/* ************************************************************************* */

module.exports = router;
