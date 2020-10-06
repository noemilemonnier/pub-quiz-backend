import React, { Component } from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Links from './Links'
import 'bootstrap/dist/css/bootstrap.min.css'


const Container = styled.div.attrs({
    className: 'container',
})`
    background-color: transparent;
    
`

const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg navbar-light bg-white',
})`
    border-radius: 20px;
    background: #ffffff;
    box-shadow: 10px 10px 5px 0px rgba(222, 222, 222, 222);
    padding-top: 50px;
    margin-bottom: 20 px;
    background-color: rgba(0, 0, 0, 0);
`


class NavBar extends Component {
    render() {
        return (
            <Container>
                <Nav>
                    <Logo />
                    <Links />
                </Nav>
            </Container>
        )
    }
}

export default NavBar