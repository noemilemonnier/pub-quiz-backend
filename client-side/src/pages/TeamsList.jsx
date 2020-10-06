import React, { Component } from 'react'
import ReactTable from "../components/ReactTable";  
import styled from 'styled-components'
import '../assets/style/teamslist-page.css';
import * as constants from "../app/constantFile"


const Container = styled.div.attrs({
    className: 'container',
})`
    background-color: transparent;
    padding: 2rem;
`

class TeamsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            teams: []
        };
      }
    
      componentDidMount() {
          fetch("http://localhost:8080/teams")
            .then(res => res.json())
            .then(
            result => {
                this.setState({
                isLoaded: true,
                teams: result
                });
            },
            error => {
                this.setState({
                isLoaded: true,
                error: error
            });
            }
        );
      }

    

      render() {
        const { error, isLoaded, teams } = this.state;

        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {           

            //Declaring columns
            const columns = [{  
                Header: 'Name',  
                accessor: 'name'  
               },{  
                Header: 'Team Members',  
                accessor: 'teamMembers'  
               },{  
                Header: 'Score',  
                accessor: 'score'  
              },{
                Header: 'is Playing',  
                id: 'isLogIn',  
                //Since isLogIn is a Boolean, I need to set it as a String and instead of showing true/false, it displays yes/no
                accessor: isLogIn => { return isLogIn.isLogIn ? 'Yes' : 'No' }
             }
            ]
            
            return (
              <div>
              <Container className="container">
                    <span></span>
                    <h1 id="title"> Teams for <span id="pq-title">{constants.pubquiz_Title}</span> co-hosted with <span id="pq-cohost"> {constants.pubquiz_Cohost}  </span></h1>
                    <span></span>
                    <div>  
                     <ReactTable  
                       data={teams}  
                       columns={columns} 
                        />  
                    </div>   
                </Container>    
              </div>
           );      

          

        }
      }
    }

export default TeamsList