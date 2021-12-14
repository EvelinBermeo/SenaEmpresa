const express = require('express');
const ruta_index= express.Router();
const cont_index= require("../controllers/controller_index");

ruta_index.get("/",cont_index.Renderizar_index);
ruta_index.post("/menuPrincipal",cont_index.Validar_Usuario);



module.exports= ruta_index;