module.exports = function(schema) {
	schema.statics.informations = function(req, res) {
		return new Promise(function(resolve, reject) {
			db.model('modules').findOne({
				_id: req.query.id
			}).then(function(doc) {
			resolve(doc);
			})
		})
	}
}
