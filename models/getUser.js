const { moduleRunnerTransform } = require("vite");


function getUser(token){
    if(!token) return null;
    try {
         return jwt.verify(token,secret);
    } catch (error) {
        return(null);
    }
}

module.exports = {
     getUser
}