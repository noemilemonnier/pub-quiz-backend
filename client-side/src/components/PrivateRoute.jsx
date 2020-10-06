/*
* This component/Route is used to verify if a user is logged in by checking if there is a user object in local storage.
* Tutorial followed for this : https://jasonwatmore.com/post/2018/09/11/react-basic-http-authentication-tutorial-example
*/



import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('user')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)