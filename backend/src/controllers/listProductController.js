const { listProductService } = require('../services');

const listProductController = async (req, res) => {
  try {
    const dataProduct = await listProductService();
  res.status(200).json(dataProduct);
  } catch (error) {
    res.status(500).json({message: "Erro ao listar produtos"});
  }
}

module.exports = listProductController;