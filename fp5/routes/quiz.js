const express = require('express')

const path = require('path')
const fs = require('fs')

const router = express.Router()

router
	.get('/', (req, res) => {
		const dbPath = path.resolve('db', 'posts.json')
		const dataRaw = fs.readFileSync(dbPath) || '[]'
		const data = JSON.parse(dataRaw.toString())
		res.render('pages/homepage', { list: data.reverse() })
	})

	.post('/', (req, res) => {
		const dbPath = path.resolve('db', 'posts.json')
		const dataRaw = fs.readFileSync(dbPath) || '[]'
		const data = JSON.parse(dataRaw.toString())
		data.push(req.body)
		fs.writeFileSync(dbPath, JSON.stringify(data))
		res.render('pages/homepage', {
			success: true,
			list: data.reverse()
		})
	})

module.exports = router
