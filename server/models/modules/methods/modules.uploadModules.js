module.exports = function(schema) {

    schema.statics.uploadModule = function(req, res) {
        return new Promise(function (resolve, reject) {
          db.model('modules').findOne({
              name: req.query.name,
          }).then(function(doc) {
              if (!doc)
	      {
		  db.model('support').findOne({}).sort("-id")
		      .exec(function(err, lastDoc) {
			  var doc = db.model('modules')({
			      id: lastDoc ? lastDoc.id + 1 : 1,
			      name: req.query.name,
			      description: req.query.description,
			      date: new Date(),
			      version: req.query.version,
			      path: req.query.path,
							 theme: req.query.theme,
							 author: req.query.author,
            status: true,
			  });
        req.query.screenshots.forEach(function(elem) {
          doc.screenshots.push({
            path: elem
          });
        })
        i = 0;
        req.query.names.forEach(function(name) {
          doc.parameters.push({
            name: name,
            ptype: req.query.types[i++]
          });
        })
        doc.save().then(function (resp) {
            resolve("Your module has been successfully uploaded")
        }, function (err) {
            return reject("The following arguments are missing: " + Object.keys(err.errors).toString())
        })
		      })
              }
              else
                  return reject("Module with this name already exist");
          }, reject)
        });
    };
}
