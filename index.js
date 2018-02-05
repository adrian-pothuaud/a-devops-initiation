const express = require('express');
const path = require('path');
var mongoose = require('mongoose');
const requestIp = require('request-ip');

const PORT = process.env.PORT || 5000;

var clientRequestSchema = require('./schemas/clientRequest');
var clientRequest = mongoose.model('clientRequest', clientRequestSchema);

mongoose.connect(
    "mongodb://test:test@ds123658.mlab.com:23658/projet-test"
);

mongoose.connection

.once('open', function() {
    express()
    
        .use(express.static(path.join(__dirname, 'public')))
        .use(express.static(path.join(__dirname, 'mochawesome-report/assets')))
        .use(requestIp.mw())
        
        .set('views', path.join(__dirname, 'views'))
        .set('view engine', 'ejs')
        
        .get('/', (req, res) => {
            var cr = new clientRequest({
                page:  "Index",
                client: req.clientIp,
                status: req.status,
                date: new Date(),
                isTest: false
            });
            cr.save(function(err, result) {
                if (err) throw err;
                res.render('pages/index');
            });
        })
        
        .get('/tests', (req, res) => {
            res.sendFile(__dirname + '/public/mochawesome.html');
        })

        .listen(PORT, () => console.log(`Listening on ${ PORT }`));
})

.on('error', function(error) {
    console.warn('Error', error);
});
