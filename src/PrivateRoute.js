import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getUser } from "../HandleUser";

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => {
        const currentUser = getUser();
        if (!currentUser) {
            // not logged in so redirect to login page with the return url
            return <Redirect to={{ pathname: '/dang-nhap', state: { from: props.location } }} />
        }

        // authorised so return component
        return <Component {...props} />
    }} />
)