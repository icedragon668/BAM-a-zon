const db = require("../models");

module.exports = function(app) {

app.get('/', function(request, response){
    response.sendFile(path.join(__dirname, "./public/index.html"));
  });

}