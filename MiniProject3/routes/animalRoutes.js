let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); // index.js

// Adds a GET route to return all animals
router.get('/', (req, res) => {
    Controllers.animalController.getAnimals(res);
})

// Adds a POST route to create a new animal
router.post('/', (req, res) => {
    Controllers.animalController.createAnimal(req.body, res);
})

// Adds a POST route to fetch and populate animals
router.post('/fetch', (req, res) => {
    Controllers.animalController.fetchAnimals(req.body, res);
})

// Adds a PUT route to update an existing animal by id
router.put('/:id', (req, res) => {
    Controllers.animalController.updateAnimal(req.params.id, req.body, res);
})

// Adds a DELETE route to remove an animal by id
router.delete('/:id', (req, res) => {
    Controllers.animalController.deleteAnimal(req.params.id, res);
})

module.exports = router;