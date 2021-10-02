import { AppProps } from '../../types/app-types';
import MainPage from '../main-page/main-page';
import React from 'react';

function App({ offersNumber }: AppProps): JSX.Element {
  return (
    <MainPage offersNumber={ offersNumber } />
  );
}

export default App;
