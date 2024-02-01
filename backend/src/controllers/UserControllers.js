// Import access to database tables
const tables = require("../tables");
const { hash, verify } = require("../services/hash");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const users = await tables.user.readAll();

    // Respond with the users in JSON format
    res.json(users);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific user from the database based on the provided ID
    const user = await tables.user.read(req.params.id);

    // If the user is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the user in JSON format
    if (user == null) {
      res.sendStatus(404);
    } else {
      res.json(user);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit = async (req, res, next) => {
  // Extract the user data from the request body
  const user = req.body;
  try {
    // Update the user in the database
    await tables.user.update(req.params.id, user);
    // If no rows are affected, the user was not found

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
  // Extract the user data from the request body
  const user = req.body;

  try {
    // Hash the user's password using Argon2

    const hashedPassword = await hash(user.password);

    // Insert the user into the database
    const insertId = await tables.user.create(user.email, hashedPassword);

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
  // Extract theuserId data from the request body
  const userId = req.params.id;
  try {
    // Insert theuser into the database
    await tables.user.delete(userId);
    // Check the result of the deletion
    // Respond with HTTP 200 (OK) and a success message
    res.sendStatus(204);
    // Respond with HTTP 404 (Not Found) if theuser was not found
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
// The R of BREAD - Read operation
const login = async (req, res, next) => {
  try {
    // Fetch a specific user from the database based on the provided ID
    const user = await tables.user.read(req.body.email);
    // If the user is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the user in JSON format
    if (user == null) {
      res.sendStatus(403);
    } else {
      const check = await verify(req.body.hashpassword, user.hashpassword);
      if (check) {
        res.status(200).json({ id: user.id, email: user.email, role: "user" });
      } else {
        res.sendStatus(403);
      }
    }
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
  login,
};
