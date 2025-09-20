let express = require("express");
let Router  = express.Router();
let viewEmpCtrl = require("../controller/viewEmpCtrl");

Router.get("/viewemp",viewEmpCtrl.viewEmp);
Router.delete("/delete/:id",viewEmpCtrl.deleteEmp);
Router.put("/update/:id",viewEmpCtrl.updateEmp);

module.exports=Router;