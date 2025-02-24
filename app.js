const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require('body-parser')

const routeProducts = require("./routes/products.js");
const routeOrder = require("./routes/order.js");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended: false})) //apenas dados simples
app.use(bodyParser.json()) //Aceita apenas formato JSON de entrada no body

app.use("/products", routeProducts);
app.use("/order", routeOrder);

//Quando nao encontra rota, entra aqui

app.use((req, res, next) => {
    const erro = new Error('Não encontrado');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    });
});

module.exports = app;
