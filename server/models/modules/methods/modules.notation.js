module.exports = function(schema) {

    schema.statics.notation = function(req, res){
        return new Promise(function(resolve, reject){
            db.model('modules').findOne({
                id: req.query.id,
            }).then(function(doc){
		if (!doc)
		    reject("No module corresponding to this name")
		else
		{
		    var grades = 0
		    var nb = 0
		    for (var n = 0; n < doc.commentary.length; n++)
		    {
			if (doc.commentary[n].grade > 0)
			{
			    grades += doc.commentary[n].grade
			    nb += 1
			}
		    }
		    resolve("The module: " + doc.name + " currently has an average of " + (grades / nb));
		}
            })
        })
    }
}
