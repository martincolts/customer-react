import React from 'react';
import SalesList from './SalesList'
import CreateSale from './CreateSale';

export default class SalesMain extends React.Component {
    render(){
        return (
            <div>
                <CreateSale/>
                <SalesList/>
            </div>
        )
    }
}