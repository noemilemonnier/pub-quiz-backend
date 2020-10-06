import React, { Component } from 'react'
import { LayoutComponent } from '../components'
import styled from 'styled-components'

const Container = styled.div.attrs({
    className: 'container',
})`
    background-color: transparent;
    padding: 2rem;
`
const Title = styled.h1.attrs({
    className: 'h1',
})``


class Page404 extends Component {
    render() {
        return (
            <LayoutComponent>
                <Container className="container">
                <Title>Page - Error 404</Title>

                <h2>What you tried to find does not exist!</h2>
                 </Container> 

            </LayoutComponent>
            
        )
    }

}

export default Page404