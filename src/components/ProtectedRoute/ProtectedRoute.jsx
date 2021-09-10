import React, { useState } from 'react';
import { Route,Redirect } from 'react-router';

const ProtectedRoute = ({children,rest}) => {
    const[isAuthenticated,setIsAuthenticated]=useState(true)
    return (
        <Route
      {...rest}
      render={({ location }) =>
      isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default ProtectedRoute;