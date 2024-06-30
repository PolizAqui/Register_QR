const { REGISTER } = require('../global/_var.js')

/******* DEPENDENCY  *******/

const express = require('express')
const route = express.Router();

/******** CONTROLLER  *******/

const saveInfoController = require('../controllers/saveInfo.controller.js')

/******** ROUTER *******/

route.post(REGISTER, saveInfoController.saveUser)


module.exports = route