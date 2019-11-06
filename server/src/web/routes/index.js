"use strict";

const consola = require('chalk')

const routes = ['redirect'];

module.exports = app => routes.forEach(r => {
    try {
        require(`./${ r }`)(app);
        consola.green(`Route '${ r }' loaded successfully`);
    } catch (error) {
        consola.red(`Route '${ r }' not loaded`);
    }
});