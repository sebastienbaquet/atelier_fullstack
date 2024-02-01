const argon2 = require("argon2");

const options = {
  type: argon2.argon2d,
  memoryCost: 2 ** 16,
  hashLength: 50,
};

const hash = async (hashpassword) => {
  const pass = await argon2.hash(hashpassword, options);
  return pass;
};

const verify = async (hashpassword, hashed) => {
  try {
    return await argon2.verify(hashed, hashpassword, options);
  } catch (error) {
    throw new Error("identifiants incorrect");
  }
};

module.exports = { hash, verify };
