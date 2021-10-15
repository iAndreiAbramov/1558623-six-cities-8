import React from 'react';

type HomePageMapProps = {
  activeCardId: string;
}

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
