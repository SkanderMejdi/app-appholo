module.exports = function(schema) {
	var saltKey = "p7ITyclSqAxsjDC6qpwDIz5FXzVRp84wxSx2R3dT";
	var SHA512 = require('crypto-js/sha512');

	schema.statics.changePassword = function(req, res) {
		return new Promise(function(resolve, reject) {
			if (!req.query.password || !req.query.login) {
				return reject('NO USER/PSW')
			}
			db.model('user').findOne({
				login: req.query.login,
				active: true
			}).then(function(doc) {
				var pass = SHA512(req.query.password + saltKey).toString()
				if (!doc)
					return reject("Failed to authenticate")
				else if (doc.password === pass)
				{
					Object.keys(req.query).forEach(function (key, index) {
						if (key === "password")
							doc[key] = req.query[key];
					})
					doc.save().then(function (resp) {
						return resolve("Password successfully updated")
					}, function (err) {
					return reject("Failed to change password")	
					});
				}
				else
					return reject ("Failed to authenticate")
			}, reject)
			});
	};
}