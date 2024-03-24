// const { Pool } = require('pg')

// const pool = new pool({
//   host: 'localhost',
//   user: 'postgres',
//   port: 5453,
//   password: 'example',
//   max: 20,
//   idleTimeoutMillis: 30000,
//   connectionTimeoutMillis: 2000,
// })

// module.exports = pool;

const { Pool } = require('pg');


const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'example',
  port: 5433,
});

module.exports = pool;