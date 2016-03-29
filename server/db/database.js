var request = require("request");

var dbAuthHeader = new Buffer(process.env.DB_USERNAME + ":" + process.env.DB_PASSWORD).toString('base64');

// this is the interface between the server and the database
module.exports.cypherQuery = function(query, params, callback) {
  if(params){
    if(typeof params === 'function'){
      callback = params;
      params = {};
    }
  } else {
    params = {};
  }
  request.post({
      uri: process.env.DATABASE_URL,
      json: {statements: [{statement: query, parameters: params}]},
      headers: {               
        'Authorization': 'Basic ' + dbAuthHeader                  
      }, 
    },
    function (err, res, body) {
      callback(err, body);
    });
};