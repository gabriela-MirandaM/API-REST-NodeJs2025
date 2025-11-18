const { ReasonPhrases, StatusCodes} = require("http-status-codes");

const forbiddenResponse = (res, message= ReasonPhrases.FORBIDDEN)=>{
    return res.status(StatusCodes.FORBIDDEN).json({
        message, 
        status:StatusCodes.FORBIDDEN,
    });
}
const unauthorizedResponse = (res, message= ReasonPhrases.UNAUTHORIZED)=>{
    return res.status(StatusCodes.UNAUTHORIZED).json({
        message, 
        status:StatusCodes.UNAUTHORIZED,
    });
}

module.exports={forbiddenResponse,unauthorizedResponse};