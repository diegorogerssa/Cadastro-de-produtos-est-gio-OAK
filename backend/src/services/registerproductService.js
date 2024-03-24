
const { registerProductModel } = require('../models');  

const registerproductService = (dataProduct) => {
  const { price } = dataProduct;

  const newDataProduct = {
    ...dataProduct,
    price: parseInt(price)
  }
console.log(newDataProduct);
const result = registerProductModel(newDataProduct);
  return result;
}

  module.exports = registerproductService;
