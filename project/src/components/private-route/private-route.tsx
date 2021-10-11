import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { PrivateRouteTypes } from '../../types/private-route-types';

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
