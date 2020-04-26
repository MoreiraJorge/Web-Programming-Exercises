const express = require('express')

const PORT = process.env.PORT || 3000

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const MONGO_DB_HOST = process.env.MONGO_DB_HOST || 'localhost'
const MONGO_BD_PORT = process.env.MONGO_BD_PORT || 27017
const MONGO_BD_NAME = process.env.MONGO_DB_NAME || 'demo'

const quizRouter = require('./routes/quiz')
const filterRouter = require('./routes/filters')

mongoose
    .connect(
        `mongodb://${MONGO_DB_HOST}:${MONGO_BD_PORT}/${MONGO_BD_NAME}`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then((mongoose) => {
        console.log('connection succesful to mongo')
    })
    .catch(console.error);

const app = express()

app

    .set('view engine', 'ejs')

    .use(express.static('public'))
    .use(express.json())
    .use(express.urlencoded({ extended: true }))


    .use('/', quizRouter)

    .use('/review', filterRouter)

    .listen(PORT, () => {
        console.log(`server started on http://localhost:${PORT}`)
    })
