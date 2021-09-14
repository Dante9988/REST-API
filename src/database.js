const knex = require("knex");

const DATABASE_PASSWORD = require(process.env.DB_PASSWORD);
const LOCALHOST_IP = require(process.env.LOCALHOST);
const USER = require(process.env.USERNAME)
const DATABASE = require(process.env.DATABASE_NAME)


const database = knex({
  client: "pg", // pg is the database library for postgreSQL on knexjs
  connection: {
    host: LOCALHOST_IP, // Your local host IP
    user: USER, // Your postgres user name
    password: DATABASE_PASSWORD, // Your postgres user password
    database: DATABASE // Your database name
  }
});

module.exports = database;