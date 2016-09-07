import React, { Component } from 'react';

class CreateAccount extends Component {
    constructor (props, context) {
        super (props, context) 
        
        this.state = { 
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
        
        
    }
    
    render () {
        return (
            <div className="col-md-6 createAccount">
                <div className="input-bar">
                    <input type={'text'} placeholder={'First Name'} value={ this.state.firstName }
                    onChange={event => this.onInputChange(event.target.value)} />
                    <input type={'text'} placeholder={'Last Name'} value={ this.state.lastName }
                    onChange={event => this.onInputChange(event.target.value)} />
                </div>     
            </div>
            
        ); 
    };

    onInputChange(firstName, lastName, email, password, confirmPassword ) {
        this.setState({ 
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            confirmPassword: confirm
        });
    }
}

export default CreateAccount;