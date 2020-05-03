const express = require('express')
const DocRouter = express.Router()

const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const swaggerDefinition = {
    info: {
        title: 'REST api',
        version: '1.0.0',
        description: 'Endpoints to test the routes',
    },
    host: 'localhost:3000'
};

const options = {
    swaggerDefinition,
    apis: ['./*.js']
};

DocRouter.get('/swagger.json', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});

const swaggerSpec = swaggerJsDoc(options)

DocRouter.use("/", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

module.exports = DocRouter