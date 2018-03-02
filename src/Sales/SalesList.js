import React, { Component } from 'react';
import { GetSales } from './SalesServices';

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
                        <th>A</th>
                        <th>B</th>
                        <th>C</th>
                        <th>D</th>
                        <th>E</th>
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

    render (){
        return (
            <tr>
                <td>{this.props.sale.id}</td>
                <td>{this.props.sale.fees}</td>
                <td>{this.props.sale.amount}</td>
                <td>{this.props.sale.product}</td>
                <td>{this.props.sale.customerDTO.name}</td>
            </tr>
        )
    }
}