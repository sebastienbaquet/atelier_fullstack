const AbstractManager = require("./AbstractManager");

class FonctionManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "fonction" });
  }

  // The C of CRUD - Create operation

  async create(fonction) {
    // Execute the SQL INSERT query to add a new fonction to the "fonction" table
    const [result] = await this.database.query(
      `insert into ${this.table} (brand,engine,image,fonction_id) values (?, ?, ?, ?)`,
      [fonction.brand, fonction.engine, fonction.image, fonction.fonction_id]
    );

    // Return the ID of the newly inserted fonction
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific fonction by its ID
    const [rows] = await this.database.query(
      `SELECT fonction.*, fonction.*
      FROM ${this.table} RIGHT JOIN fonction ON fonction.fonction_id = fonction.id
      WHERE fonction.id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the fonction
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all fonctions from the "fonction" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of fonctions
    return rows;
  }

  // The U of CRUD - Update operation
  async update(id, fonction) {
    // Execute the SQL UPDATE query to modify an existing fonction
    const result = await this.database.query(
      `UPDATE ${this.table} SET brand=?, engine=?, image=?, fonction_id=? WHERE id=?`,
      [
        fonction.brand,
        fonction.engine,
        fonction.image,
        fonction.fonction_id,
        id,
      ]
    );

    // Return the number of affected rows
    return result.affectedRows;
  }

  // TODO: Implement the update operation to modify an existing fonction

  // async update(fonction) {
  //   ...
  // }

  // The D of CRUD - Delete operation

  // TODO: Implement the delete operation to remove an fonction by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = FonctionManager;
