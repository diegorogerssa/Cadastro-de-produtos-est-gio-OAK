const express = require('express');
const product = require('./productRoute');

const routes = express.Router();

routes.use(product);

module.exports = routes;
  