const jwt = require("jsonwebtoken");

const createToken = (payload) => {
  return jwt.sign(payload, "gfodufnfofyufhfkfzefzefnnnnn");
};

const verifyToken = (token) => {
  return jwt.verify(token, "gfodufnfofyufhfkfzefzefnnnnn");
};

module.exports = { createToken, verifyToken };
