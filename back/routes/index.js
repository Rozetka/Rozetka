
/*
 * GET home page.
 */


exports.index = function(req, res){
  res.send('use /example.html');
};

exports.test = function(req, res){
    console.log(req.body);
}