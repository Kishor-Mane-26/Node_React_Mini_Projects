import React from "react";
import { Component } from "react";
import ReactDOM from "react-dom";
import Swal from "sweetalert2";
import APIservice from "../service/APIservice";

export default class  AddEmp extends Component{
    constructor(props){
        super(props);
        this.state={
                name:"",
                email:"",
                contact:""
        }
    }

    unHandler = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }
    saveEmploye = (e) => {
        let promise = APIservice.saveEmploye(this.state);
        promise.then((res)=>{
            Swal.fire({
                title: "Success!",
                text: "Your data has been saved.",
                icon: "success",
                confirmButtonText: "OK",
            }).then((res)=>{
                window.location.reload();
            }).catch((err)=>{
                console.log(`Error is {err}`);
            })
        }).catch((err)=>{
            alert("Data insertion failure...");
            console.log("Error is "+err);
        });
    }
    render(){
        return(<>
            <div className="container mt-4">
                <form className="p-4 border rounded shadow bg-dark mt-5">
                    <div className="mb-3">
                        <input type="text" className="form-control" name="name" placeholder="Enter Employee's Name" value={this.state.name} onChange={(e)=>{this.unHandler(e)}} />
                    </div>

                    <div className="mb-3">
                        <input type="email" className="form-control" name="email" placeholder="Enter Employee's Email" value={this.state.email} onChange={(e)=>{this.unHandler(e)}} />
                    </div>

                    <div className="mb-3">
                        <input type="text" className="form-control" name="contact" placeholder="Enter Employee's Contact" value={this.state.contact} onChange={(e)=>{this.unHandler(e)}} />
                    </div>

                    <button type="button" className="btn btn-primary w-100" onClick={this.saveEmploye}>Submit</button>
                </form>
            </div>

        </>)
    }
}