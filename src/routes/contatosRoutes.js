const express = require('express')
const router = express.Router() //ainda estamos trabalhando com rotas
const controller = require("../controllers/contatosController")

router.get("/", controller.getAll) //a rota precisa de uma função para ser executada

router.post("/criar", controller.addContato)

router.get("/nome/:nome",controller.getName)

router.get("/id/:id", controller.getByid)


module.exports = router;