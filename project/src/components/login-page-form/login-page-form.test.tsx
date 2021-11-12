import * as Redux from 'react-redux';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createFakeAppWithStore } from '../../utils/testing-utils';
import LoginPageForm from './login-page-form';
import { mockStoreWithNoAuth } from '../../mocks/mock-store';

const history = createMemoryHistory();
const fakeApp = createFakeAppWithStore(LoginPageForm, mockStoreWithNoAuth, history);

describe('Component LoginPageForm', () => {
  it('input fields should render values, typed by users', () => {
    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);

    render(fakeApp);
    const emailInput = screen.getByTestId(/email/i);
    const passwordInput = screen.getByTestId(/password/i);

    userEvent.type(emailInput, 'fake-login@fake.com');
    userEvent.type(passwordInput, 'fake-password');

    expect(emailInput).toHaveValue('fake-login@fake.com');
    expect(passwordInput).toHaveValue('fake-password');

    userEvent.click(screen.getByRole('button'));

    expect(dispatch).toBeCalledTimes(1);
  });
});
