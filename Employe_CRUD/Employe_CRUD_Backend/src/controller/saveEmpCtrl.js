let saveEmpModel = require("../model/saveEmpModel");
module.exports.saveEmp=(req,res)=>{
    let {name,email,contact} = req.body;
    saveEmpModel.saveEmploye([name,email,contact])
    .then((r)=>{ 
        console.log(r);
        res.send("Data Saved...");
    })
    .catch((e)=>{
        console.log(e);
         res.send("Data Not Saved..."); 
    });
}
