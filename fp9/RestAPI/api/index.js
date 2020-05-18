const express = require('express')

const productsRouter = require('./routes/products')
const usersRouter = require('./routes/users')
const sessionRouter = require('./routes/session')
const apiRouter = express.Router()

/**
 * @swagger
 * /:
 *   get:
 *     description: Returns api status
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: users
 *         schema:
 *           type: string
 *           status: "ok"
 */
apiRouter.get('/', (req, res) => {
	res.send({
		status: 'ok'
	})
})

apiRouter.use('/products', productsRouter)
apiRouter.use(usersRouter)
apiRouter.use(sessionRouter)

module.exports = apiRouter

