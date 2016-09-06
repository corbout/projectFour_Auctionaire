import React, { Component } from 'react';
import './App.css';
import IndexNav from './IndexNav'
import Login from './Login';
import IndexCarousel from './IndexCarousel'

class App extends Component {
    
    render() {
        return (
          <div className="App">
            <Login />
            <div className="Nav">
                <IndexNav />   
                <IndexCarousel />
            </div>
          </div>
        );
    }
}

export default App;
