const fetch = require('node-fetch'); // Importing fetch for making API calls
const AnimalModel = require('../models/animalModel'); // Importing the AnimalModel for database interactions

// Function to fetch animal data from an external API and seed the database
async function fetchAndSeed() {
    try {
        const response = await fetch('http://localhost:3000/animals');
        const animals = await response.json(); // Parsing the JSON response

        // Loop through the fetched animals and save them to the database
        for (const animal of animals) {
            const animalData = new AnimalModel(animal); // Create a new instance of AnimalModel
            await animalData.save(); // Save the animal data to the database
        }

        console.log('Database seeded with animal data successfully!'); // Success message
    } catch (error) {
        console.error('Error fetching and seeding data:', error); // Error handling
    }
}

module.exports = fetchAndSeed; // Exporting the fetchAndSeed function for use in other modules