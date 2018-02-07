const express = require('express');
const path = require('path');
var mongoose = require('mongoose');
const requestIp = require('request-ip');

const PORT = process.env.PORT || 5000;

var clientRequestSchema = require('./schemas/clientRequest');
var clientRequest = mongoose.model('clientRequest', clientRequestSchema);

var app = express();

    app    
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
            var cr = new clientRequest({
                page:  "Tests",
                client: req.clientIp,
                status: req.status,
                date: new Date(),
                isTest: false
            });
            cr.save(function(err, result) {
                if (err) throw err;
                res.sendFile(__dirname + '/public/mochawesome.html');
            });
        })
        
        .get('/requests', (req, res) => {
            var cr = new clientRequest({
                page:  "Requests",
                client: req.clientIp,
                status: req.status,
                date: new Date(),
                isTest: false
            });
            cr.save(function(err, result) {
                if (err) throw err;
                
                clientRequest.aggregate(
                	[
                		{
                			$match:{
                				
                			}
                		},
                		{
                			$group:{
                				_id: { $dateToString: { format: "%m,%d %Hh", date: "$date" }}
                				,
                				count: {
                					$sum: 1
                				}
                			}
                		},{
                		    $sort: { _id : 1 }
                		}
                	], (err, result) => {
                        if (err) throw err;
                        
                        console.log(result);
                        
                        var finalDates = [];
                        var finalCpts = [];
                        
                        for(let resu of result){
                            finalDates.push(resu["_id"]);
                            finalCpts.push(resu["count"]);
                        }
                        
                        console.log(finalCpts);
                        console.log(finalDates);
                        
                        var plotly = require('plotly')('adrianpothuaud', 'OWRADETaAnxEYCmnrIlf');

                        var data = [
                          {
                            x: finalDates,
                            y: finalCpts,
                            type: "scatter"
                          }
                        ];
                        var graphOptions = {filename: "date-axes", fileopt: "overwrite"};
                        plotly.plot(data, graphOptions, function (err, msg) {
                            if(err) throw err;
                            res.render('pages/requests');
                        });
                    }
                );

                /*clientRequest.find({}, 'date', (err, results) => {
                    if (err) throw err;
                    
                    res.render('pages/requests', {"requests": results});
                });*/
            });
        });

mongoose.connect(
    "mongodb://test:test@ds123658.mlab.com:23658/projet-test"
);

mongoose.connection

.once('open', function() {
    
    app
        .listen(PORT, () => console.log(`Listening on ${ PORT }`));
})

.on('error', function(error) {
    console.warn('Error', error);
});

module.exports = app;