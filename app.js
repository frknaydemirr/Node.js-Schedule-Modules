var http = require("http");
const routes= require("./routes")



//Url ye göre farklı sonuçları nasıl  üretiriz:
var server = http.createServer(routes);

server.listen(3000);

console.log("node.js server at port 3000");