let viewEmpModel = require("../model/viewEmpModel");

module.exports.viewEmp=(req,res)=>{
    viewEmpModel.viewEmploye()
    .then((result)=>{
        res.json(result);
    }).catch((err)=>{
        console.log("error is "+err);
    })
}

module.exports.deleteEmp=(req,res)=>{
    const id = req.params.id;
    viewEmpModel.deleteEmploye([id])
    .then((r)=>{ 
        console.log(r);
        res.send("Data Deleted...");
    })
    .catch((e)=>{
        console.log(e);
         res.send("Something went wrong..."); 
    });
}

module.exports.updateEmp = (req, res) => {
  const id = req.params.id;
  const { name, email, contact } = req.body;

  viewEmpModel.updateEmploye(id, { name, email, contact })
    .then(() => {
      res.json({ message: "Employee updated successfully" });
    })
    .catch((err) => {
      console.error("Update error:", err);
      res.status(500).json({ error: "Failed to update employee" });
    });
};