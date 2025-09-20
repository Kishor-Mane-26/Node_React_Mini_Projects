let express = require("express");
let Router  = express.Router();
let saveEmpCtrl = require("../controller/saveEmpCtrl");
Router.post("/saveemp",saveEmpCtrl.saveEmp);

module.exports=Router;