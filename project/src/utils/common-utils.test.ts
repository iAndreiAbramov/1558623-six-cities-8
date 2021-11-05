import { getMillisecondsFromDate, getRandomArrayItem, getRandomInteger } from './common-utils';

describe('Function: getRandomInteger', () => {
  it('should return a number, which is greater or equal than -5', () => {
    expect(getRandomInteger(-5, 5)).toBeGreaterThanOrEqual(-5);
  });
  it('should return a number, which is less or equal than 5', () => {
    expect(getRandomInteger(-5, 5)).toBeLessThanOrEqual(5);
  });
});

describe('Function: getRandomArrayItem', () => {
  it('should return random item from given array', () => {
    const cities = ['Paris', 'Amsterdam', 'Cologne', 'Dusseldorf'];
    expect(cities).toContain(getRandomArrayItem(cities));
  });
});

describe('Function getMillisecondsFromDate', () => {
  it('should transform given date string to milliseconds', () => {
    expect(getMillisecondsFromDate('Fri Nov 05 2021 18:19:26 GMT+0300 (GMT+03:00)'))
      .toBe(1636125566000);
  });
});
