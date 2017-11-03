module.exports = function(schema) {
	schema.statics.get = function(req, res) {
		return new Promise(function(resolve, reject) {
			db.model('parameters').findOne({
				user: req.query.user,
				module: req.query.module
			}).then(function(params) {
				db.model('modules').findOne({
					name: req.query.module
				}).then(function(module) {
					var values = {}
					var resp = {}
					for (var i = 0; i < module.parameters.length; i++) {
						value = ""
						if (params) {
							for (var j = 0; j < params.field.length; j++) {
								if (module.parameters[i].name == params.field[j].name) {
									value = params.field[j].value
								}
							}
						}
						values[module.parameters[i].name] = value
					}
					resp.values = values
					resp.parameters = module.parameters
					resolve(resp);
				})
			})
		})
	}
}
