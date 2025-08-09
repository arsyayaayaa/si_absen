import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: "switchyard.proxy.rlwy.net",
  user: "root",
  password: "YPdjsPoQLkEycTmMUmQLNfkkyonhcQoa",
  database: "railway",
  port: 52938
});
