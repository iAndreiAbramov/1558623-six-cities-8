import * as Redux from 'react-redux';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import { createFakeAppWithStore } from '../../utils/testing-utils';
import { mockStoreWithNoAuth } from '../../mocks/mock-store';
import LoginPage from './login-page';
import userEvent from '@testing-library/user-event';

const history = createMemoryHistory();
const fakeApp = createFakeAppWithStore(LoginPage, mockStoreWithNoAuth, history);

describe('Component LoginPage', () => {
  it('should render the LoginPage when user navigates to "/login"', () => {
    render(fakeApp);
    history.push('/login');

    const emailInput = screen.getByTestId(/email/i);
    const passwordInput = screen.getByTestId(/password/i);
    const submitButton = screen.getByRole('button');

    expect(emailInput).toHaveAttribute('type', 'email');
    expect(passwordInput).toHaveAttribute('type', 'password');
    expect(submitButton).toHaveAttribute('type', 'submit');
  });

  it('should dispatch an action on link click', () => {
    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);

    const { getByTestId } = render(fakeApp);
    history.push('/login');

    userEvent.click(getByTestId('random-link'));

    expect(dispatch).toBeCalledTimes(1);
  });
});
