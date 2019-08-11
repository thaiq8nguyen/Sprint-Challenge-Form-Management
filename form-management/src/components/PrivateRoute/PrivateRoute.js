import React from "react";
import { Redirect, Route } from "react-router-dom";
import Auth from "../../utils/auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (Auth.isAuthenticated()) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          );
        }
      }}
    />
  );
};

export default PrivateRoute;
