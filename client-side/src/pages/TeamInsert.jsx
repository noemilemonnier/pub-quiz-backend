import React, { Component } from 'react'
import api from '../api'
import { LayoutComponent } from '../components'
import styled from 'styled-components'

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

class TeamInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            teamMembers: '',
            isValid: false
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        if(name !== ""){
            this.setState({ 
                name,
                validationError: "", 
                isValid: true
            })
        }
        else{
            this.setState({
                validationError: "The Team name cannot be empty",
                isValid: false,
            })
        }
    }

    handleChangeInputTeamMembers = async event => {
        const teamMembers = event.target.value
        if(teamMembers !== ""){
            this.setState({ 
                teamMembers ,
                validationError: "" ,
                isValid: true,
            })
        }
        else{
            this.setState({
                validationError: "The Team members cannot be empty",
                isValid: false,
            })
        }
    }

    handleIncludeTeam = async () => {
        const { name, teamMembers, score } = this.state
        const payload = { name, teamMembers, score}

        if(this.state.isValid === true ){
            await api.insertTeam(payload).then(res => {
                console.log(" Team:" +payload.name + " Members:" + payload.teamMembers + " Score:" + payload.score)
                
                this.setState({
                    name: '',
                    teamMembers: '',
                    validationError: "Team added successfully"
                })
            })
        }
        else{
            console.log(" Team was not added")
            this.setState({
                validationError: "Team was not added."
            })
        }
        
    }

    render() {
        const { name, teamMembers} = this.state
        return (
            <LayoutComponent>
                <Container className="container">
                <Title>Create a Team</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />

                <Label>Team Members: </Label>
                <InputText
                   type="text"
                   value={teamMembers}
                   onChange={this.handleChangeInputTeamMembers}
                />

                <Button onClick={this.handleIncludeTeam}>Add Team</Button>
                <CancelButton href={'/teams'}>Cancel</CancelButton>
                <div style={{color: 'red', marginTop: '5px'}}> 
                    {this.state.validationError} 
                </div>
                 </Container> 

            </LayoutComponent>
            
        )
    }
}

export default TeamInsert