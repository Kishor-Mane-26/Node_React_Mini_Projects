// model/viewEmpModel.js
const conn = require("../../db"); // make sure this exports a promise or pool

exports.viewEmploye = async () => {
    try {
        const [rows] = await (await conn).query("SELECT * FROM employe");
        return rows;  // this is the actual data array
    } catch (err) {
        throw err;
    }
};

exports.deleteEmploye = async (id) => {
  const result = await (await conn).query("DELETE FROM employe WHERE id = ?", [id]);
  return result;
};

exports.updateEmploye = async (id, emp) => {
  const result = await (await conn).query(
    "UPDATE employe SET name = ?, email = ?, contact = ? WHERE id = ?",
    [emp.name, emp.email, emp.contact, id]
  );
  return result;
};