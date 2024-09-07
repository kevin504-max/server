const fs = require('fs');
const path = require('path');
const router = require('express').Router();

const routesDirectory = __dirname;
const routeFiles = fs.readdirSync(routesDirectory);

const camelToSnake = (str) => {
    return str.replace(/[A-Z]/g, (letter, index) => {
        return index === 0 ? letter.toLowerCase() : `_${letter.toLowerCase()}`;
    });
};

routeFiles.forEach(file => {
    if (file === 'index.js') return;
    const route = require(path.join(routesDirectory, file));
    let prefix = file.split('Routes.js')[0]
    prefix = prefix.replace('.js', '');
    prefix = camelToSnake(prefix);

    router.use(`/${prefix}`, route);
});

module.exports = router;