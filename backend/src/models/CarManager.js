const AbstractManager = require("./AbstractManager");

class CarManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "car" });
  }

  // The C of CRUD - Create operation

  async create(car) {
    // Execute the SQL INSERT query to add a new Car to the "Car" table
    const [result] = await this.database.query(
      `insert into ${this.table} (brand,engine,image,fonction_id) values (?, ?, ?, ?)`,
      [car.brand, car.engine, car.image, car.fonction_id]
    );

    // Return the ID of the newly inserted Car
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific Car by its ID
    const [rows] = await this.database.query(
      `SELECT car.*, fonction.*
      FROM ${this.table} RIGHT JOIN fonction ON car.fonction_id = fonction.id
      WHERE car.id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the Car
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all Cars from the "Car" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of Cars
    return rows;
  }

  // The U of CRUD - Update operation
  async update(id, car) {
    // Execute the SQL UPDATE query to modify an existing Car
    const result = await this.database.query(
      `UPDATE ${this.table} SET brand=?, engine=?, image=?, fonction_id=? WHERE id=?`,
      [car.brand, car.engine, car.image, car.fonction_id, id]
    );

    // Return the number of affected rows
    return result.affectedRows;
  }

  // TODO: Implement the update operation to modify an existing Car

  // async update(Car) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an Car by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = CarManager;
