const express = require('express');
const app = express();
const routeProducts = require('./routes/products.js')
const routeOrder = require('./routes/order.js')

app.use('/products', routeProducts)
app.use('/order', routeOrder)

module.exports = app