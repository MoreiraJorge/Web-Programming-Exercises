const express = require('express')

const productsRouter = require('./products-router')
const DocRouter = require('./api-doc-router')

const apiRouter = express.Router()

/**
 * @swagger
 * /:
 *  get:
 *      descritpion: used to get api status
 *          responses:
 *              '200':
 *                  description: A successful response
 */
apiRouter.get('/', (req, res) => {
	res.send({
		status: 'ok'
	})
})

apiRouter.use('/products', productsRouter)
apiRouter.use('/doc', DocRouter)

module.exports = apiRouter
