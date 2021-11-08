import React from 'react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import LoginPage from './login-page';

const history = createMemoryHistory();

const mockStore = configureMockStore();

describe('Component LoginPage', () => {
  it('should render the LoginPage when user navigates to "/login"', () => {
    render(
      <Provider store={ mockStore() }>
        <Router history={ history }>
          <LoginPage />
        </Router>
      </Provider>
    );

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
