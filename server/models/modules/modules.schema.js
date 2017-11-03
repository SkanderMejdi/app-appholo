module.exports = function(db) {

    var modules = new db.Schema({
        name: {
            type: String,
            required: true,
	    index: true
        },
        description: {
            type: String,
            required: true
        },
        date: Date,
        version : {
            type: String,
            required: true
        },
        theme : {
            type: String,
            required: true
        },
        status : {
            type: Boolean,
            required: true
        },
        path: {
            type: String,
            required: true
        },
	author: {
	    type: String,
	    required: true
	},
        screenshots: [{
            path: String,
        }],
        commentary: [{
            content: String,
            from: String,
            date: Date,
	          grade: Number,
        }],
        parameters: [{
            name: String,
            ptype: String
        }]
    });

    db.model('Modules', modules)

    return modules
}
