import React, { ReactChild, ReactChildren } from 'react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import { Provider, useSelector } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import { createApi } from '../../services/api';
import { getCurrentHotel } from '../../store/selectors';
import { mockStoreWithAuth } from '../../mocks/mock-store';
import OfferPageMain from './offer-page-main';

interface AuxProps {
  children: ReactChild | ReactChildren;
}

describe('Component: OfferPageMain', () => {
  const history = createMemoryHistory();
  const onUnauthorized = jest.fn();
  const api = createApi(onUnauthorized);
  const middlewares = [thunk.withExtraArgument(api)];
  const mockStore = configureMockStore(middlewares);
  const store = mockStore(mockStoreWithAuth);

  it('should render correctly', () => {
    const wrapper = ({ children }: AuxProps ) => (
      <Provider store={ store }>{ children }</Provider>
    );

    const { result } = renderHook(() => useSelector(getCurrentHotel), { wrapper });

    render(
      <Provider store={ store }>
        <Router history={ history }>
          <OfferPageMain />
        </Router>
      </Provider>);

    expect(screen.getByText(result.current.title)).toBeInTheDocument();
    expect(screen.getByText(result.current.type)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`Max ${result.current.maxAdults} adults`, 'i') )).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`${result.current.bedrooms} Bedrooms`, 'i') )).toBeInTheDocument();
    expect(screen.getByText(new RegExp('What\'s inside', 'i') )).toBeInTheDocument();
    expect(screen.getByText(new RegExp('Meet the host', 'i') )).toBeInTheDocument();
    expect(screen.getByText(new RegExp('Other places in the neighbourhood', 'i') )).toBeInTheDocument();
  });
});
