var path = require('path');
var db = require(path.resolve('.', 'modules/database/databaseConnector.js'));
//var responseGenerator = require(path.resolve('.', 'utils/responseGenerator.js'))
var config = require(path.resolve('./', 'config'));


exports.testUser = function (req, res) {
    res.send("Danish");
}

exports.testDatabase = function(req, res){
    var title = req.body.title;
    var status = req.body.status;

    var query = "INSERT into task set Title = ?, Status = ?";
    var dataToInsert = [title, status];

    db.query(query, dataToInsert, function(err, result){
        if(err)
            throw err;
            else{
                res.send("Data Inserted!!!");
            }
    });

}