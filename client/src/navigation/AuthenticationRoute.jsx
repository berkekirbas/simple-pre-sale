import React from "react";
import {Route, Redirect} from "react-router-dom";
import {AuthenticationRoutes} from "../config/RouteConfig";

const AuthenticationRoute = ({component: Component, ...rest}) => {
    <Route
        {...rest}
        render={props =>
            localStorage.getItem("auth_key") ? (
                    <Redirect to={PrivateRoutes.PRESALE_DASHBOARD}/>
            ) : (
                <Component {...props} />
            )}
    />
}

export default AuthenticationRoute