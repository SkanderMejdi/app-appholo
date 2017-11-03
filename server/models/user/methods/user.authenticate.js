module.exports = function(schema) {
    var saltKey = "p7ITyclSqAxsjDC6qpwDIz5FXzVRp84wxSx2R3dT";
    var SHA512 = require('crypto-js/sha512');

    schema.statics.authenticate = function(req, res) {
        return new Promise(function(resolve, reject) {
	    if (!req.body.password || !req.body.login) {
                return reject('NO USER/PSW')
            }
            db.model('user').findOne({
                login: req.body.login,
                active: true
            }).then(function(doc) {
                var pass = SHA512(req.body.password + saltKey).toString()
                if (!doc)
                    return reject("Failed to authenticate")
		else if (doc.password === pass)
                    return resolve(doc)
                else
                    return reject("Failed to authenticate")
            }, reject)
        });

    };
}
