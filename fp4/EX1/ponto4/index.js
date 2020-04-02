const express = require("express");
const url = require("url");
const fs = require("fs");

const app = express();

app.get("/home", function(req, res){

    fs.readFile("./index.html", function(err, data){
        if(err) {
            res.writeHead(404, {"content-Type": "text/html"});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {"content-Type": "text/html"});
        res.write(data);
        return res.end();
    });

});

app.get("/page2", function(req, res){

    fs.readFile("./page2.html", function(err, data){
        if(err) {
            res.writeHead(404, {"content-Type": "text/html"});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {"content-Type": "text/html"});
        res.write(data);
        return res.end();
    });

});

app.get("/page3", function(req, res){

    fs.readFile("./page3.html", function(err, data){
        if(err) {
            res.writeHead(404, {"content-Type": "text/html"});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {"content-Type": "text/html"});
        res.write(data);
        return res.end();
    });

});




app.listen(3000, () => {
    console.log("Servidor a correr em: http://localhost:3000/home");
});