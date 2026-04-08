"use strict";
let Models = require("../models"); // matches index.js

const getAnimals = (res) => {
    // finds all animals
    Models.Animal.find({})
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const createAnimal = (data, res) => {
    // creates a new animal
    Models.Animal.create(data)
        .then(newAnimal => res.send({ result: 201, data: newAnimal }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const fetchAnimals = (data, res) => {
    // fetches animals from external API and saves to DB
    fetch("http://localhost:3000/animals")
        .then(response => response.json())
        .then(animals => Models.Animal.insertMany(animals))
        .then(saved => res.send({ result: 200, data: saved }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const updateAnimal = (id, data, res) => {
    // updates an existing animal by id
    Models.Animal.findByIdAndUpdate(id, data)
        .then(updatedAnimal => res.send({ result: 200, data: updatedAnimal }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const deleteAnimal = (id, res) => {
    // deletes an animal by id
    Models.Animal.findByIdAndDelete(id)
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

module.exports = {
    getAnimals,
    createAnimal,
    fetchAnimals,
    updateAnimal,
    deleteAnimal
};