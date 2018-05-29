import React , { Component } from 'react';
import CustomerMain from '../customer/CustomerMain';
import { Link } from 'react-router-dom';
import './Menu.css';

export default class Menu extends Component {
    constructor(props){
        super(props);
        
        this.state={
            select:'customers'
        }

        //this.handleClick = this.handleClick.bind(this)
    }

    handleClick(option){
        this.setState({
            select:option
        });
    }

    render(){
        return (
            <header>
                <nav className="topnav">
                    <ul>
                    <Link onClick={this.handleClick.bind(this,'customers')} 
                        className={this.state.select === 'customers'?'active':''} to='/customers'>Customers</Link>
                     <Link onClick={this.handleClick.bind(this,'sales')}
                        className={this.state.select === 'sales'?'active':''} to='/sales'>Sales</Link>
                    </ul>
                </nav>
            </header>
        )
    }
}