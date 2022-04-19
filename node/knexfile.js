// Update with your config settings.
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'mysql2',
    connection: {
        host : 'node-mysql',
        port : 3306,
        user : 'user',
        password : 'password',
        database : 'node'
    },
    migrations: {
        directory: './database/migrations'
    },
  },
};
