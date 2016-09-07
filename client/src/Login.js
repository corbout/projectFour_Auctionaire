import React, { Component } from 'react';
import './App.css';
import IndexNav from './IndexNav'
import IndexNavTwo from './IndexNavTwo'
import CreateAccount from './CreateAccount'


class Login extends Component {
    render() {
        return (
          <div className="App">   
                <IndexNavTwo />
                <IndexNav />   
                <CreateAccount />
          </div>
        );
    }
}

export default Login;