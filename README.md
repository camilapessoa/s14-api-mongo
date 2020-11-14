# Projeto {Reprograma} - CRUD - API & DATABASE MONGODB

## Atividade semana 14

### Projeto em Aula

Desenvolvimento de uma API "Agenda" para reunir contatos do nosso usuário.

Criar representação visual da sua arquitetura.

### Dados para Collection

- id: autogerado e obrigatório
- nome: texto e obrigatório
- celular: texto e obrigatório
- dataNascimento: data e obrigatório
- fotoPerfil: texto e não obrigatório

API deve retornar seguinte JSON:

    [
      {
        "_id": "5fa6128cb3afb1104017dd1a",
        "nome": "Ana lu",
        "celular": "912345678",
        "dataNascimento": "1996-10-10T02:00:00.000Z",
        "fotoPerfil": "https://linkdafoto.com.br"
      }
    ]


### Essa API deve ter as seguintes rotas:

-- [x]  **"/"** Retorna index com apresentação
{
   mensagem: bem vinda a lista de contatos
}
- [x]  **"/contatos/"** Retorna todos os dados do banco de dados
- [x]  "**/contatos/criar**" Cria novo contato e retorna mensagem amigável
- [x]  "**/contatos/**nome/[NOME]" Retorna contato por nome específico
- [x]  "**/contatos/**id/[ID]" Retorna contato por id específico
- [x]  "/contatos/deletar/[ID]" Deleta contato por id específico e retorna mensagem amigável
- [x]  "/contatos/atualizar/telefone/[ID]" Atualiza somente telefone do contato por id específico e retorna mensagem amigável
- [x]  "/contatos/atualizar/[ID]" Atualiza completamente contato e retorna mensagem amigável (id não pode ser modificado)

## Rotas
http://localhost:33/contatos/

- router.get("/", controller.getAll)

- router.post("/criar", controller.addContato)

- router.get("/nome/:nome",controller.getName)

- router.get("/id/:id", controller.getByid)

- router.put("/atualizar", controller.updateContact)

- router.delete("/deletar", controller.deleteById)

- router.patch("/atualizar/:telefone", controller.updatePhone)
      
      Arquitetura MVC
      \--📂 CONTATOS-SERVIDOR
          |   .gitignore
          |   package-lock.json
          |   package.json
          |   **server.js**
            \--📂 node_modules
            \--📂src
                |   **app.js**
                |
                📂---controller
                |       **contatosController.js**
                |
                📂---model
                |       **contatosSchema.js
                |       Repository.js**
                |
                📂---routes
                        **contatosRoutes.js
                        index.js**

## Dependências utilizadas
- "cors": "^2.8.5",
- "express": "^4.17.1",
- "mongoose": "^5.10.13",
- "nodemon": "^2.0.6"

## Agradecimentos 
Às colegas:
- <a href="https://github.com/monalizavitor"> Monaliza</a>, que observou atentamente o meu código e me auxiliou a executar o update.
- <a href="https://github.com/tassilabomfim"> Tassila Bomfim</a>, que me auxiliou com a utilização do Postman.
