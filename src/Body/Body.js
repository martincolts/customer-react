import React from 'react';
import { Switch , Route } from 'react-router';
import CustomerMain from '../customer/CustomerMain.js';
import SalesMain from '../Sales/SalesMain';

export default class Body extends React.Component {
    render(){
        return (
            <Switch>
                <Route path='/customers' component={CustomerMain}/>
                <Route path='/sales' component={SalesMain}/>
            </Switch>
        )
    }
}