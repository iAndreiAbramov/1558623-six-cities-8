import React from 'react';
import * as Redux from 'react-redux';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { offerFirst } from '../../mocks/mock-offers';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import OfferCard from './offer-card';
import userEvent from '@testing-library/user-event';

describe('Component: OfferCard', () => {
  const mockStore = configureMockStore();
  const store = mockStore();
  const history = createMemoryHistory();
  const fakeApp = (
    <Provider store={ store }>
      <Router history={ history }>
        <OfferCard
          data={ offerFirst }
          articleClass={ 'test-article-class' }
          imgWrapperClass={ 'test-wrapper-class' }
        />
      </Router>
    </Provider>);

  it('should render passed data correctly', () => {
    const { title, price, type } = offerFirst;
    render(fakeApp);

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(price.toString()))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(type.toString()))).toBeInTheDocument();
  });

  it('should trigger callback on hover and leave', () => {
    const callback = jest.fn();
    render(
      <Provider store={ store }>
        <Router history={ history }>
          <OfferCard
            data={ offerFirst }
            articleClass={ 'test-article-class' }
            imgWrapperClass={ 'test-wrapper-class' }
            onActiveCardChange={ callback }
          />
        </Router>
      </Provider>);

    userEvent.hover(screen.getByTestId('offer-card'));
    expect(callback).toBeCalledTimes(1);
    expect(callback).toBeCalledWith(offerFirst.id);
    userEvent.unhover(screen.getByTestId('offer-card'));
    expect(callback).toBeCalledTimes(2);
    expect(callback).toBeCalledWith('');
  });

  it('should dispatch an action on click', () => {
    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);
    render(fakeApp);

    const [firstLink, secondLink] = screen.getAllByRole('link');

    userEvent.click(firstLink);
    userEvent.click(secondLink);

    expect(dispatch).toBeCalledTimes(2);
  });
});
