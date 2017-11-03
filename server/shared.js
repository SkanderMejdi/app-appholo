module.exports = function() {
    require('pretty-error').start();
    global.__catch = function(e) {
	var prettyError = require('pretty-error');
	console.log((new prettyError().render(e)));
    }
    global.db = require('./db.js')();
}
