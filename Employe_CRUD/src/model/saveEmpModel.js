let conn = require("../../db");

exports.saveEmploye = async (params) => {
  const sql = "INSERT INTO employe (name, email, contact) VALUES (?, ?, ?)";
  const [result] = await (await conn).query(sql, params);
  return result;
};
