//Descrição dos tipos de dados e da obrigatoriedade deles. Formato

//chamar o mongoose
const mongoose = require('mongoose')

//chamar o Schema, função pronta
const Schema = mongoose.Schema

//criar o Schema

const contatoSchema = new Schema({
  _id: { 
    type:mongoose.Schema.Types.ObjectId, //tipo de dado de id
    auto: true,
    required: true
  },
  nome:{
    type: String,
    required: true
  },
  celular:{
    type: String, //números que não irá fazer cálculo deve vir como String
    required: true
  },
  dataNascimento:{
    type: Date,
    required: true
  },
  fotoPerfil:{
    type: String, //é String porque é um link
    required: false //não é necessário inserir já que não é obrigatório mas é importante manter para permanecer como autoexplicativo - boas práticas.

  }
})

//criar nome de uma model (contato)
const contatoCollections = mongoose.model('contato', contatoSchema)

//adicionar o schema ao mongo

//exportar
module.exports = contatoCollections


// controller depois



