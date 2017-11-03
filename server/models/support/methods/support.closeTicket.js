module.exports = function(schema) {

    schema.statics.closeTicket = function(req, res) {
        return new Promise(function(resolve, reject) {
	    db.model('support').findOne({
                id: req.query.id,
	    }).then(function (doc) {
		if (!doc)
		    reject("No support ticket correspond to your request")
		else
		{
		    doc.closed = true
		    doc.save().then(function (resp) {
			resolve("Ticket has been closed")
		    }, function (err) {
			reject("Ticket could not be closed")
		    })
		}
	    })
        })
    }
}
