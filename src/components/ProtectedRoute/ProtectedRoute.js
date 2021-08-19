import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const ProtectedRoute = ({ getRouteAttempt, component: Component, ...props }) => (
    <Route>
      {() => (props.loggedIn ? <Component {...props} /> : <Redirect to={'./'} />)
      }
    </Route>
);
