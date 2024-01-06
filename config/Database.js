import { Sequelize } from "sequelize";

const db = new Sequelize("db-certify", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
