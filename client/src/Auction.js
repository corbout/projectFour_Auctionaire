import React, { Component } from 'react';
import './App.css';
import IndexNav from './IndexNav'
import IndexNavTwo from './IndexNavTwo'


class Auction extends Component {
    
    render() {
        return (
          <div className="App">   
                <IndexNavTwo />
                <IndexNav />   

          </div>
        );
    }
}

export default Auction;