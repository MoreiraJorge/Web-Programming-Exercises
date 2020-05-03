const express = require('express')
const multer = require('multer')
const path = require('path')
const fs = require('fs')

const router = express.Router()

var review = require("../controllers/ReviewController.js");

const upload = multer({
	dest: path.resolve('public', 'images')
})


function validationMiddleware(req, _, next) {

	const errors = {}

	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


	if (typeof req.body.name !== 'string') {
		errors.name = "Nome Invalido"
	} else
		if (re.test(req.body.email) == false) {
			errors.email = "Email Invalido"
		} else
			if (typeof req.body.book !== 'string') {
				errors.book = "Livro Invalido"
			} else
				if (typeof req.body.description !== 'string') {
					errors.description = "Descrição Invalida"
				}

	//console.log(re.test(req.body.email));

	if (Object.keys(errors).length) {
		req.errors = errors
	}
	next();
}


router
	.get('/', (req, res) => {
		res.render('pages/homepage')
	})

	.post('/', upload.single('imageFile'), validationMiddleware, (req, res) => {

		if (req.errors) {
			res.status(400)
			res.send(req.errors)
		} else {
			/*
			const dbPath = path.resolve('db', 'posts.json')
			const dataRaw = fs.readFileSync(dbPath) || '[]'
			const data = JSON.parse(dataRaw.toString())
			*/

			/*
			const newData = [
				...data,
				{
					...req.body,
					image: `/images/${ req.file.filename }`,
				}
			]
			
			//data.push(req.body)
			//fs.writeFileSync(dbPath, JSON.stringify(newData))
			

			res.render('pages/review', {
				name: req.body.name,
				email: req.body.email,
				book: req.body.Book,
				description: req.body.Description,
				read: req.body.read,
				image: `/images/${req.file.filename}`
			})
			*/

			review.create(req, res);
		}
	})

module.exports = router
