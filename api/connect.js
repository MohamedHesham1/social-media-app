import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "01124100241",
  database: "social",
});
console.log(db);
