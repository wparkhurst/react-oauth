const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/surveys");
    }
  );

  app.get("/auth/azureadoauth2", passport.authenticate("azure_ad_oauth2"));

  app.get(
    "/auth/azureadoauth2/callback",
    passport.authenticate("azure_ad_oauth2", { failureRedirect: "/login" }),
    function(req, res) {
      // Successful authentication, redirect home.
      //  res.redirect("/");
      res.send(req.user);
    }
  );

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
