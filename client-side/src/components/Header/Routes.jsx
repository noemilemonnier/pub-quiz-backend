import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { LogIn, TeamsList, TeamInsert, TeamsUpdate } from '../../pages'
import 'bootstrap/dist/css/bootstrap.min.css'


class Routes extends Component {
    render() {
        return (
                <Switch>
                    <Route path="/" exact component={LogIn} />
                    <Route path="/teams" exact component={TeamsList} />
                    <Route path="/teams/create" exact component={TeamInsert} />
                    <Route path="/teams/update/" exact component={TeamsUpdate} />
                </Switch>
        )
    }
}

export default Routes;