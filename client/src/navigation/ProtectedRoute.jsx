import React from "react";
import {Route, Redirect} from "react-router-dom";
import {AuthenticationRoutes} from "../config/RouteConfig";

const ProtectedRoute = ({component: Component, ...rest}) => {
    <Route
        {...rest}
        render={props =>
        localStorage.getItem("auth_key") ? (
            <Component {...props} />
        ) : (
            <Redirect to={AuthenticationRoutes.LOGIN}/>
        )}
    />
}

export default ProtectedRoute