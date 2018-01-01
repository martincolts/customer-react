import React , { Component } from 'react';
import { GetCustomers } from './CustomerService.js';
import EditCustomers from './EditCustomers.js';

export default class ListCustomer extends Component {
    constructor(props){
        super(props);        
        this.state = {
            customers:[]
        }   
    }

    componentDidMount(){
        GetCustomers(res => this.setState({customers:res.data}),
            res => console.log(res))
    }

    render (){
        return (
            <CustomerTable customers={this.state.customers}/>
        )
    }
}

export class CustomerTable extends Component {
    render (){
        return this.props.customers.map(function(customer){
            return (
                <ul key={customer.id}>
                    <CustomerRow key={customer.id} customer={customer}/>
                </ul>
            )
        })
    }
}

export class CustomerRow extends Component {
    constructor (props){
        super(props);
        this.state={
            edit:false
        }
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleEdit (){
        this.setState({edit: !this.state.edit})
    }

    render (){
            return (
                <div>
                    <li className="customer-row">{this.props.id} {this.props.customer.lastname} {this.props.customer.name}
                    </li>
                    <button className="editButton" onClick={this.handleEdit}>Editar</button>
                    {this.editCustomer(this.state.edit, this.props.customer)}
                </div>
            )

    }

    editCustomer (edit, customer)
    {
        if (edit === true)
            return (
                <EditCustomers id={this.props.customer.id} customer={customer}/>
            )
        else
            return null ;
    }
}