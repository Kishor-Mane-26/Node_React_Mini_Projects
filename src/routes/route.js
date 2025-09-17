let express = require("express");
let Router  = express.Router();
let empCtrl = require("../controller/empCtrl");
Router.post("/saveemp",empCtrl.saveEmp);

module.exports=Router;