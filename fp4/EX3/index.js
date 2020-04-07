require('dotenv').config();

const express = require('express');
const { parse } = require('url');
const { parse: parseQuery } = require('querystring')

const PORT = process.env.PORT || 3000
const app = express();

app.use(express.static('view'));

app.get('/submission', (req, res) => {
    const q = parse(req.url)
    const query = parseQuery(q.query)
    
})


app.listen(PORT, () => {
	console.log('O servidor arrancou na porta', PORT)
})
