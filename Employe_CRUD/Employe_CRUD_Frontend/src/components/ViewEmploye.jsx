import React from "react";
import { Component } from "react";
import ReactDOM from "react-dom";
import APIservice from "../service/APIservice";
import { Link } from "react-router-dom";

export default class  ViewEmp extends Component{
    constructor(){
        super();
        this.state={
            empData:[],
            search:""
        }
    } 
     handleSearch = (e) => {
    this.setState({ search: e.target.value });
  };

   handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this employee?")) {
        APIservice.deleteEmploye(id)
            .then(() => {
                // Remove from UI without reload
                this.setState((prevState) => ({
                    empData: prevState.empData.filter((emp) => emp.id !== id)
                }));
            })
            .catch((err) => console.log(err));
        }
    };
    render(){
         const { empData,search } = this.state; 

         const filteredData = empData.filter((emp) =>
            emp.name.toLowerCase().includes(search.toLowerCase()) ||
            emp.email.toLowerCase().includes(search.toLowerCase()) ||
            emp.contact.toLowerCase().includes(search.toLowerCase())
        );
        return(<>
            <div className="mb-3 mt-3 col-4">
                <input type="text" className="form-control form-control-sm" placeholder="Search..." value={search} onChange={this.handleSearch} />
            </div>
            <table className="table table-striped table-bordered mt-4">
                <thead className="table-dark">
                    <tr>
                    <th scope="col">Employee ID</th>
                    <th scope="col">Employee Name</th>
                    <th scope="col">Employee Email</th>
                    <th scope="col">Employee Contact</th>
                    <th scope="col">Delete</th>
                    <th scope="col">Update</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        
                        !(filteredData.length>0)?(<tr>No Data Present...</tr> ):(filteredData.map((column)=><tr key={column.id}>
                        <td>{column.id}</td>
                        <td>{column.name}</td>
                        <td>{column.email}</td>
                        <td>{column.contact}</td>
                        <td>
                            <button className="btn btn-danger btn-sm " onClick={() => this.handleDelete(column.id)} >Delete</button>
                        </td>
                        <td>
                            <Link to="/update" className="nav-link">Update</Link>
                        </td>
                    </tr>))
                    }
                </tbody>
            </table>

        </>)
    }
    componentDidMount(){
        APIservice.viewEmployes()
        .then((result)=>{
             this.setState({ empData: result.data }); 
            console.log(this.state.empData);
        }).catch((err)=>{
            console.log(err);
        })
    }
}