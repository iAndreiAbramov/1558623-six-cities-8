const USER_EMAIL = 'six-sities-token';

type Email = string;

export const getEmail = (): Email => {
  const token = localStorage.getItem(USER_EMAIL);
  return token || '';
};

export const setEmail = (email: Email): void => {
  localStorage.setItem(USER_EMAIL, email);
};

export const dropEmail = (): void  => {
  localStorage.removeItem(USER_EMAIL);
};
