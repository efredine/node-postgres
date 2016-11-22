const pg = require("pg");
module.exports = function(settings) {
  return function(sql, params, callback) {
    const client = new pg.Client(settings);
    client.connect((err) => {
      if (err) {
        return console.error("Connection Error", err);
      }
      client.query(sql, params, (err, result) => {
        callback(err, result);
        client.end();
      });
    });

  };
};