const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys.js');

const User = mongoose.model('users');
/**
 * 
 */
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id).then(function (user) {
    done(null, user);
  });
});

/**
 * ----------------------------------------------------------------------------------
 * The part new GoogleStrategy() creates new instance of passport-google-oauth20, 
 * passport.use() something like register, passport, I want you to be aware that users 
 * can use GoogleStrategy.
 * 
 * Go to console.developers.google.com, the OAuth2.0 is under Google+ API (thanks, G!)
 * ----------------------------------------------------------------------------------
 */
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleID: profile.id }).then( function (existingUser) {
        // existingUser is the { googleID: profile.id } returned
        if (existingUser) {
          // If we found, stop.
          // null is the err, everything good
          console.log('Welcome back!');
          done(null, existingUser);
        } else {
          // If we can not find, let's create new one.
          new User({ googleID: profile.id }).save()
            .then(function (user) {
              done(null, user);
            });
        }
      });
    }
  )
);
