

import dotenv from "dotenv";
dotenv.config();
import mysql from "mysql2/promise";

const urlDB =`mysql://root:qnpqBogzDcJrosOlXHWkUHzSsLoiaXhA@mysql.railway.internal:3306/railway`

//to connect to mysql server
const mySqlDB = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});
export { mySqlDB};
