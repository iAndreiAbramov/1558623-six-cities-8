import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import { createFakeAppWithStore } from '../../utils/testing-utils';
import { mockStoreWithNoAuth } from '../../mocks/mock-store';
import LoginPage from './login-page';

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
});
