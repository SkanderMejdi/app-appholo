module.exports = function() {
    var mongoose = require("mongoose");
    var fs = require('fs');
    var path = require('path');
    var _ = require('lodash');

    mongoose.Promise = global.Promise
    mongoose.connect('mongodb://localhost/APPHOLO');
    function getDirectories(srcpath) {
        return fs.readdirSync(srcpath).filter(function(file) {
            return fs.statSync(path.join(srcpath, file)).isDirectory();
        });
    }
    var basePath = process.cwd() + '/server/models/'
    getDirectories(basePath).forEach(function(model) {
        var folder = basePath + model;
        var schema = require(folder + '/' + model + '.schema')(mongoose);

        require(folder + '/' + model + '.validator')(schema);

        fs.readdirSync(folder + '/methods').forEach(function(method) {
            if (_.endsWith(method, '.js') && !_.startsWith(method, '-')) {
                require(folder + '/methods/' + method)(schema)
            }
        });
	var model = mongoose.model(model, schema);
    })

    return mongoose;
}
