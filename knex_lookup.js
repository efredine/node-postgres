const settings = require("./settings");
const knex = require('knex')({
  client: 'pg',
  connection: settings
});

const param = `%${process.argv[2]}%`;
knex('famous_people')
.where('first_name', 'like', param)
.orWhere('last_name', 'like', param)
.then(rows => {
  console.log(rows);
})
.catch(err => {
  console.error(err);
})
.finally(() => {
  knex.destroy();
});