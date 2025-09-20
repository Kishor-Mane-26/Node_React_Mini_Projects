import React,{Component} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Home from "./components/Home";
import AddEmp from "./components/AddEmploye";
import ViewEmp from "./components/ViewEmploye";

export default class App extends Component{
  render(){
    return(<>
      <BrowserRouter>
        
        <div className="navbar">
          <ul>
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/saveemp" className="nav-link">Add New Employe</Link></li>
            <li><Link to="/viewemp" className="nav-link">Veiw Employe</Link></li>
          </ul>
        </div>

        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/saveemp" element={<AddEmp/>}></Route>
          <Route path="/viewemp" element={<ViewEmp/>}></Route>
        </Routes>
      </BrowserRouter>
    </>)
  }
}