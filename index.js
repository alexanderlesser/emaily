const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");

const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI);
const app = express();
// calling express as a function generates
// a new application that represents a running express app.

// body parser middlewear
app.use(bodyParser.json());

// cookiesession init
app.use(
  cookieSession({
    // maxAge defines how long the cookie can exist in the browser before it expires
    //keys encrypts the cookie
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days til it expires need to be in ms
    keys: [keys.cookieKeyOne],
    keys: [keys.cookieKeyTwo],
    keys: [keys.cookieKeyThree],
  })
);

// telling express to use cookies
app.use(passport.initialize());
app.use(passport.session());

// calling authRoute
require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);

const PORT = process.env.PORT || 5000;
// environment variables ||
app.listen(PORT);
