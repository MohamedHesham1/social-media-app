import mysql from "mysql";

export const db = mysql.createConnection({
  host: "http://sql8.freesqldatabase.com/",
  user: "sql8602690",
  password: "YFST5F7xsC",
  database: "sql8602690",
});
console.log(db);
