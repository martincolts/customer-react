import React, { Component } from 'react';
import { GetSales } from './SalesServices';
import '../customer/Customer.css';

export default class SalesList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            sales:[]
            }
    }

    componentDidMount(){
        GetSales(res => this.setState({sales:res.data}),
            res => console.log(res))
    }

    render (){
        return (
            <table>
                <thead>
                    <tr>
                        <th>Id Venta</th>
                        <th>Cuotas</th>
                        <th>Monto</th>
                        <th>Producto</th>
                        <th>Nombre Cliente</th>
                    </tr>
                </thead>
                <tbody>
                    <SaleTable sales={this.state.sales}/>
                </tbody>
            </table>          
        )
    }
}

export class SaleTable extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return this.props.sales.map(function(sale){
            return(
                <SaleRow key={sale.id} sale={sale}/>
            ) 
        })
    }
}

export class SaleRow extends React.Component {
    constructor(props){
        super(props);
    }

    popAlert(msg){
        alert(msg)
    }

    render (){
        return (
            <tr onClick={this.popAlert.bind(this,this.props.sale.quotaDTOs[0].amount)}>
                <td>{this.props.sale.id}</td>
                <td>{this.props.sale.fees}</td>
                <td>{this.props.sale.amount}</td>
                <td>{this.props.sale.product}</td>
                <td>{this.props.sale.customerDTO.name} {this.props.sale.customerDTO.lastname}</td>
            </tr>
        )
    }
}