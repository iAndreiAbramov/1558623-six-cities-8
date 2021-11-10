import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createFakeAppWithStore } from '../../utils/testing-utils';
import { fakeStoreWithNoAuth } from '../../mocks/mock-store';
import LoginPage from './login-page';

const history = createMemoryHistory();
const fakeApp = createFakeAppWithStore(LoginPage, fakeStoreWithNoAuth, history);

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

    userEvent.type(emailInput, 'fake-login@fake.com');
    userEvent.type(passwordInput, 'fake-password');

    expect(emailInput).toHaveValue('fake-login@fake.com');
    expect(passwordInput).toHaveValue('fake-password');
  });
});
