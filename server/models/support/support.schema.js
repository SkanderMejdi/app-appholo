module.exports = function(db) {

    return new db.Schema({
	id: {
	    type: Number,
	    index: true,
	    required: true
	},
	title: {
	    type: String,
	    required: true
	},
	origin: {
	    type: String,
	    required: true
	},
	messages: [{
	    content: String,
	    from: String,
	    date: Date
	}],
	closed: {
	    type: Boolean,
	    default: false
	}
    });
}
