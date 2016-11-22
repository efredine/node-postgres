const settings = require("./settings");
const dbQuery = require("./db")(settings);

// const sql = "SELECT * FROM famous_people WHERE first_name LIKE %$1::text% OR last_name LIKE %$1::text%";
const sql = `SELECT *
  FROM famous_people
  WHERE first_name LIKE $1::text OR last_name LIKE $1::text`;
const params = [`%${process.argv[2]}%`];
dbQuery(sql, params, function(err, result) {
  if (err) {
    throw err;
  }
  console.log(result.rows);
});