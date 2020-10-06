import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})`
    font-size: 1.5rem;
    padding: 0.1em;
`
//This is to define the link name as well as its url

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/teams" className="nav-link">
                                List of Teams
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/teams/create" className="nav-link">
                                Create a Team
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/teams/update" className="nav-link">
                                Update a Team
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links