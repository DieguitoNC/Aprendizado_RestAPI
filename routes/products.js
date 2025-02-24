const express = require('express')
const router = express.Router()

// RETORNA TODOS OS PRODUTOS
router.get('/', (req,res,next)=>{
    res.status(200).send({
        message: 'retorna todos os pedidos'
    })
})


//INSERE UM PRODUTO
router.post('/', (req, res, next) => {

    const product = {
        name: req.body.name,
        price: req.body.price
    };

    res.status(201).send({
        message: 'insere um produto !',
        createdProduct: product
    })
})


//RETORNA OS DADOS DE UM PRODUTO
router.get('/:id_product', (req, res, next)=> {
    const id = req.params.id_product

    if (id==='especial') {
        res.status(200).send({
            message: 'Voce descobriu o ID especial !',
            id: id
        })
    }else{
        res.status(200).send({
            message: "Voce passou um ID"
        })
    }
})

//ALTERA UM PPRODUTO
router.patch('/', (req, res, next) => {
    res.status(201).send({
        message: 'Produto alterado !'
    })
})


//EXCLUI UM PRODUTO
router.delete('/', (req, res, next) => {
    res.status(201).send({
        message: 'PRODUTO EXCLUIDO !'
    })
})


module.exports = router