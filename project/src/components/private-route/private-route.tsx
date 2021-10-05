import { AppRoute, AuthorizationStatus } from '../../const';
import { PrivateRouteProps } from '../../types/private-route-props';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
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
