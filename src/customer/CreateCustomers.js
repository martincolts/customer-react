import React , { Component } from 'react';
import './Customer.css';
import { SaveCustomer } from './CustomerService.js';

export default class CreateCustomer extends Component {
    constructor(props){
        super(props);
        this.state={
            customer:{},
            name:"",
            lastname:"",
            phoneNumber:"",
            address:"",
            dni:""
        }
        this.createCustomer = this.createCustomer.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    createCustomer (){
        const customer ={
            name : this.state.name,
            lastname : this.state.lastname,
            phoneNumber : this.state.phoneNumber,
            dni : this.state.dni,
            address : this.state.address
        }
        SaveCustomer(customer,
            res => console.log(res),
            res => console.log(res))
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        
        this.setState({
            [name]: value
        });
    }

    render(){
        return (
            <form>
                Nombre: <input name="name" placeholder="Nombre"
                    value={this.state.name} 
                    onChange={this.handleInputChange}/>
                Apellido: <input name="lastname" placeholder="Apellido"
                    value={this.state.lastname} 
                    onChange={this.handleInputChange}/>
                Telefono: <input name="phoneNumber" 
                    value={this.state.phoneNumber} 
                    onChange={this.handleInputChange}/>
                Dni: <input name="dni" 
                    value={this.state.dni} 
                    onChange={this.handleInputChange}/>
                Dirección: <input name="address" 
                    value={this.state.address} 
                    onChange={this.handleInputChange}/>
                <button className="button" onClick={this.createCustomer}>Crear</button>
            </form>
        )
    }
}