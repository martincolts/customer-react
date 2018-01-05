import React from 'react';
import { Switch , Route } from 'react-router';
import CustomerMain from './customer/CustomerMain.js';

export default class Body extends React.Component {
    render(){
        return (
            <Switch>
                <Route exact path='/customer' component={CustomerMain}/>
            </Switch>
        )
    }
}