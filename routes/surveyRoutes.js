const mongoose = require('mongoose');
const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

const Survey = mongoose.model('surveys');
/**
 * We have to make sure user logged in and has credits.
 * But remember, the order of middlewares is important.
 */
module.exports = app => {
  app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now()
    });
  });
};
