import { renderHook } from '@testing-library/react-hooks';
import { Cities, TEST_CITY_NAME } from '../const';
import useMap from './use-map';

describe('User Hook useMap', () => {
  it('should return null if ref was not passed', () => {
    const ref = {
      current: null,
    };
    const fakeLocation = Cities[TEST_CITY_NAME].location;
    const { result }  = renderHook(() => useMap(ref, fakeLocation));

    expect(result.current).toBe(null);
  });

  it('should return map instance if correct ref was passed', () => {
    const ref = {
      current: document.createElement('section'),
    };
    const fakeLocation = Cities[TEST_CITY_NAME].location;
    const { result }  = renderHook(() => useMap(ref, fakeLocation));

    expect(result.current).not.toBe(null);
  });
});
