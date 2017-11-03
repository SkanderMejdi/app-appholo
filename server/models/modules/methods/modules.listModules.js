module.exports = function(schema) {

    schema.statics.listModules = function(req, res){
	return new Promise(function(resolve, reject) {
            db.model('modules').find(req.body).then(function(doc){
		resolve(doc);
            })
	})
    }
}
