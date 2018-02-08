// Data Models
var clientRequest = require('../models').clientRequest,
    deploy = require('../models').deploy;

module.exports = {
    get: (req, res) => {
        var cr = new clientRequest({
            page:  "Deployments",
            client: req.clientIp,
            status: req.status,
            date: new Date(),
            isTest: false
        });
        cr.save(function(err, result) {
            if (err) throw err;
            deploy.aggregate(
                [{
                    $group:{
                        _id: { $dateToString: { format: "%m,%d %Hh", date: "$date" }},
                        count: { $sum: 1 }
                    }
                },{
                    $sort: { _id : 1 }
                }], (err, result) => {
                    if (err) throw err;
                    var finalDates = [];
                    var finalCpts = [];
                    for(let resu of result){
                        finalDates.push(resu["_id"]);
                        finalCpts.push(resu["count"]);
                    }
                    var plotly = require('plotly')('adrianpothuaud', 'OWRADETaAnxEYCmnrIlf');
                    var data = [
                        {
                        x: finalDates,
                        y: finalCpts,
                        type: "scatter"
                        }
                    ];
                    var graphOptions = {filename: "deploys", fileopt: "overwrite"};
                    plotly.plot(data, graphOptions, function (err, msg) {
                        if(err) throw err;
                        res.render('deployments');
                    });
                }
            );
        });
    },
    post: (req, res) => {
        var d = new deploy();
        d.save(function(err, result) {
            if (err) throw err;
            console.log("deployment added");
        });
    }
}