import React from 'react';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import NotFoundPage from './not-found-page';

describe('Component: notFoundPage', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={ history }>
        <NotFoundPage />
      </Router>
    );

    const textElement = getByText('Requested page not found.');
    const linkElement = getByText('Return to main page');

    expect(textElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });
});
