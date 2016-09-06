
import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router';
import SearchBar from './SearchBar';


class IndexNav extends Component {
    render () {
        var NavBarStyle = {
            boxShadow: 'none',
            
            background: 'white',
            fontSize: '20px',
            fontFamily: 'Oswald'
        }
        
        var NavItemStyle = {
            marginLeft: '20px',
            paddingTop: '30px',
           
        }
        
        var FontStyle = {
            fontSize: '20px'
        }
    
        return (
            <Navbar className="col-md-12" style={NavBarStyle}>
                <Navbar.Header>
                    <div><Link to="/"><img src={'https://c2.staticflickr.com/8/7570/29451404556_144e854bb8_o.png'} width="auto" height="100" alt="SoleSauce" /></Link></div>
                </Navbar.Header>

                <Nav pullLeft>
                    <NavItem style={NavItemStyle}><Link to="/auctions">Auctions</Link></NavItem>
                    <NavItem style={NavItemStyle}><Link to="/airjordan">Air Jordans</Link></NavItem>
                    <NavItem style={NavItemStyle}><Link to="/nike">Nike</Link></NavItem>
                    <NavItem style={NavItemStyle}><Link to="/adidas">Adidas</Link></NavItem>
                    <NavDropdown style={NavItemStyle} title="Other Brands" id="dropdown-size-medium">
                        <NavItem style={FontStyle}><Link to="/reebok">Reebok</Link></NavItem>
                        <NavItem style={FontStyle}><Link to="/newbalance">New Balance</Link></NavItem>
                        <NavItem style={FontStyle}><Link to="/converse">Converse</Link></NavItem>
                        <NavItem style={FontStyle}><Link to="/vans">Vans</Link></NavItem>
                        <NavItem style={FontStyle}><Link to="/puma">Puma</Link></NavItem>
                        <NavItem style={FontStyle}><Link to="/asics">Asics</Link></NavItem>
                    </NavDropdown>  
                </Nav>
                <SearchBar />
             
            </Navbar>
        )
    }
} 

export default IndexNav;