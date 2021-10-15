import { AuthorizationStatus } from '../const';
import { RouteProps } from 'react-router-dom';

export type PrivateRouteTypes = RouteProps & {
  render: () => JSX.Element;
  authorizationStatus: AuthorizationStatus;
}
