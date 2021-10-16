import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

type PrivateRouteTypes = RouteProps & {
  render: () => JSX.Element,
  authorizationStatus: AuthorizationStatus,
}

function PrivateRoute(props: PrivateRouteTypes): JSX.Element {
  const { path, exact, render, authorizationStatus } = props;

  return (
    <Route
      path={ path }
      exact={ exact }
      render={ () => (
        authorizationStatus === AuthorizationStatus.Auth
          ? render()
          : <Redirect to={ AppRoute.Login } />
      ) }
    />
  );
}

export default PrivateRoute;
