module.exports = function(schema) {
  schema.statics.list = function(req, res) {
    return new Promise(function(resolve, reject) {
      db.model('user').find(req.query).then(function(doc) {
        resolve(doc);
      })
    })
  }
}
