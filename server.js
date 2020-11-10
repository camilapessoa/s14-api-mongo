const app = require("./src/app") //requerer o app
const PORT = 3030 //criar porta

//const PORT = process.env.PORT \\ 3030 
//Aqui temos uma outra porta. Essa porta está dentro de uma pasta de enviroment(uma pasta escondida falando o quem é a porta, ou seja, chamando uma ouitra variável)

app.listen(PORT, (err) => { //escutar a porta , aqui é setada
  if (err) {
    console.log(`Error: ${err}`);
  }
  console.log(`O app está rodando em http://localhost:${PORT}`);

}); 