const axios = require('axios');
require('dotenv').config();

module.exports = {
  data(req, res) {
    axios.get(`https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${process.env.API_KEY}`).then(
      response => {
        res.send(response.data);
      }
    )
  }
}