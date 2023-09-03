const express = require('express');
const Controller = require('./Controllers/Controller')
const Routes = express.Router();

Routes.get('/bandao', Controller.bandao)

module.exports = Routes