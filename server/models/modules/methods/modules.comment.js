module.exports = function(schema) {
    schema.statics.comment = function(req, res) {
        return new Promise(function(resolve, reject) {
	    db.model('modules').findOne({
		_id: req.query.id,
            }).then(function(doc){
		if (!doc)
		    reject("No module corresponding to this name")
		else
		{
		    doc.commentary.push({
			content: req.query.content,
			from: req.query.from,
			date: new Date,
		    });
		    doc.save().then(function (resp) {
			resolve("The comment has been added");
		    }, function (err) {
			reject("The comment could not be added");
		    })
		}
	    })
        })
    }
}
