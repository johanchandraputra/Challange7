const passport = require("../lib/passport");

const passportAuthenticate = passport.authenticate("jwt", { session: false });

module.exports = {
    passportAuthenticate,
};
