const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const authRoutes = require('./routes/authRoutes.js');
const keys = require('./config/keys.js');

require('./models/User.js'); // Model defined first
require('./services/passport.js');

mongoose.connect(keys.mongoURI);

const app = express(); 

app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [keys.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
