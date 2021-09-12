import React from 'react'
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar>
               <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>Food App</Navbar.Brand>
                    </LinkContainer> 
                </Container> 
            </Navbar>
        </header>
    )
}

export default Header
