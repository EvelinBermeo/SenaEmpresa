const express= require('express');
const bodyparser= require("body-parser");

const Servidor = express();

Servidor.use(express.static(__dirname + '/public'));

Servidor.use(bodyparser.json());
Servidor.use(express.urlencoded({extended:false}));

Servidor.set('view engine','ejs'); 
Servidor.set('views',__dirname+ '/views');

Servidor.use(require("./routes/route_index"));


Servidor.listen(2000,()=>{
    console.log("El servidor esta ejecutando en el puerto 2000");
});

 

