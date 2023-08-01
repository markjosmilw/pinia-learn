const knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : '10.0.10.43',
      user : 'mark',
      password : 'Mark@1004@cubic',
      database : 'mark_task'
    }
  });

  module.exports = knex

  //mark || Mark@1004@cubic