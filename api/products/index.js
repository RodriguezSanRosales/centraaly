const express = require('express');
const productsRouter = express.Router();

//Middlewares
const getProducts = require('./getProducts');
const createProducts = require('./createProducts')

//methods
productsRouter.get('/', getProducts);
productsRouter.post('/', createProducts);

module.exports = productsRouter;

