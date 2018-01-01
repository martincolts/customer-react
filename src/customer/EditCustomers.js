import React , { Component } from 'react';
import { UpdateCustomer } from './CustomerService.js';

export default class EditCustomers extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.id,
            customer:{},
            name:this.props.customer.name,
            lastname:this.props.customer.lastname,
            phoneNumber:this.props.customer.phoneNumber,
            address:this.props.customer.address,
            dni:this.props.customer.dni
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.editCustomer = this.editCustomer.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        
        this.setState({
            [name]: value
        });
    }

    editCustomer(){
        const customer ={
            name : this.state.name,
            lastname : this.state.lastname,
            phoneNumber : this.state.phoneNumber,
            dni : this.state.dni,
            address : this.state.address
        };
        UpdateCustomer("/"+this.props.id,customer,
            res => console.log(res),
            res => console.log(res)
        );
    }

    render () {
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
                <button className="button" onClick={this.editCustomer}>Editar</button>
            </form>
        )
    }
}