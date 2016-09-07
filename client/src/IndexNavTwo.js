import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router';
import SearchBar from './SearchBar';

class IndexNavTwo extends Component {
    render () {
        var NavBarStyle2 = {
            position: 'static',
            boxShadow: 'none',
            borderBottom: 'none',
            borderTop: 'none',
            marginTop: '20px',
            background: 'white',
            fontSize: '20px',
            fontFamily: 'Oswald'
        }
        
        return (
            <Navbar className="col-md-12" style={NavBarStyle2}>
                <div className="col-md-4"><Link to="/"><img src={'https://c8.staticflickr.com/9/8414/28887106583_4c196ba8e5_o.jpg'} width="auto" height="60" alt="SoleSauce" /></Link></div>
                <div className="col-md-8"><SearchBar /></div>
            </Navbar>
        )
    }
} 

export default IndexNavTwo;