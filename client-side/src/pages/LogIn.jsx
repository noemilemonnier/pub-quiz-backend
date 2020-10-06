import React, { Component } from 'react'
import api from '../api'
import styled from 'styled-components'
import '../assets/style/logIn.css'
import { LayoutComponent } from '../components'
import * as constants from "../app/constantFile"


const Container = styled.div.attrs({
    className: 'container',
})`
    background-color: transparent;
    padding: 2rem 2rem 2rem 2rem;
`


/**
 * Login component
 */
class LogIn extends Component {

    constructor() {
        super();
        this.state = {
            teams: [],
            name: '',
            validationError: '',
            displayQuiz: ''
        };
    }


    //Fetching list of teams
    componentDidMount() {
        fetch("http://localhost:8080/teams")
        .then((response) => {
            return response.json();
        })
        .then(data => {
            let teamsFromApi = data.map(team => {
                return {value: team.name, display: team.name}
            });
            this.setState({
                teams: [{value: '', display: ''}].concat(teamsFromApi)
            });
        }).catch(error => {
            console.log(error);
        });
    }

    
    //to update the team as login
    handleOnSubmit = async () => {
        try{
            console.log(this.state.name + " is trying to log in.") 
            const {name} = this.state
            

            //Trying to see if the team is logged in or not
             await api.logInTeam(name, '').then(res => {
                console.log(this.state.name + " has logged in.") 

                this.setState({
                    validationError: "Team " + this.state.name + " has logged in successfully! ",
                    displayQuiz: true
                })
                
                openInSameTab(constants.clientURL.concat('/teams'));

                function openInSameTab(url) {
                    window.open(url, '_self');
                  }
             })
        } 
        catch(error){
            console.log(error);
            this.setState({
                validationError: "Team " + this.state.name + " is already logged in."
            })
        }
            
    }
    

    render() {

        return (
            <LayoutComponent>
 
                    <Container className="container">
                    <div className="auth-wrapper">
                    <div className="auth-inner">
                    <div>
                        <h3>Sign In</h3>
                        <div className="form-group">
                            <label>Select your team:</label>
                            <p>
                                <select
                                    value={this.state.name}
                                    onChange={e =>
                                            this.setState({
                                            name: e.target.value,
                                            validationError: e.target.value === "" ? "You must select your team" : ""
                                            })
                                    }> 
                                    {this.state.teams.map(team => ( <option key={team.value} value={team.value}> {team.display} </option> ))}
                                </select> 
                            </p>
                            <button className="btn btn-outline-success" onClick={this.handleOnSubmit}>Submit</button>
                        </div>
                        
                    </div>
                    <div style={{color: 'red', marginTop: '5px'}}>  {this.state.validationError}  </div>
                    </div>
                    </div>
                    </Container> 
            </LayoutComponent>
        
           
        )
      }


}

export default LogIn