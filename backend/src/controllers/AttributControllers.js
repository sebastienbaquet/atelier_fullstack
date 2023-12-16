// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const attributs = await tables.attribut.readAll();

    // Respond with the attributs in JSON format
    res.json(attributs);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific attribut from the database based on the provided ID
    const attribut = await tables.attribut.read(req.params.id);

    // If the attribut is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the attribut in JSON format
    if (attribut == null) {
      res.sendStatus(404);
    } else {
      res.json(attribut);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit = async (req, res, next) => {
  // Extract the attribut data from the request body
  const attribut = req.body;
  const attributId = req.params.id;

  try {
    // Update the attribut in the database
    const affectedRows = await tables.attribut.update(attributId, attribut);

    // If no rows are affected, the attribut was not found
    if (affectedRows === 0) {
      res.sendStatus(404);
    } else {
      // Respond with HTTP 200 (OK)
      res.sendStatus(200);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the attribut data from the request body
  const attribut = req.body;

  try {
    // Insert the attribut into the database
    const insertId = await tables.attribut.create(attribut);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  // edit,
  add,
  edit,
  // destroy,
};
