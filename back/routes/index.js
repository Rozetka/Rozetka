
var fs = require('fs');


exports.index = function(req, res){
  res.send('use /example.html');
};

exports.test = function(req, res){
	req.form.complete(function(err, fields, files) {
		console.log(arguments)
	})
    // console.log(req.files, req.body);
    res.send(200, '')
}