// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const fonctions = await tables.fonction.readAll();

    // Respond with the fonctions in JSON format
    res.json(fonctions);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific fonction from the database based on the provided ID
    const fonction = await tables.fonction.read(req.params.id);

    // If the fonction is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the fonction in JSON format
    if (fonction == null) {
      res.sendStatus(404);
    } else {
      res.json(fonction);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit = async (req, res, next) => {
  // Extract the fonction data from the request body
  const fonction = req.body;
  const fonctionId = req.params.id;

  try {
    // Update the fonction in the database
    const affectedRows = await tables.fonction.update(fonctionId, fonction);

    // If no rows are affected, the fonction was not found
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
  // Extract the fonction data from the request body
  const fonction = req.body;

  try {
    // Insert the fonction into the database
    const insertId = await tables.fonction.create(fonction);

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
