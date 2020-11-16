const passport = require("passport");

// exporting so it can be used with the express app
module.exports = (app) => {
  // Route handlers
  // starting auth with google
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  // google auth callback
  // passport takes request and resolve it to a profile
  // app.get("/auth/google/callback", passport.authenticate("google")),
  //   (req, res) => {

  //   };

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/surveys");
    }
  );

  //starting auth with facebook
  app.get(
    "/auth/facebook",
    passport.authenticate("facebook", {
      scope: ["email"],
    })
  );

  //facebook auth callback
  app.get(
    "/auth/facebook/callback",
    passport.authenticate("facebook"),
    (req, res) => {
      res.redirect("/surveys");
    }
  );

  // user logout
  app.get("/api/logout", (req, res) => {
    req.logout();
    // takes cookie and kills the id
    res.redirect("/");
  });

  // user login
  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
