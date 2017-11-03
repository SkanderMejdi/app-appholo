module.exports = function(schema) {
  schema.statics.set = function(req, res) {
    return new Promise(function(resolve, reject) {
      db.model('parameters').findOne({
        user: req.query.user,
        module: req.query.module
      }).then(function(doc) {
        if (!doc) {
          doc = db.model('parameters')({
            user: req.query.user,
            module: req.query.module,
            field: []
          });
        }
        for (var i = 0; i < doc.field.length; i++) {
          if (doc.field[i].name == req.query.name) {
            doc.field.splice(i, 1)
            i -= 1
          }
        }
        doc.field.push({
          name: req.query.name,
          value: req.query.value
        });
        doc.save().then(function (resp) {
          resolve("Parameters saved")
        }, function (err) {
          return reject("The following arguments are missing: " + Object.keys(err.errors).toString())
        })

      });
    })
  }
};
