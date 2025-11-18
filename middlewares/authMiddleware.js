const jwt = require("jsonwebtoken");

require("dotenv").config();

//respuesta a petiones http
const { unauthorizedResponse, forbiddenResponse,}= require("../utils/responseUtils");

const authMiddleware = (req, res, next)=>{
    const token = req.headers["authorization"]?.split(" ")[1];// Extraer el token

    if(!token){
        return unauthorizedResponse(res, "Acceso denegado, token no proporcionado.");
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // verifica el token con la palabra secreta de nuestro .env
        req.user = decoded; //Guardar los datos decodificados en parametro "req.user" para usarlo en las rutas
        next(); //Continuar con la siguiente funcion o ruta
    } catch (error) {
        console.log(error);
        return forbiddenResponse(res, "Token no valido.")
    }
};

module.exports = authMiddleware;