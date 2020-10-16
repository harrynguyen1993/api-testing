const dotenv = require('dotenv');
dotenv.config();
console.log(process.env.PORT);
console.log(process.env.NODE_ENV);
module.exports = {
    ENV: process.env.PORT,
    someEnvKey1 : process.env.PORT,
    someEnvKey2 : process.env.PORT
   };