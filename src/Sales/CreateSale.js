import React, { Component } from 'react';
import { SaveSale } from './SalesServices.js';
import '../customer/Customer.css';

export default class CreateSale extends Component {
    constructor(props){
        super(props);   

        this.state={
           sale:{},
            customerId:"",
            product:"",
            date:"",
            quotas:"",
            amount:""
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.saveSale = this.saveSale.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const name = target.name;
        const value = target.value;
        console.log(name);
        this.setState({
            [name]: value
        });
    }

    saveSale(){
        const sale={
            customerDTO:{
                id:this.state.customerId
            },
            amount:this.state.amount,
            date:this.state.date,
            product:this.state.product,
            fees:this.state.quotas            
        }
        console.log(sale);
        SaveSale(sale,
        function(res){
            console.log(res)
        },function(res){
            console.log(res)
        })
    }

    render(){
        return (
            <div>
                <form>
                    Cliente Id: <input name="customerId"
                        value={this.state.name} 
                        onChange={this.handleInputChange}/>
                    Fecha: <input type="date" name="date"
                        value={this.state.date}
                        onChange={this.handleInputChange}/>
                    Cantidad de cuotas: <input type="number" name="quotas"
                        value={this.state.quotas}
                        onChange={this.handleInputChange} />
                    Producto: <input name="product"
                        value={this.state.product}
                        onChange={this.handleInputChange}/>
                    Amount: <input type="number" min="1" step="any" name="amount"
                        value={this.state.amount}
                        onChange={this.handleInputChange}/>
                    <button onClick={this.saveSale} className="button">Crear</button>
                </form>
            </div>
        )
    }
}