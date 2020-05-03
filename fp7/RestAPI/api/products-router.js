const express = require('express')

const productsController = require('./controllers/productsController')

const productsRouter = express.Router()

/**
 * @swagger
 * /:
 *  get:
 *      descritpion: used to list of products
 *          responses:
 *              '200':
 *                  description: A successful response
 */
productsRouter.get('/', productsController.getAllProducts)

/**
 * @swagger
 * /:productId:
 *  get:
 *      descritpion: used to get product by ID
 *          responses:
 *              '200':
 *                  description: A successful response
 */
productsRouter.get('/:productId', productsController.getProductById)

productsRouter.post('/', productsController.createProduct)
productsRouter.put('/:productId', productsController.updateProduct)

productsRouter.delete('/:productId', productsController.deleteProduct)

module.exports = productsRouter
