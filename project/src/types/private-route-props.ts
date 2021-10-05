import { AuthorizationStatus } from '../const';
import { RouteProps } from 'react-router-dom';

export type PrivateRouteProps= RouteProps & {
  render: () => JSX.Element;
  authorizationStatus: AuthorizationStatus;
}
