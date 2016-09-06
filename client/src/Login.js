import React, { Component } from 'react';

class Login extends Component {
    constructor (props, context) {
        super (props, context) 
        
        this.state = { 
            login: '',
            password: ''
        };
    }
    
    render () {
        return (
            <div className="login-bar">
                <input placeholder={'Sign In'} value={ this.state.login }
                onChange={event => this.onInputChange(event.target.value)} />
                <input placeholder={'Password'} value={ this.state.password }
                onChange={event => this.onInputChange(event.target.value)}
                type={'password'} />
            </div>
            
        ); 
    };

    onInputChange(term) {
        this.setState({ login, password });
    }
}

export default Login;