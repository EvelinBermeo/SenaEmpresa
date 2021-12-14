const e = require("express");


const controlador={};


controlador.Renderizar_index=(req,res)=>{
    res.render("menuPrincipal.ejs");
}

    controlador.Validar_Usuario=(req,res)=>{


        var login= req.body.login;
        var password= req.body.password;

        if(login=="Evelin" && password=="123")
        {
            res.render("menuPrincipal.ejs")
        }
        else{
            res.send("<h1>Usuario no autoizado</h1>")
        }


    }



module.exports=controlador;