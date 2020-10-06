import React, { Component } from 'react'
import styled from 'styled-components'
import logo from '../../assets/images/esnjyvaskyla-logo.png'


const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``

class Logo extends Component {
    render() {
        return (
            <Wrapper href="https://esnjyvaskyla.org/">
                <img src={logo} width="150" height="80" alt="esnjyvaskyla.org" />
            </Wrapper>
        )
    }
}

export default Logo