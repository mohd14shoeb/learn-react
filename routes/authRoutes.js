const passport = require('passport');

/*
----------------------------------------------------------------------------------
Whenever users come to /auth/google, we want it entirely managed by passport.
We say, hei passport, you check the user comes from that path, and use strategy 'google'
Read more: https://github.com/jaredhanson/passport-google-oauth2

The scope specifies what assets we want to access, in this case is profile and email.
---------------------------------------------------------------------------------- */
module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));
  
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });
  
  app.get('/api/current_user', (req, res) => {
    //res.send(req.session);
    res.send(req.user);
  });
};
