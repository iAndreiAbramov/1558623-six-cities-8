import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import PageHeaderLogo from './page-header-logo';

describe('Component PageHeaderLogo', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const { getByAltText, getByRole } = render(
      <Router history={ history }>
        <PageHeaderLogo />
      </Router>
    );

    expect(getByAltText('6 cities logo')).toBeInTheDocument();
    expect(getByRole('link')).toBeInTheDocument();
  });
});
