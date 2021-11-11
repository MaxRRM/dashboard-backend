const passport = require('passport');

const LocalStrategy = require('./strategies/local.strategy');
const JwtStragey = require('./strategies/jwt.strategy');

passport.use(LocalStrategy);
passport.use(JwtStragey);
