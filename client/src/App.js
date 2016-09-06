import React, { Component } from 'react';
import './App.css';
import IndexNav from './IndexNav'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Nav">
            <IndexNav />
        </div>
      </div>
    );
  }
}

export default App;
