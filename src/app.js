const express = require('express');
const app = express();

require('dotenv').config();

const userRoutes = require('./routes/userRoutes');
app.use(express.json());

app.use('/api', userRoutes);

module.exports = app;
