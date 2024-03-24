const pool = require('../database/config');

const registerProductModel = async () => {
  const sql = `
    SELECT name, price 
    FROM product
  ORDER BY price ASC
  `;
  const result = await pool.query(sql);
  console.log(result.rows);
  return result.rows;
}

module.exports = registerProductModel;