var express = require("express"); /*chama o componente principal*/
var app = express(); /*carrega a biblioteca*/
var port = process.allowedNodeEnvironmentFlags.PORT || 3000; //porta para rodar//

app.get("/", function(req,res){
res.header("Acesss-Control-Allow-Origin","*");
res.send("Olá!");
});

app.listen(port, () => {
 console.log('ok, rodando com a porta ${port}')
});