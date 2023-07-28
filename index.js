//import  express  from "express";
const express = require('express')
const routes = require('./Route/routes')
require('dotenv').config()

const app = express();

app.use(routes);
app.use(express.json());


app.listen(process.env.PORT, () => {
   console.log("Server running on port ", process.env.PORT)
})
