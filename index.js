const express = require('express');
require('dotenv').config()


const app = express();

const port = process.env.PORT
const app_routes = require("./routes/appRoute")
app.use('/',app_routes)
require('./config/dbconnection')



app.listen(port,(req,res)=>{
console.log("Server runnig on " + port);
})