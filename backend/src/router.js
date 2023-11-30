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

router.get("/cars/:id", (req, res) => {
  const carId = req.params.id;
  const query = `
      SELECT car.*, fonction.*
      FROM car
      RIGHT JOIN fonction ON car.fonction_id = fonction.id
      WHERE car.id = ?
    `;
  client
    .query(query, [carId])
    .then((result) => {
      if (result[0].length === 0) {
        res.status(404).json({ message: "Rien trouvé" });
      } else {
        res.status(200).json(result[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);

// Route to add a new item
router.post("/items", itemControllers.add);

/* ************************************************************************* */

module.exports = router;