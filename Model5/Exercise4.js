// somewhere in your main file
const express = require('express');
const app = express();
app.use(express.json());     // <<– don’t forget this