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

  contatoCollection.findOne({ nome: req.params.nome }, (error, nome) => {

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




//getByid "**/contatos/**id/[ID]" Retorna contato por id específico

const getByid = (req, res) => {

  contatoCollection.findById((req.params.id), (error, id) => {

    if (id) {
      return res.status(200).json({
        mensagem: "ID encontrado",
        id

      })

    } else {
      return res.status(500).send({
        mensagem: "ID não encontrado",
        error
      })
    }
  })
}


//"/contatos/deletar/[_ID]" Deleta contato por id específico e retorna mensagem amigável
const deleteById = (req, res) => {
  const idParam = req.query
  contatoCollection.findByIdAndDelete(idParam, (error, contato) => {
    if (error) {
      return res.status(500).send({
        mensagem: "Algo inesperado aconteceu ao deletar",
        error
      })

    } else {
      if (contato) {
        return res.status(200).send({
          mensagem: "Contato apagado com sucesso"
        })
      } else {
        return res.sendStatus(404)
      }
    }

  })
}

// "/contatos/atualizar/telefone/[ID]" Atualiza somente telefone do contato por id específico e retorna mensagem amigável


// "/contatos/atualizar/[ID]" Atualiza completamente contato e retorna mensagem amigável (id não pode ser modificado)
const updateContact = (req, res) => {
  const idParam = req.query
  const contatoBody = req.body
  const update = { new: true }

  contatoCollection.findByIdAndUpdate(idParam, contatoBody, update, (error, contato) => {

    if (error) {
      return res.status(500).send({
        mensagem: "Algo inesperado aconteceu ao atualizar!",
        error
      })

    } else {
      return res.status(200).send({
        mensagem: "Contato atualizado com sucesso",
        contato
      })
    }


  }
  )
}

//exportar

module.exports = {
  getAll,
  addContato,
  getName,
  getByid,
  updateContact,
  deleteById
}