const express = require('express')

const path = require('path')
const fs = require('fs')


const PORT = process.env.PORT || 3000
const app = express()

const quizRouter = require('./routes/quiz')

app

    .use(express.static('public'))

    .use(express.json())
    .use(express.urlencoded({ extended: true }))

    .set('view engine', 'ejs')

    .use('/', quizRouter)

    /*
    .get('/review', (req, res) => {
		const dbPath = path.resolve('db', 'posts.json')
		const posts = JSON.parse(fs.readFileSync(dbPath))
		console.log(posts[req.params.reviewId])
		res.render('pages/review', { item: posts[req.params.reviewId] })
	})
    */
   
    .listen(PORT, () => {
        console.log(`server started on http://localhost:${PORT}`)
    })
