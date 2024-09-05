const ApiServer = require('./server/server');
const config = require('./config/config');
const Sequerlize = require('./database');

const startApplication = async () => {
    try {
        const apiServer = new ApiServer();

        apiServer.initialize().then(() => {
            apiServer.getApplication().listen(config.port, () => {
                console.log(`\nServer listening on port ${config.port}`);
            });
        }).catch((error) => {
            console.log("Error initializing application: ", error);
            throw `Error: ${error}.`;
        });
    } catch (error) {   
        console.log("Error starting application: ", error);
        throw `Error: ${error}.`;
    }
}

startApplication();