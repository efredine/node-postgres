const pg = require("pg");
module.exports = function(settings) {
  return function(sql, params, callback) {
    const client = new pg.Client({
      user: settings.user,
      password: settings.password,
      database: settings.database,
      host: settings.hostname,
      port: settings.port,
      ssl: settings.ssl
    });
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