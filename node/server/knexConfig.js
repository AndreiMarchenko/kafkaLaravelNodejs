const knex = require('knex')({
    client: 'mysql2',
    connection: {
        host : 'node-mysql',
        port : 3306,
        user : 'user',
        password : 'password',
        database : 'node'
    }
});

module.exports = knex;