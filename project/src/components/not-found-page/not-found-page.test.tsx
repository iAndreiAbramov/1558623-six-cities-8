import React from 'react';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import NotFoundPage from './not-found-page';

describe('Component: notFoundPage', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const { getByText, getByRole } = render(
      <Router history={ history }>
        <NotFoundPage />
      </Router>,
    );

    expect(getByText(/Requested page not found/)).toBeInTheDocument();
    expect(getByText(/Return to main page/)).toBeInTheDocument();
    expect(getByRole('link')).toBeInTheDocument();
  });
});
