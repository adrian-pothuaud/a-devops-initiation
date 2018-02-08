// Data Models
var clientRequest = require('../models').clientRequest,
    codePush = require('../models').codePush;

module.exports = {
    get: (req, res) => {
        var cr = new clientRequest({
            page:  "Pushs",
            client: req.clientIp,
            status: req.status,
            date: new Date(),
            isTest: false
        });
        cr.save(function(err, result) {
            if (err) throw err;
            codePush.aggregate(
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
                    var graphOptions = {filename: "pushs", fileopt: "overwrite"};         
                    plotly.plot(data, graphOptions, function (err, msg) {
                        if(err) throw err;
                        res.render('pushs');
                    });
                }
            );
        });
    },
    post: (req, res) => {
        var cp = new codePush();
        cp.save(function(err, result) {
            if (err) throw err;
            console.log("code push added");
        });
    }
}