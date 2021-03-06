// Update with your config settings.
m// path utilizamos para lidar com caminhos dentro do nodeJS
const path = require('path');

module.exports = {

  development: {
  //   client: 'sqlite3',
  //   connection: {
  //     filename: path.resolve(__dirname,'src',  'database', 'database.sqlite3'),
  //   },
  //   migrations: {
  //     directory: path.resolve(__dirname,'src',  'database', 'migrations'),
  //   },
  //   useNullAsDefaund: true,
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '',
      database : 'authNode'
    },
    migrations: {
      tableName: 'knex_migrations',
      //informando onde as migrations serão criadas 
      directory: path.resolve(__dirname, 'src', 'database','migrations')
    }
  },
};
