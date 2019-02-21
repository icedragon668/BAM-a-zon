const db = require("../models");
const path = require('path');

module.exports = function(app) {
    app.get('/api/products', function(req,res){
        db.Product.findAll({
            //anything else?
        }).then(function(data){
            res.json(data);
        }).catch(function(error){
            res.json({error: error});
        });
    });
    //app.post ?
    //app.put
}