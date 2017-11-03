module.exports = function(db) {

    return new db.Schema({
	id: {
	    type: Number,
	    required: true
	},
	firstname: {
	    type: String,
	    required: true
	},
	lastname: {
	    type: String,
	    required: true
	},
	login: {
	    type: String,
	    required: true,
	    index: true
	},
  email: {
	    type: String,
	    required: true,
	    index: true
	},
	password: {
	    type: String,
	    required: true
	},
	picture: {
	    type: String
	},
	modules: [{
	    _id: {type: db.Schema.Types.ObjectId, ref: 'Modules'},
	    active: {type: Boolean, default: true},
	}],
	active: {
	    type: Boolean,
	    default: true
	},
  role: {
	    type: Number,
	    default: 0,
      required: true
	},
    });

}
