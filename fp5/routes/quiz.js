const express = require('express')

const path = require('path')
const fs = require('fs')

const router = express.Router()

router
	.get('/', (req, res) => {
		res.render('pages/homepage')
	})

	.post('/', (req, res) => {

		if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(req.params.email)) {
			res.send("Email Invalido")
		}

		if (typeof req.params.name !== Text) {
			res.send("Nome Invalido")
		}

		if (typeof req.params.Book !== Text) {
			res.send("Livro inválido")
		}

		if (typeof req.params.Description !== Text) {
			res.send("Descriçao Invalida")
		}

		const dbPath = path.resolve('db', 'posts.json')
		const dataRaw = fs.readFileSync(dbPath) || '[]'
		const data = JSON.parse(dataRaw.toString())
		data.push(req.body)
		fs.writeFileSync(dbPath, JSON.stringify(data))

		res.render('pages/review', {
			name: req.body.name,
			email: req.body.email,
			book: req.body.Book,
			description: req.body.Description,
			read: req.body.read
		})
	})

module.exports = router
