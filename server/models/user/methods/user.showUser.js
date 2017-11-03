module.exports = function(schema) {

    schema.statics.showUser = function(req, res) {
	return new Promise(function(resolve, reject) {
            db.model('user').findOne({
                id: req.query.id
                // active:  true
            }).then(function(doc) {
		resolve(doc);
	    })
	})
    }
}
