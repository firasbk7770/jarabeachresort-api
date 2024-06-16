const express = require('express');
const bodyParser = require('body-parser');
const menuRoutes = require('./routes/menuRoutes');
const path = require('path');
const cors = require('cors');
require('dotenv').config();


const app = express();

// Enable all CORS requests
app.use(cors());

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/menu', menuRoutes);

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
