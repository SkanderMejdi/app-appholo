module.exports = function(schema) {
  var saltKey = "p7ITyclSqAxsjDC6qpwDIz5FXzVRp84wxSx2R3dT";
  var SHA512 = require('crypto-js/sha512');
  schema.statics.createAccount = function(req, res) {
    return new Promise(function(resolve, reject) {
      db.model('user').findOne({
        login: req.query.login,
      }).then(function(doc) {
        var pass = SHA512(req.query.password + saltKey).toString()
        if (!doc)
        {
          db.model('support').findOne({}).sort("id")
          .exec(function(err, lastDoc) {
            db.model('user')({
              role: req.query.role,
              login: req.query.login,
              email: req.query.email,
              password: pass,
              firstname: req.query.firstname,
              lastname: req.query.lastname,
              picture: req.query.picture,
              active: true,
            }).save().then(function (resp) {
              resolve("You account has been successfully created")
            }, function (err) {
              return reject("The following arguments are missing: " + Object.keys(err.errors).toString())
            })
          })
        }
        else
        return reject('User with this login already exist');
      }, reject)
    });
  };
}
