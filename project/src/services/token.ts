const AUTH_TOKEN_KEY_NAME = 'six-sities-token';

type Token = string;

export const getToken = (): Token => {
  const token = sessionStorage.getItem(AUTH_TOKEN_KEY_NAME);
  return token || '';
};

export const setToken = (token: Token): void => {
  sessionStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
};

export const dropToken = (): void  => {
  sessionStorage.removeItem(AUTH_TOKEN_KEY_NAME);
};
