const AbstractManager = require("./AbstractManager");

class attributManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "attribut" });
  }

  // The C of CRUD - Create operation

  async create(attribut) {
    // Execute the SQL INSERT query to add a new attribut to the "attribut" table
    const [result] = await this.database.query(
      `insert into ${this.table} (label) values (?)`,
      [attribut.label]
    );

    // Return the ID of the newly inserted attribut
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific attribut by its ID
    const [rows] = await this.database.query(
      `SELECT attribut.*, attribut.*
      FROM ${this.table} RIGHT JOIN attribut ON attribut.attribut_id = attribut.id
      WHERE attribut.id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the attribut
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all attributs from the "attribut" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of attributs
    return rows;
  }

  // The U of CRUD - Update operation
  async update(id, attribut) {
    // Execute the SQL UPDATE query to modify an existing attribut
    const result = await this.database.query(
      `UPDATE ${this.table} SET brand=?, engine=?, image=?, attribut_id=? WHERE id=?`,
      [
        attribut.brand,
        attribut.engine,
        attribut.image,
        attribut.attribut_id,
        id,
      ]
    );

    // Return the number of affected rows
    return result.affectedRows;
  }

  // TODO: Implement the update operation to modify an existing attribut

  // async update(attribut) {
  //   ...
  // }

  // The D of CRUD - Delete operation

  // TODO: Implement the delete operation to remove an attribut by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = attributManager;
