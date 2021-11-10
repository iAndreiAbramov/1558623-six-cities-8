import React from 'react';
import { render } from '@testing-library/react';
import FetchFailMessage from './fetch-fail-message';
import { FETCH_FAIL_MESSAGE } from '../../const';

describe('Component FetchFailMessage', () => {
  it('should render correctly', () => {
    const { getByText } = render(<FetchFailMessage />);
    expect(getByText(new RegExp(FETCH_FAIL_MESSAGE, 'i'))).toBeInTheDocument();
  });
});
