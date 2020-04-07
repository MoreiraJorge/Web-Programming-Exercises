require('dotenv').config();

const express = require('express');
const { parse } = require('url');
const { parse: parseQuery } = require('querystring')
const fs = require('fs');

const PORT = process.env.PORT || 3000
const app = express();

app.use(express.static('view'));
app.use(express.static('Results'));

//Submit and create file with key
app.get('/submission', (req, res) => {

    const code = codeGen(); 

    const q = parse(req.url);
    const query = parseQuery(q.query);

    let data =`${query.name}
${query.age}
${query.pCode}
${query.foodQ}
${query.priceQ}
${query.serviceQ}
${query.local}`

    const key = `${query.name}-${code}`;

    fs.writeFile(`./Results/${key}.txt`, data, function (err) {
        if (err) throw err;
        console.log('created!');
    });

    res.send(key);
})

//generate number to the key
function codeGen(){
    const max = 50;
    const min = 0;
   return number = Math.random() * (max - min) + min;
}

app.listen(PORT, () => {
    console.log('O servidor arrancou: http://127.0.0.1:5000/');
})
