import React, { Component } from 'react';
import './App.css';
import IndexNav from './IndexNav'
import IndexNavTwo from './IndexNavTwo'
import IndexCarousel from './IndexCarousel'

class Shoes extends Component {
    render() {
        return (
          <div className="App">   
                <IndexNavTwo />
                <IndexNav />   
                testing shoes page
                <IndexCarousel />
          </div>
        );
    }
}

export default Shoes;