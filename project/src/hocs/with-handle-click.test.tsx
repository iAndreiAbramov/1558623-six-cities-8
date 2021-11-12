import React from 'react';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { mockStoreWithAuth } from '../mocks/mock-store';
import withHandleClick from './with-handle-click';

describe('HOC: withHandleClick', () => {
  const mockStore = configureMockStore();
  const store = mockStore(mockStoreWithAuth);
  const TEST_ID = '4';
  const TEST_IS_FAVORITE = false;

  it('should correctly render passed component', () => {
    const PassedComponentWrapped = withHandleClick(() => <h1>Wrapped component</h1>);
    const props = { isFavorite: TEST_IS_FAVORITE, offerId: TEST_ID, handleBookmarkClick: () => null };
    render(
      <Provider store={ store }>
        <PassedComponentWrapped
          { ...props }
        />
      </Provider>);

    expect(screen.getByText(/Wrapped component/i)).toBeInTheDocument();
  });
});
