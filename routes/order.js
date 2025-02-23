const express = require('express')
const router = express.Router()

// RETORNA TODOS OS PEDIDOS
router.get('/', (req,res,next)=>{
    res.status(200).send({
        message: 'Retorna os pedidos !'
    })
})


//INSERE UM PEDIDO
router.post('/', (req, res, next) => {
    res.status(201).send({
        message: 'O Pedido foi criado !'
    })
})


//RETORNA OS DADOS DE UM PEDIDO
router.get('/:id_product', (req, res, next)=> {
    const id = req.params.id_order
    res.status(200).send({
        message: 'Detalhes do pedido !',
        id: id
    })
})


//EXCLUI UM PRODUTO
router.delete('/', (req, res, next) => {
    res.status(201).send({
        message: 'PEDIDO EXCLUIDO !'
    })
})


module.exports = router