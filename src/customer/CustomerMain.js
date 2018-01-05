import React from 'react';
import CreateCustomers from './CreateCustomers.js';
import ListCustomer from './ListCustomers.js';

export default class CustomerMain extends React.Component {
    render(){
        return (
            <div>
                <CreateCustomers/>
                <ListCustomer/>
            </div>
        )
    }
}