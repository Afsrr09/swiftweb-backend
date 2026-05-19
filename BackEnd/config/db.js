

import dotenv from "dotenv";
dotenv.config();
import mysql from "mysql2/promise";

const urlDB =`mysql://root:qnpqBogzDcJrosOlXHWkUHzSsLoiaXhA@mysql.railway.internal:3306/railway`

//to connect to mysql server
const mySqlDB = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Anarul7861@',
  database: 'swiftweb_db',
});
export { mySqlDB};
