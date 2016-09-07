import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './Login';
import Auction from './Auction';
import './index.css';
import { Router, Route, browserHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path='/' component={App} />
        <Route path='/login' component={Login} />
        <Route path='/auctions' component={Auction} />
    </Router>
    ), document.getElementById('root')
);
