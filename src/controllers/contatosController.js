//precisamos chamar as models, e agora são os schemas e repository

const contatoCollection = require("../models/contatosSchema")

//criar const com nossa função getAll
//recebe req e res - vai buscar dentro do contatoCollection um erro ou contatos - depois inserimos a verificação para mostrar para o user

const getAll = (req, res) => {
  contatoCollection.find((error, contatos) => {
    if (error) {
      return res.status(500).send(error)
    } else {
      return res.status(200).json({
        mensagem: "tudo certo",
        contatos
      })
    }
  })
}

//add contato POST
//recebe uma req e res
//criar uma const para o Body
//criar um novo dado no nosso Schema
//salvar e tratar o erro
//status 400 bad request

const addContato = (req, res) => {
  const contatoDoBody = req.body //isso significa que o user vai inserir um dado no corpo. Vamos receber e inserir na var contatoDoBody
  const contato = new contatoCollection(contatoDoBody)//criando um novo dado com o body

  contato.save((error) => {
    if (error) {
      return res.status(400).send(error)
    } else {
      return res.status(200).send({
        mensagem: "POST com sucesso",
        contato
      })
    }
  })

}

//mongo não verifica se a pessoa não colocou todos os campos. Apenas se solicitarmos no Schema a obrigatoriedade dos campos. Caso usuário não insira, irá retornar como  erro


//getName
const getName = (req, res) => {

  contatoCollection.findOne( {nome: req.params.nome},(error, nome) => {

    
    if (nome) {
      return res.status(200).json({
        mensagem: "Nome encontrado",
        nome
          
      })
      
    } else {
      return res.status(500).send({
        mensagem: "Contato não encontrado",
        error
      })
    }
  })
} 

/* const getName = (req, res) => {
  const { element } = req.params
  const name = contatoCollection.findOne(name => name.element === element) 
    return res.status(200).json

  } */








//getByid
const getByid = (req, res) => {
  const { idParam } = req.params

  contatoCollection.findById(idParam, (error, Id) => {
    if (error) {
      return res.status(500).send(error)
    } else {
      return res.status(200).json({
        mensagem: "ID encontrado",
        Id
      })

    }
  })
}




//exportar

module.exports = {
  getAll,
  addContato,
  getName,
  getByid
}