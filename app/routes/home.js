// Data Models
var clientRequest = require('../models').clientRequest;

module.exports = {
    get: (req, res) => {
        var cr = new clientRequest({
            page:  "Index",
            client: req.clientIp,
            status: req.status,
            date: new Date(),
            isTest: false
        });
        cr.save(function(err, result) {
            if (err) throw err;
            res.render('index');
        });
    }
}