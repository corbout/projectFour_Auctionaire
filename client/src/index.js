import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './Login';
import Auction from './Auction';
import Shoes from './Shoes';
import './index.css';
import { Router, Route, browserHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path='/' component={App} />
        <Route path='/login' component={Login} />
        <Route path='/auctions' component={Auction} />

        <Route path='/airjordan' component={Shoes} />
        <Route path='/nike' component={Shoes} />
        <Route path='/adidas' component={Shoes} />
        <Route path='/reebok' component={Shoes} />
        <Route path='/newbalance' component={Shoes} />
        <Route path='/converse' component={Shoes} />
        <Route path='/vans' component={Shoes} />
        <Route path='/puma' component={Shoes} />
        <Route path='/asics' component={Shoes} />
    </Router>
    ), document.getElementById('root')
);
