module.exports = function(db) {
    var schema = new db.Schema({
	_id: {
	    type: Number,
	    index: true
	},
	id: {
	    type: Number,
	    index: true
	},
	name: {
	    type: String,
	    required: true
	},
    });
    return schema
}
