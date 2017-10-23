const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');

const keys = require('./config/keys');

require('./models/User.js'); // Model defined first
require('./services/passport.js');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

/**
 * Make more config to make Express behaves correctly with React.
 */
if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets.
  app.use(express.static('client/build'));

  // Express will serve index.html if it does not see route.
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
