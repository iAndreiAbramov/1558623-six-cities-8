import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppRoute, AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../store/selectors';

type PrivateRouteTypes = RouteProps & {
  render: () => JSX.Element,
};

function PrivateRoute(props: PrivateRouteTypes): JSX.Element {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const { path, exact, render } = props;

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
