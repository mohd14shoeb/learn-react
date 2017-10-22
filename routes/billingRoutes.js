const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripSecretKey);

module.exports = app => {
  app.post('/api/stripe', (req, res) => {
    console.log(req.body);
  });
};
