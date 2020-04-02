//npm run dev
const express = require("express");
const url = require("url");
const fs = require("fs");

const app = express();

app.use(express.static("view"));


app.listen(3000, () => {
    console.log("Servidor a correr em: http://localhost:3000");
});