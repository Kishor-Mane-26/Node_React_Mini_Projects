const bodyParser = require("body-parser");
let saveEmpRoute = require("./routes/saveEmpRoute");
let cors = require("cors");

let express = require("express");
let app = express();

let corsOptions = {
    origin:' http://localhost:5173',
    methods:["GET","POST"]
}

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use("/", saveEmpRoute);



module.exports=app;
