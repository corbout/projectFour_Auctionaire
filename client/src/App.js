import React, { Component } from 'react';
import './App.css';
import IndexNav from './IndexNav'
import IndexNavTwo from './IndexNavTwo'
import IndexCarousel from './IndexCarousel'

class App extends Component {
    
    render() {
        return (
          <div className="App">   
                <IndexNavTwo />
                <IndexNav />   
                <IndexCarousel />
             
          </div>
        );
    }
}

export default App;

