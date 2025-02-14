import mysql from "mysql2/promise";

const db = await mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "2004",
  database: "world",
});

export default db;
