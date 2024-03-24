const { listProductModel } = require('../models');

const listProductService = async () => {
  const result = await listProductModel();
  return result;
}

module.exports = listProductService;