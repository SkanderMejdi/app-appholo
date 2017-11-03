module.exports = function(app) {
    var success = function(result) {
        if (this.headersSent === false)
            return this.status(200).send(JSON.stringify(result));
    }

    var die = function(err) {
        if (this.headersSent === false) {
            console.log(err.stack || JSON.stringify(err, undefined, 1))
            this.status(400).send(JSON.stringify(err, undefined, 1));
        }
    }

    var uniqueModel = function(model, method, req, res) {
        return new Promise(function(resolve, reject) {
            var idIsNumber = model.schema.paths._id.instance === 'Number'
            var id = idIsNumber ? (parseInt(req.params.id) || 0) : req.params.id;
            var promise = Promise.resolve(id)

            if (model[method].findBefore === true) {
                promise = model.findOne({
                    _id: id
                });
            }
            if (model[method].populateArtisan === true) {
                promise = promise.populate('sst');
            }

            promise.then(function(data) {
                if (!data)
                    reject("Document Not Found");
                var promise = model[method].fn(data, req, res);
                if (promise && promise.then && typeof promise.then === 'function')
                    promise.then(resolve, reject)
            }, reject)

        })
    }


    app.all('/api/:model/:id/:method', function(req, res, next) {
        var model = db.model(req.params.model);
        var method = req.params.method;
        if (!model)
            return next();
        if (typeof model[method] === "undefined")
            return next();
        if (model[method].unique === true && model[method].method === req.method) {
            uniqueModel(model, method, req, res).then(success.bind(res), die.bind(res)).catch(__catch)
        } else {
            next();
        }
    });


    app.all('/api/:model/:method', function(req, res, next) {
        var model = db.model(req.params.model);
        var method = req.params.method;
        if (!model ||  typeof model[method] !== "function" || model[method].length !== 2) {
            return next();
        }
        var prm = model[method](req, res);
        if (prm && typeof prm.then === 'function') {
            return prm.then(success.bind(res), die.bind(res))
        }
    });

    app.get('/api/:model/:id', function(req, res, next) {
        var model = db.model(req.params.model);
        var method = req.params.method;
        var id = req.params.id;
        if (!model || !id)
            return next();
        id = id.match(/^[0-9]+$/i) ? parseInt(id) : id;
        model.view(id, req, res).then(success.bind(res), die.bind(res));
    });

};
