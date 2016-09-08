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
        var DivStyle = {
            display: 'flex',
            flexDirection: 'row'
        }
        
        var InputStyle = {
            marginTop: '10px',
            marginLeft: '10px',
            marginBottom: '10px',
            width: '20%',
            height: '30px',
            display: 'flex',
            flexDirection: 'column',
            borderStyle: 'none'
        }
        return (
            <div>
                <div className="col-md-2"></div>
                <div className="col-md-4">
                    <div className="account">
                        <div className="accountBox">
                            <div className="accountHeader">Create An Account</div>
                        </div>
                        <div className="accountBox">
                            <div className="accountText">First Name</div>
                            <div className="accountText" style={DivStyle}>
                                <input className="inputShadow" style={InputStyle} type={'text'}  value={ this.state.firstName }
                                onChange={event => this.onInputChange(event.target.value)} />
                            </div>
                            <div className="accountText">Last Name</div>
                            <div className="accountText" style={DivStyle}>
                                <input className="inputShadow" style={InputStyle} type={'text'}  value={ this.state.lastName }
                                onChange={event => this.onInputChange(event.target.value)} />
                            </div>
                        </div>  
                        <div className="accountBox">
                            <div className="accountText">Email</div>
                            <div className="accountText" style={DivStyle}>
                                <input className="inputShadow" style={InputStyle} type={'email'} value={ this.state.email }
                                onChange={event => this.onInputChange(event.target.value)} />
                            </div>
                            <div className="accountText">Passsword</div>
                            <div  className="accountText" style={DivStyle}>
                                <input className="inputShadow" style={InputStyle} type={'password'} value={ this.state.password }
                                onChange={event => this.onInputChange(event.target.value)} />
                            </div>
                        </div>
                        <div className="accountBox">      
                            <div className="accountText">Confirmation Password</div>
                            <div className="accountText" style={DivStyle}>
                                <input className="inputShadow" style={InputStyle} type={'password'}  value={ this.state.password }
                                onChange={event => this.onInputChange(event.target.value)} />
                            </div>
                        </div>
                    </div>            
                </div>
                    
                 <div className="col-md-3">
                    <div className="login">
                        <div className="loginBox">
                            <div className="loginHeader">Sign In</div>
                        </div>
                        <div className="loginBox">
                            <div className="loginText">Email</div>
                            <div className="loginText" style={DivStyle}>
                                <input className="inputShadow" style={InputStyle} type={'email'} value={ this.state.loginEmail }
                                onChange={event => this.onInputChange(event.target.value)} />
                            </div>
                            <div className="loginText">Password</div>
                            <div className="loginText" style={DivStyle}>
                                <input className="inputShadow" style={InputStyle} type={'password'} value={ this.state.loginPassword }
                                onChange={event => this.onInputChange(event.target.value)} />
                            </div>
                        </div> 
                    </div>            
                </div>            
            </div>         
        ); 
    };
}

export default CreateAccount;