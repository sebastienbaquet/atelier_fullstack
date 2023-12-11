// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const cars = await tables.car.readAll();

    // Respond with the cars in JSON format
    res.json(cars);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific car from the database based on the provided ID
    const car = await tables.car.read(req.params.id);

    // If the car is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the car in JSON format
    if (car == null) {
      res.sendStatus(404);
    } else {
      res.json(car);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit = async (req, res, next) => {
  // Extract the car data from the request body
  const car = req.body;
  const carId = req.params.id;

  try {
    // Update the car in the database
    const affectedRows = await tables.car.update(carId, car);

    // If no rows are affected, the car was not found
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
  // Extract the car data from the request body
  const car = req.body;

  try {
    // Insert the car into the database
    const insertId = await tables.car.create(car);

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
  // Extract thecarId data from the request body
  const carId = req.params.id;
  try {
    // Insert thecar into the database
    await tables.car.delete(carId);
    // Check the result of the deletion
    // Respond with HTTP 200 (OK) and a success message
    res.sendStatus(204);
    // Respond with HTTP 404 (Not Found) if thecar was not found
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  // edit,
  add,
  edit,
  destroy,
  // destroy,
};
