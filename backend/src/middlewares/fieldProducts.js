const filedProducts = (req, res, next) => {
  const { name, description, price, available } = req.body;
  if (price <= 0) {
    return res.status(400).json({ message: 'price must be greater than zero', status: 400});
  }
  if (!name || !description || !price ) {
    return res.status(400).json({ message: 'all fields are required', status: 400});
  }
  if (typeof name !== 'string' || typeof description !== 'string' || typeof available !== 'boolean') {
    return res.status(400).json({ message: 'invalid data type', status: 400});
  }
  next();
}

module.exports = filedProducts;