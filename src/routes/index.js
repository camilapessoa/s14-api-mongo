const express = require('express');
const router = express.Router();

router.get("/", function(req, res) { //chamo router, função de get, chamo uma function req e res. envio estatus 200 e envio -send o texto
  res.status(200).send({
    titulo: "Agenda de contatos - {Reprograma}",
    version: "1.0.0"
  })
})

module.exports = router;