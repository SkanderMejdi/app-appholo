module.exports = function(app, express) {

    app.post('/login', function (req, res) {
	db.model('user').authenticate(req).then(function (resp) {
	    req.session.auth = true;
	    req.session.login = req.body.login
	    res.send(resp);
	}, function (err) {
	    res.statusCode = 401;
	    res.send(err);
	})
    })

    app.use(function(req, res, next) {
	return next();
    });

    app.all("*", function(req, res) {
        res.status(404).send('X Not Found');
    });
}
