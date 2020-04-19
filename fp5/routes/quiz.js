const express = require('express')
const multer = require('multer')

const path = require('path')
const fs = require('fs')

const router = express.Router()


const upload = multer({
	dest: path.resolve('public', 'images')
})


router
	.get('/', (req, res) => {
		res.render('pages/homepage')
	})

	.use(function (req,_,next) {

		const errors = {}

		const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		
		if (re.test(req.body.email) == false) {
			errors.email = "Email Invalido"
		}
		
		console.log(req.body.email);

		
		if (typeof req.body.name !== 'string') {
			errors.name = "Nome Invalido"
		}

		/*
		if (typeof req.body.Description !== 'string') {
			errors.Description = "Descrição Invalida"
		}

		if (typeof req.body.Book !== 'string') {
			errors.Book = "Livro Invalido"
		}

		if (Object.keys(errors).length) {
			req.errors = errors
		}
		*/

		next();
	})

	.post('/', upload.single('imageFile'), (req, res) => {

		if (req.errors) {
			res.status(400)
			res.send(req.errors)
		} else {

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
				read: req.body.read,
				image: `/images/${req.file.filename}`
			})
		}
	})

module.exports = router
