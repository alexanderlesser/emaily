const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");
const { use } = require("passport");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
  // calling done
  // null = err object
  //user.id = mongo _id
});

passport.deserializeUser((id, done) => {
  // when calling deserialize we get whatever have been in the cookie which is the user.id
  User.findById(id).then((user) => {
    done(null, user);
  });
  // find user by id and deserialize the userId
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      // check if user id already exists
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        // if we have a record with same id
        done(null, existingUser);
      } else {
        // get google id and save it in the user model
        const user = await new User({ googleId: profile.id }).save();
        done(null, user);
      }
    }
  )
);
// new GoogleStrategy creates a new instance of the google passport strategy
// basically tells it that we want to authenticate with google oauth

// passport.use() sets the strategy that we want to use with passport.

passport.use(
  new FacebookStrategy(
    {
      clientID: keys.facebookClientID,
      clientSecret: keys.facebookClientSecret,
      callbackURL: "/auth/facebook/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ facebookId: profile.id }).then((existingUser) => {
        if (existingUser) {
          // if we have a record with same id
          done(null, existingUser);
        } else {
          // get facebook id and save it in the user model
          new User({ facebookId: profile.id })
            .save()
            .then((user) => done(null, user));
        }
      });
    }
  )
);
