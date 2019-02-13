const dev_constants = require('./dev_constants');

// TODO:  Create a config file for ne builds that allow builders to enter
//        username and password for mlab, and secretOrKey for validation

module.exports = {
  mongoURI:'mongodb://' + dev_constants.DB_USER + ':' + dev_constants.DB_PASSWORD + '@ds133275.mlab.com:33275/react-redux-login-demo',
  secretOrKey: dev_constants.SECRET_OR_KEY
}
