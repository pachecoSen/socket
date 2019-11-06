"use strict";

const express = require('express'),
    { resolve } = require('path'),
    consola = require('chalk');

const publicPatch = resolve(__dirname, '../../../public');

module.exports = app => {
    app.use(express.static(publicPatch));

    consola.bgYellow('\n\n---------- Starting components ----------');
    ['routes'].forEach(e => {
        try {
            require(`./${ e }`)(app);
            consola.green(`Component '${ e }' loaded successfully`);
        } catch (error) {
            consola.red(`Component '${ e }' not loaded`);
        }
    });
    consola.bgYellow('---------- Finished work ----------\n\n');
}