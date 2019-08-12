const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy(["/api", "/api/stripe", "/auth/google"], {
      target: "http://localhost:5000"
    })
  );
};
