module.exports = function(db) {

  var parameters = new db.Schema({
    field: [{
      name: String,
      value: String
    }],
    user: {
      type: String,
      required: true
    },
    module: {
      type: String,
      required: true
    },
  });

  db.model('Parameters', parameters)

  return parameters
}
