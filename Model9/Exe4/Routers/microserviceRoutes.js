const express = require('express');
const router = express.Router();
const microserviceController = require('./controllers/microserviceController');

// Define a route for getting data with a query parameter
router.get('/data', microserviceController.getData);

// Define a route for getting data with a URL parameter
router.get('/data/:id', microserviceController.getDataById);

// Define a route for posting data
router.post('/data', microserviceController.postData);

module.exports = router;