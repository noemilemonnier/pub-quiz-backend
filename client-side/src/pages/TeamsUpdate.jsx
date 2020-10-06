import React, { Component } from 'react'
import api from '../api'
import styled from 'styled-components'
import { LayoutComponent } from '../components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Container = styled.div.attrs({
    className: 'container',
})`
    background-color: transparent;
    padding: 2rem;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class TeamsUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            teamMembers: '',
            score: '',
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        if(name === "" || name === " "){
            this.setState({
                validationError: "The Team name cannot be empty",
            })
        }
        else{
            this.setState({ 
                name,
                validationError: "" 
            })
        }
        
    }

    handleChangeInputTeamMembers = async event => {
        const teamMembers = event.target.value
        if(teamMembers === "" || teamMembers === " "){
            this.setState({
                validationError: "The Team members cannot be empty",
            })
        }
        else{
            this.setState({ 
                teamMembers ,
                validationError: "" 
            })
        }
        
    }

    handleUpdateTeam = async () => {
        const {name, teamMembers , score} = this.state
        const payload = { name, teamMembers, score}

        await api.updateTeamByName(name, payload).then(res => {
            window.alert(`Team updated successfully ` + payload.name)
            this.setState({
                name: '',
                teamMembers: '',
                score: '',
                validationError: "Team updated successfully"
            })
        })
    }

    render() {
        const { name, teamMembers } = this.state
        return (
            <LayoutComponent>
                <Container className="container">
                <Title>Update Team</Title>

                <Label>Team Name: </Label>
                <InputText
                    type="text"
                    label="Enter the team name"
                    value={name}
                    onChange={this.handleChangeInputName}
                />

                <Label>Team Members: </Label>
                <InputText
                    type="text"
                    value={teamMembers}
                    onChange={this.handleChangeInputTeamMembers}
                />

                <Button onClick={this.handleUpdateTeam}>Update Team</Button>
                <CancelButton href={'/teams'}>Cancel</CancelButton>
                <div style={{color: 'red', marginTop: '5px'}}> 
                    {this.state.validationError} 
                </div>
                </Container>    
                
            </LayoutComponent>
            
        )
    }
}

export default TeamsUpdate