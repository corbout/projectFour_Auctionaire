
import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router';
import SearchBar from './SearchBar';

class IndexNav extends Component {
    render () {
        var NavBarStyle = {
            boxShadow: 'none',
            borderBottom: 'none',
            borderTop: 'none',
            marginTop: '10px',
            background: 'white',
            fontSize: '20px',
            fontFamily: 'Oswald',
            backgroundColor: 'black'
        }
        
        var NavItemStyle = {
            marginLeft: '20px',
            paddingTop: '5px',
        }
        
        var FontStyle = {
            fontSize: '20px'
        }
        
        var LinkStyle = {
            color: 'white'
        }
        
        var DropStyle = {
            color: 'black'
        }
    
        return (
            <Navbar className="col-md-12" style={NavBarStyle}>
                <Nav pullLeft>
                    <NavItem style={NavItemStyle}><Link style={LinkStyle} to="/auctions">Auctions</Link></NavItem>
                    <NavItem style={NavItemStyle}><Link style={LinkStyle} to="/airjordan">Air Jordans</Link></NavItem>
                    <NavItem style={NavItemStyle}><Link style={LinkStyle} to="/nike">Nike</Link></NavItem>
                    <NavItem style={NavItemStyle}><Link style={LinkStyle} to="/adidas">Adidas</Link></NavItem>
                    <NavItem style={NavItemStyle}><Link style={LinkStyle} to="/reebok">Reebok</Link></NavItem>
                    <NavItem style={NavItemStyle}><Link style={LinkStyle} to="/newbalance">New Balance</Link></NavItem>
                    <NavDropdown style={NavItemStyle} title="Other Brands" id="dropdown-size-medium">
                        <NavItem style={FontStyle}><Link style={DropStyle} to="/converse">Converse</Link></NavItem>
                        <NavItem style={FontStyle}><Link style={DropStyle} to="/vans">Vans</Link></NavItem>
                        <NavItem style={FontStyle}><Link style={DropStyle} to="/puma">Puma</Link></NavItem>
                        <NavItem style={FontStyle}><Link style={DropStyle} to="/asics">Asics</Link></NavItem>
                    </NavDropdown>
                    <NavItem style={NavItemStyle}><Link style={LinkStyle} to="/login">Join/Sign In</Link></NavItem>
                </Nav>
            </Navbar>
        )
    }
} 

export default IndexNav;