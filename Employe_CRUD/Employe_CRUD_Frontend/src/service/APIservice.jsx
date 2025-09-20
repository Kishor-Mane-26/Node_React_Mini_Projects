import axios from "axios";

class APIservices{
    saveEmploye(empData){
        return axios.post("http://localhost:3000/saveemp",empData);
    }

    viewEmployes(){
        return axios.get("http://localhost:3000/viewemp");
    }

    deleteEmploye(id) {
    return axios.delete(`http://localhost:3000/delete/${id}`);
  }

  updateEmploye(id,empData){
        return axios.post(`http://localhost:3000/update/${id}`,empData);
    }
}

export default new APIservices();