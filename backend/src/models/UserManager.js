const AbstractManager = require("./AbstractManager");

class userManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "user" });
  }

  // The C of CRUD - Create operation

  async create(user) {
    // Execute the SQL INSERT query to add a new user to the "user" table
    const [result] = await this.database.query(
      `insert into ${this.table} (email,haspassword) values (?, ?)`,
      [user.email, user.haspassword]
    );

    // Return the ID of the newly inserted user
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(email) {
    // Execute the SQL SELECT query to retrieve a specific user by its ID
    const [rows] = await this.database.query(
      `SELECT email
    FROM ${this.table}
    WHERE email = ?`,
      [email]
    );

    // Return the first row of the result, which represents the user
    return rows[0];
  }

  // async readAll() {
  //   // Execute the SQL SELECT query to retrieve all users from the "user" table
  //   const [rows] = await this.database.query(`select * from ${this.table}`);

  //   // Return the array of users
  //   return rows;
  // }

  async update(id, user) {
    // Execute the SQL INSERT query to add a new user to the "user" table
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET brand = ? , engine = ?, image = ? , attribut_id = ?  WHERE id = ? `,
      [user.brand, user.engine, user.image, user.attribut_id, id]
    );

    // Return the ID of the newly inserted user
    return result.insertId;
  }

  // The U of CRUD - Update operation
  // async update(id, user) {
  //   // Execute the SQL UPDATE query to modify an existing user
  //   const result = await this.database.query(
  //     `UPDATE ${this.table} SET brand=?, engine=?, image=?, attribut_id=? WHERE id=?`,
  //     [user.brand, user.engine, user.image, user.attribut_id, id]
  //   );

  //   // Return the number of affected rows
  //   return result.affectedRows;
  // }

  // TODO: Implement the update operation to modify an existing user

  // async update(user) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  async delete(id) {
    try {
      // Execute the SQL DELETE query to delete a specific user by its ID
      const result = await this.database.query(
        `DELETE FROM ${this.table} WHERE id = ?`,
        [id]
      );

      // Check the affectedRows property to verify if the deletion was successful
      if (result && result.affectedRows > 0)
        return { message: "Delete successful" };
      return { message: "user not found" };
    } catch (error) {
      // Handle the error, log it, etc.
      console.error("Error deleting user:", error.message);
      return { message: "Error deleting user" };
    }
  }
  // TODO: Implement the delete operation to remove an user by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = userManager;
