// const JwtStrategy = require("passport-jwt").Strategy;
// const ExtractJwt = require("passport-jwt").ExtractJwt;
// const passport = require("passport");
// const userUseCase = require("../usecases/user.usecase");

// passport.use(
//   new JwtStrategy(
//     {
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//       secretOrKey: process.env.JWT_SECRET,
//     },
//     async (jwtPayload, done) => {
//       try {
//         const user = await userUseCase.findUserById(jwtPayload.userId);
//         if (!user) {
//           return done(null, false);
//         }
//         return done(null, user);
//       } catch (error) {
//         return done(error, false);
//       }
//     }
//   )
// );

// module.exports = passport;
