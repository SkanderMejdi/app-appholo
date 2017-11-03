module.exports = function(schema) {
	schema.statics.findUser = function(req, res) {
		return new Promise(function(resolve, reject) {
			db.model('user').findOne({
				id: req.query.id
			}).then(function(doc) {
				resole(doc);
			})
		})
	}
}