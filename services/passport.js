const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const AzureAdOAuth2Strategy = require("passport-azure-ad-oauth2");
const mongoose = require("mongoose");
const keys = require("../config/keys.js");
const jwt = require("jsonwebtoken");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        // we already have a record with the given profile // ID
        return done(null, existingUser);
      }

      // we don't have a user record with this ID, make a new record
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);

passport.use(
  new AzureAdOAuth2Strategy(
    {
      clientID: keys.azureClientID,
      clientSecret: keys.azureClientSecret,
      callbackURL: "/auth/azureadoauth2/callback",
      resource: keys.azureResourceID,
      tenant: keys.azureTenantID
    },
    async (accessToken, refresh_token, params, profile, done) => {
      var waadProfile = jwt.decode(params.id_token, "", true) || profile;

      const existingUser = await User.findOne({ azureId: waadProfile.oid });

      if (existingUser) {
        // we already have a record with the given profile // ID
        return done(null, existingUser);
      }

      // we don't have a user record with this ID, make a new record
      const user = await new User({ azureId: waadProfile.oid }).save();
      done(null, user);
    }
  )
);
