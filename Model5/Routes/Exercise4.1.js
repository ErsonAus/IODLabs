// filepath: Exercise4.js
const express = require("express");
const router = express.Router();

// require the controller that contains the actual logic
const controller = require('../Routes/Execontroller');

// default endpoint, gets all friends
router.get('/', controller.getAll);

// filter endpoint, gets friends matching gender/letter query parameters
router.get('/filter', controller.filter);

// info endpoint – return a few headers from the request
router.get('/info', controller.info);

// dynamic ID endpoint – returns a single friend or 404
router.get('/:id', controller.getById);

// add a new friend
router.post('/', controller.add);

// update an existing friend
router.put('/:id', controller.update);

module.exports = router; // export the router so index.js can use it