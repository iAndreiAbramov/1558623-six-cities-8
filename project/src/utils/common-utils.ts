export const getRandomInteger = (min: number, max: number): number => {
  let startValue = Math.ceil(Math.min(min, max));
  let endValue = Math.floor(Math.max(min, max));
  startValue -= 0.5;
  endValue += 0.5;
  const randomInteger = startValue + Math.random() * (endValue - startValue);
  return Math.round(randomInteger);
};

export const getRandomArrayItem = <T>(array: T[]): T => array[getRandomInteger(0, array.length - 1)];

export const getMillisecondsFromDate = (date: string): number => (
  Date.parse(date)
);
