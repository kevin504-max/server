const express = require('express');

const cors = require('cors');
const bodyParser = require("body-parser");
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

class ApiServer {
    constructor () {}

    restApiConfiguration = async () => {
        const app = express().use(bodyParser.json());

        app.use(helmet());
        app.use(cookieParser());
        app.use(cors({ origin: true, credentials: true }));
        app.use(express.json());
        app.use(express.urlencoded({ extended: false }));

        this.app = app;

        await this.setupRoutes();
    }

    setupRoutes = async () => {
        const router = require('../routes')

        this.app.use('/api/', router);

        this.app.get('*', (request, response) => {
            response.status(200).send(`The application is currently online: ${new Date().toUTCString()}`);
        });    
    }

    initialize = async () => {
        return this.restApiConfiguration();
    }

    getApplication = () => {
        return this.app;
    }
} 

module.exports = ApiServer;