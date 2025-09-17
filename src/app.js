const bodyParser = require("body-parser");
let route = require("./routes/route");

let express = require("express");
let app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json)


module.exports=app;