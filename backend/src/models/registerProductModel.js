const pool = require('../database/config');
  
const registerProductModel = async (dataProduct) => {
  const { name, description, price, available} = dataProduct;
  const sql = `
    INSERT INTO product (
    name, 
    description,
    price,
    available
    ) VALUES ($1, $2, $3, $4)`;
  const values = [name, description, price, available] 
  // const values = [categoriaId];
  const result = await pool.query(sql, values);
  return result;
}

  module.exports = registerProductModel;
