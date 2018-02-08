// Data Models
var clientRequest = require('../models').clientRequest;

module.exports = {
    get: (req, res) => {
        var cr = new clientRequest({
            page:  "Tests",
            client: req.clientIp,
            status: req.status,
            date: new Date(),
            isTest: false
        });
        cr.save(function(err, result) {
            if (err) throw err;
            res.sendFile(process.cwd() + '/public/mochawesome.html');
        });
    }
}