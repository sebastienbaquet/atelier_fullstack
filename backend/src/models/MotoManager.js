const AbstractManager = require("./AbstractManager");

class MotoManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "moto" });
  }

  // The C of CRUD - Create operation

  async create(moto) {
    // Execute the SQL INSERT query to add a new moto to the "moto" table
    const [result] = await this.database.query(
      `insert into ${this.table} (brand,engine,image,attribut_id) values (?, ?, ?, ?)`,
      [moto.brand, moto.engine, moto.image, moto.attribut_id]
    );

    // Return the ID of the newly inserted moto
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific moto by its ID
    const [rows] = await this.database.query(
      `SELECT moto.*, attribut.label as attribut_label
      FROM ${this.table} RIGHT JOIN attribut ON moto.attribut_id = attribut.id
      WHERE moto.id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the moto
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all motos from the "moto" table
    const [rows] = await this.database
      .query(`SELECT moto.*, attribut.label as attribut_label 
    FROM ${this.table} 
    LEFT JOIN attribut ON moto.attribut_id = attribut.id`);

    // Return the array of motos
    return rows;
  }

  async update(id, moto) {
    // Execute the SQL INSERT query to add a new moto to the "moto" table
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET brand = ? , engine = ?, image = ? , attribut_id = ?  WHERE id = ? `,
      [moto.brand, moto.engine, moto.image, moto.attribut_id, id]
    );

    // Return the ID of the newly inserted moto
    return result.insertId;
  }

  // The U of CRUD - Update operation
  // async update(id, moto) {
  //   // Execute the SQL UPDATE query to modify an existing moto
  //   const result = await this.database.query(
  //     `UPDATE ${this.table} SET brand=?, engine=?, image=?, attribut_id=? WHERE id=?`,
  //     [moto.brand, moto.engine, moto.image, moto.attribut_id, id]
  //   );

  //   // Return the number of affected rows
  //   return result.affectedRows;
  // }

  // TODO: Implement the update operation to modify an existing moto

  // async update(moto) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  async delete(id) {
    try {
      // Execute the SQL DELETE query to delete a specific moto by its ID
      const result = await this.database.query(
        `DELETE FROM ${this.table} WHERE id = ?`,
        [id]
      );

      // Check the affectedRows property to verify if the deletion was successful
      if (result && result.affectedRows > 0)
        return { message: "Delete successful" };
      return { message: "moto not found" };
    } catch (error) {
      // Handle the error, log it, etc.
      console.error("Error deleting moto:", error.message);
      return { message: "Error deleting moto" };
    }
  }
  // TODO: Implement the delete operation to remove an moto by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = MotoManager;
