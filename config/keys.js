// keys.js
if (process.env.NODE_ENV === "production") {
  // we are in production
  module.exports = require("./prod");
} else {
  // we are in development
  // dev keys are in dev.js file
  // not committed to Git
  module.exports = require("./dev");
}
