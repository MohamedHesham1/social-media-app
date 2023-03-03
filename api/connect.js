import mysql from "mysql";

export const db = mysql.createConnection({
  host: "sql8.freesqldatabase.com",
  user: "sql8602690",
  password: "YFST5F7xsC",
  database: "sql8602690",
  port: "3306",
});
console.log(db);
