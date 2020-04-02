var fs = require("fs");
var data = "";

var readerStream = fs.createReadStream("input.txt");

readerStream.setEncoding("UTF-8");

readerStream.on("data", function(chunk){
    console.log("começou leitura");
    data += chunk;
});

readerStream.on("end", function(){
    console.log("terminou leitura");
    console.log(data);
});

readerStream.on("error", function(err){
    console.log(err.stack);
});

console.log("Program Ended");