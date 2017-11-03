module.exports = function(schema) {

    schema.statics.showTicket = function(req, res) {
        return new Promise(function(resolve, reject) {
	    db.model('support').findOne({
                id: req.query.id,
	    }).then(function (doc) {
		if (!doc)
		    reject("No support ticket correspond to your request")
		else
		    resolve(doc);
	    })
        });
    };
}
