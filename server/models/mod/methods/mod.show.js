module.exports = function(schema) {
    schema.statics.show = function(req, res) {
	return new Promise(function (resolve, reject) {
	    db.model('mod').find().then(resolve, reject);
	})
    }
}
