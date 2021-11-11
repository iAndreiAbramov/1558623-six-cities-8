import React from 'react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mockStoreWithAuth } from '../../mocks/mock-store';
import OfferPageNewComment from './offer-page-new-comment';

describe('Component: OfferPageNewComment', () => {
  const TEST_ID = '1';
  const mockStore = configureMockStore();
  const store = mockStore(mockStoreWithAuth);
  const NUMBER_OF_RADIO_INPUTS = 5;
  const TEST_COMMENT_SHORT = 'This is test comment';
  const TEST_COMMENT_LONG = 'This is test comment and it\'s length is more than 50 symbols';
  const TEST_CHECKBOX = 4;

  it('should render correctly', () => {
    const { getByRole, getAllByRole } = render(
      <Provider store={ store }>
        <OfferPageNewComment id={ TEST_ID } />);
      </Provider>);

    expect(getByRole('button')).toBeInTheDocument();
    expect(getByRole('button')).toBeDisabled();
    expect(getAllByRole('radio')).toHaveLength(NUMBER_OF_RADIO_INPUTS);
    expect(getByRole('textbox')).toBeInTheDocument();
  });

  it('should display a text, typed by user and set checkbox to checked on click', () => {
    const { getByText, getByRole, getAllByRole } = render(
      <Provider store={ store }>
        <OfferPageNewComment id={ TEST_ID } />);
      </Provider>);

    userEvent.type(getByRole('textbox'), TEST_COMMENT_SHORT);
    userEvent.click(getAllByRole('radio')[TEST_CHECKBOX]);

    expect(getByText(TEST_COMMENT_SHORT)).toBeInTheDocument();
    expect(getAllByRole('radio')[TEST_CHECKBOX]).toBeChecked();

    expect(getByRole('button')).toBeDisabled();
  });

  it('should enable submit button if conditions are met', () => {

    const { getByRole, getAllByRole } = render(
      <Provider store={ store }>
        <OfferPageNewComment id={ TEST_ID } />);
      </Provider>);

    userEvent.type(getByRole('textbox'), TEST_COMMENT_LONG);
    userEvent.click(getAllByRole('radio')[TEST_CHECKBOX]);

    expect(getByRole('button')).not.toBeDisabled();
  });
});
