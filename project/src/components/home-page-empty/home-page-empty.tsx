import React from 'react';

type HomePageEmptyTypes = {
  activeCityName: string,
}

function HomePageEmpty(props: HomePageEmptyTypes): JSX.Element {
  const { activeCityName } = props;
  return (
    <>
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">We could not find any property available at the moment in { activeCityName }</p>
        </div>
      </section>
      <div className="cities__right-section" />
    </>
  );
}

export default HomePageEmpty;
