const settings = require("./settings");
const knex = require('knex')({
  client: 'pg',
  connection: settings
});

knex('famous_people')
.returning('id')
.insert({
  first_name: process.argv[2],
  last_name: process.argv[3],
  birthdate: process.argv[4]
})
.then(result => {
  console.log(result);
})
.catch(err => {
  console.error(err);
})
.finally(() => {
  knex.destroy();
});