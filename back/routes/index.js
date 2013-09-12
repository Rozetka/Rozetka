
var fs = require('fs')
    ,formidable = require('formidable');


exports.index = function(req, res){
  res.send('use /example.html');
};

exports.test = function(req, res){
	var form = formidable.IncomingForm();
    form.parse(req, function(err, fields, files){
        console.log(arguments);
    });
    // console.log(req.files, req.body);
    res.send(200, '')
}