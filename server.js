const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const path = require('path');
const db = require(path.join(__dirname, "./models"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

require(path.join(__dirname, "./routes/api-routes.js"))(app);
require(path.join(__dirname, "./routes/html-routes.js"))(app);

db.sequelize.sync({force:true}).then(function(){
    app.listen(PORT, function(){
        console.log(`Ears on ${PORT} good buddy`)
    });
});