const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require('body-parser')

const routeProducts = require("./routes/products.js");
const routeOrder = require("./routes/order.js");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended: false})) //apenas dados simples
app.use(bodyParser.json()) //Aceita apenas formato JSON de entrada no body

app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin','*' ) //dando permissao para todos, caso fosse um servidor especifico, colocar o link dele nesse *
    res.header(
        'Access-Control-Allow-Header', 
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    ); // O que aceita de cabecalho (propriedades)

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT', 'POST', 'PATCH', 'DELETE', 'GET');
        return res.status(200).send({})
    }

    next();
})

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
