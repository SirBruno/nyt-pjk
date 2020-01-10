const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
require('dotenv').config();
const getData = require('./controllers/getData');

app.use(cors());

app.get('/', getData.data);

app.listen(5000, () => {
  console.log('running on http://localhost:5000');
});