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
      `SELECT car.*, fonction.label as fonction_label
      FROM ${this.table} RIGHT JOIN fonction ON car.fonction_id = fonction.id
      WHERE car.id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the Car
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all Cars from the "Car" table
    const [rows] = await this.database
      .query(`SELECT car.*, fonction.label as fonction_label 
    FROM ${this.table} 
    LEFT JOIN fonction ON car.fonction_id = fonction.id`);

    // Return the array of Cars
    return rows;
  }

  async update(id, car) {
    // Execute the SQL INSERT query to add a new Car to the "Car" table
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET brand = ? , engine = ?, image = ? , fonction_id = ?  WHERE id = ? `,
      [car.brand, car.engine, car.image, car.fonction_id, id]
    );

    // Return the ID of the newly inserted Car
    return result.insertId;
  }

  // The U of CRUD - Update operation
  // async update(id, car) {
  //   // Execute the SQL UPDATE query to modify an existing Car
  //   const result = await this.database.query(
  //     `UPDATE ${this.table} SET brand=?, engine=?, image=?, fonction_id=? WHERE id=?`,
  //     [car.brand, car.engine, car.image, car.fonction_id, id]
  //   );

  //   // Return the number of affected rows
  //   return result.affectedRows;
  // }

  // TODO: Implement the update operation to modify an existing Car

  // async update(Car) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  async delete(id) {
    try {
      // Execute the SQL DELETE query to delete a specific car by its ID
      const result = await this.database.query(
        `DELETE FROM ${this.table} WHERE id = ?`,
        [id]
      );

      // Check the affectedRows property to verify if the deletion was successful
      if (result && result.affectedRows > 0)
        return { message: "Delete successful" };
      return { message: "car not found" };
    } catch (error) {
      // Handle the error, log it, etc.
      console.error("Error deleting car:", error.message);
      return { message: "Error deleting car" };
    }
  }
  // TODO: Implement the delete operation to remove an Car by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = CarManager;
