import React from 'react';
import MainPage from '../main-page/main-page';

type AppProps = {
  offersNumber: number;
}

function App({ offersNumber }: AppProps): JSX.Element {
  return (
    <MainPage offersNumber={ offersNumber } />
  );
}

export default App;
