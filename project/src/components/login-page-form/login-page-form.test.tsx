import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createFakeAppWithStore } from '../../utils/testing-utils';
import { mockStoreWithNoAuth } from '../../mocks/mock-store';
import LoginPageForm from './login-page-form';

const history = createMemoryHistory();
const fakeApp = createFakeAppWithStore(LoginPageForm, mockStoreWithNoAuth, history);

describe('Component LoginPageForm', () => {
  it('input fields should render values, typed by users', () => {
    render(fakeApp);
    const emailInput = screen.getByTestId(/email/i);
    const passwordInput = screen.getByTestId(/password/i);

    userEvent.type(emailInput, 'fake-login@fake.com');
    userEvent.type(passwordInput, 'fake-password');

    expect(emailInput).toHaveValue('fake-login@fake.com');
    expect(passwordInput).toHaveValue('fake-password');
  });
});
