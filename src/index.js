import express from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import routes from "./router";
import constants from './constants'

const app = express();
app.use(express.json());

const port = constants.PORT || 3002;
const options = {
    definition: {
        openapi: '3.0.2',
        components: {},
        info: {
            title: 'CICD',
            version: '0.0.1',
        },
        servers: [
            {
                "url": `http://ec2-54-76-114-110.eu-west-1.compute.amazonaws.com`,
                "description": "Swagger: dev server"
            },
            {
                "url": `http://localhost:${port}/api`,
                "description": "Swagger: Local server"
            }

            
        ]
    },
    apis: [`${constants.DIST}/router.js`, `${constants.DIST}/*.yaml`]
};


const swaggerSpec = swaggerJSDoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api', routes);
app.get("/api/cicd", (req, res) => {
    return res.send(`Hello!!, Environment details - ${JSON.stringify(constants)}`)
})

app.listen(port, () => console.log(`Listening on Port: ${port}`));
