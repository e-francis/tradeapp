import React from 'react'
import './App.css';
import { HomePage } from './containers/HomePage';

import { authProvider } from './components/accountBox/authContext';

import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import { CustomerAccessPage } from './containers/customerAccessPage';
import    accountTypes  from "./containers/accountTypes/accountTypes";


function App() {
    return ( 
        <div className = "App" >
        <Router > 
        <Switch >
        <Route path = "/" exact component = { HomePage }/> 
        <Route path = "/customer/access/:action" exact component = { CustomerAccessPage }/> 
        <Route path = "/accountTypes" exact component={ accountTypes } />
        </Switch > 
        </Router>
        </div >
    );
}

export default App;