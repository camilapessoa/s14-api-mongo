//O que o app faz? 
//o que é instanciar?

const express = require('express')
const app = express()
const cors = require('cors')
//const router = require('.src/routes/')

app.use(cors())//
app.use(express.json())



//inserir caminho do bd



//usar rotas

const index = require("./routes/index")
const contatos = require("./routes/contatosRoutes")

app.use("/", index) //chama index
app.use("/contatos", contatos) //contatos


module.exports = {
  app
}