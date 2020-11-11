//O que o app faz? 
//o que é instanciar?

const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./models/repository')

db.connect() //inserir caminho do bd - ativar o banco, conectar do repositoro

app.use(cors())//
app.use(express.json())







//usar rotas

const index = require("./routes/index")
const contatos = require("./routes/contatosRoutes")
//const { db } = require('./models/contatosSchema')

app.use("/", index) //chama index
app.use("/contatos", contatos) //contatos


module.exports =  app 