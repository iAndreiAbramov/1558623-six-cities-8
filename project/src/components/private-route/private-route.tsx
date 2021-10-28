import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { StateTypes } from '../../types/state-types';
import { connect } from 'react-redux';

const mapStateToProps = (state: StateTypes) => ({
  authorizationStatus: state.authorization,
});

const privateRouteConnector = connect(mapStateToProps);
const PrivateRouteConnected = privateRouteConnector(PrivateRoute);

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

export { PrivateRoute };
export default PrivateRouteConnected;
