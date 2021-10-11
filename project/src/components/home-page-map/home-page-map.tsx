import React from 'react';
import { HomePageMapProps } from '../../types/home-page-types';

function HomePageMap(props: HomePageMapProps): JSX.Element {
  const { activeCardId } = props;
  return (
    <div className="cities__right-section">
      <p style={ { position: 'absolute', fontWeight: 'bold' } }>{ activeCardId }</p>
      <section className="cities__map map" />
    </div>
  );
}

export default HomePageMap;
