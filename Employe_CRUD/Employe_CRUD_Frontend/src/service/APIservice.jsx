import axios from "axios";

class APIservices{
    saveEmploye(empData){
        return axios.post("http://localhost:3000/saveemp",empData);
    }
}

export default new APIservices();