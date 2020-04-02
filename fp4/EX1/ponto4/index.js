const express = require("express");
const url = require("url");
const fs = require("fs");

const app = express();

app.use(express.static("public"));



app.listen(3000, () => {
    console.log("Servidor a correr em: http://localhost:3000");
});