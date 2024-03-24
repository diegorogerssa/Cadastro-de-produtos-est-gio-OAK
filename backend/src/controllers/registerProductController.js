const { registerproductService } = require('../services');
  
const registerProductController = (req, res) => {
  const dataProduct = { 
    name, 
    description, 
    price, 
    available 
  } = req.body;
try {
  registerproductService(dataProduct);
  res.status(200).json({message:"Produto cadastrado com sucesso!"});
} catch (error) {
  res.status(500).json({message:'Erro ao cadastrar produto'});
}
}

  module.exports = registerProductController;
