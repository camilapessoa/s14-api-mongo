const app = require('./src/app') //requerer o app
const PORT = 33//criar porta

//const PORT = process.env.PORT \\ 3030 
//Aqui temos uma outra porta. Essa porta está dentro de uma pasta de enviroment(uma pasta escondida falando o quem é a porta, ou seja, chamando uma ouitra variável)


//escutar a porta , aqui é setada

app.listen (PORT, (err) => { 
  if (err) {
    console.log(`Error: ${err}`);
  }
  console.log(`O app está rodando em http://localhost: ${PORT}`);

});   

 /* app.listen(PORT, function () {
  console.log(`Bebe o APP ta rodando na porta ${PORT}`)
})  */
