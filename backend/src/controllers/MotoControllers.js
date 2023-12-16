// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const motos = await tables.moto.readAll();

    // Respond with the motos in JSON format
    res.json(motos);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific moto from the database based on the provided ID
    const moto = await tables.moto.read(req.params.id);

    // If the moto is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the moto in JSON format
    if (moto == null) {
      res.sendStatus(404);
    } else {
      res.json(moto);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit = async (req, res, next) => {
  // Extract the moto data from the request body
  const moto = req.body;
  try {
    // Update the moto in the database
    await tables.moto.update(req.params.id, moto);
    // If no rows are affected, the moto was not found

    res.sendStatus(204);

    // Respond with HTTP 200 (OK)
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the moto data from the request body
  const moto = req.body;

  try {
    // Insert the moto into the database
    const insertId = await tables.moto.create(moto);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// The D of BREAD - Destroy (Delete) operation
const destroy = async (req, res, next) => {
  // Extract themotoId data from the request body
  const motoId = req.params.id;
  try {
    // Insert themoto into the database
    await tables.moto.delete(motoId);
    // Check the result of the deletion
    // Respond with HTTP 200 (OK) and a success message
    res.sendStatus(204);
    // Respond with HTTP 404 (Not Found) if themoto was not found
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  add,
  edit,
  destroy,
};
