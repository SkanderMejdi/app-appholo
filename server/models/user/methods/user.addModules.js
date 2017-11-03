module.exports = function(schema) {

    schema.statics.addModules = function(req, res) {
	return new Promise(function(resolve, reject) {
            db.model('user').findOne({
                login: req.body.login,
                active: true
            }).then(function(doc) {
		for (var n = 0; n < doc.modules.length; n++)
		{
		    if (doc.modules[n]._id == req.body.module)
			return reject("This user already has this module")
		}
		doc.modules.push({_id: req.body.module, active: false});
		doc.save().then(function (resp2) {
		    return resolve("Module has been added successfully")
		}, function (err) {
		    return reject("Failed to add a new Module")
		});
	    })
	})
    }
}
