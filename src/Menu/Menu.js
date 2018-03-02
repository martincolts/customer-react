import React , { Component } from 'react';
import CustomerMain from '../customer/CustomerMain';
import { Link } from 'react-router-dom';

export default class Menu extends Component {
    render(){
        return (
            <header>
                <nav>
                    <ul>
                        <li><Link to='/customers'>Customers</Link></li>
                        <li><Link to='/sales'>Sales</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}