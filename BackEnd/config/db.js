
// import mysql from "mysql2/promise";
// import dotenv from "dotenv";

// dotenv.config();

// const mySqlDB = await mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   port: process.env.DB_PORT,
// });

// export { mySqlDB };

import mysql from "mysql2/promise";

const mySqlDB = await mysql.createConnection({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT,
});

export { mySqlDB };
