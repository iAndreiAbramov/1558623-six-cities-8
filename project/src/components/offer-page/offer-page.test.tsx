import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { fakeStoreWithAuth } from '../../mocks/mock-store';
import { createFakeAppWithStore } from '../../utils/testing-utils';
import OfferPage from './offer-page';

const history = createMemoryHistory();
const fakeApp = createFakeAppWithStore(OfferPage, fakeStoreWithAuth, history);

describe('Component OfferPageMain', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(fakeApp);

    expect(getByTestId('header')).toBeInTheDocument();
    expect(getByTestId('offer-main')).toBeInTheDocument();
    expect(getByTestId('offer-main')).toBeInTheDocument();
    expect(getByTestId('offer-main')).toBeInTheDocument();
  });
});
