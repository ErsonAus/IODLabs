const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const animalSchema = new Schema({
    title: { type: String, trim: true, required: true },
    sciName: { type: String, trim: true, required: true, unique: true },
    countryOfOrigin: { type: String, trim: true, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("animals", animalSchema);