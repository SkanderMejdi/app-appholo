module.exports = function(schema) {

    schema.statics.updateTicket = function(req, res) {
        return new Promise(function(resolve, reject) {
	    db.model('support').findOne({
                id: req.query.id ? req.query.id : 0,
	    }).then(function (doc) {
		if (!doc)
		{
		    db.model('support').findOne({}).sort("-id")
		        .exec(function(err, lastDoc) {
			    db.model('support')({
				id: lastDoc ? lastDoc.id + 1 : 1,
				origin: req.query.login,
				title: req.query.title,
				messages: [{
				    content: req.query.message,
				    Date: new Date,
				    from: req.query.login
				}]
			    }).save().then(function(resp) {
				resolve("Ticket has been created");
			    }, function (err) {
				reject("Ticket could not be created");
			    })
			})
		}
		else
		{
		    doc.closed = false
		    doc.messages.push({
			content: req.query.message,
			date: new Date,
			from: req.query.login
		    })
		    doc.save().then(function (resp) {
			resolve("Ticket has been updated")
		    }, function (err) {
			resolve("Ticket could not be updated")
		    })
		}
	    })
        })
    }
}
