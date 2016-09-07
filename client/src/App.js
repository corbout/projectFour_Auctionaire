import React, { Component } from 'react';
import './App.css';
import IndexNav from './IndexNav'
import IndexNavTwo from './IndexNavTwo'
import Login from './Login';
import IndexCarousel from './IndexCarousel'

class App extends Component {
    
    render() {
        return (
          <div className="App">
            <div className="Nav">
                <IndexNavTwo />
                <IndexNav />   
                <IndexCarousel />
            </div>
          </div>
        );
    }
}

export default App;
