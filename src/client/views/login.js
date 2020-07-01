import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const Login = () => (
    <Route {...rest} render={props => (
        localStorage.setItem('Authorized', true)
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    )} />
)