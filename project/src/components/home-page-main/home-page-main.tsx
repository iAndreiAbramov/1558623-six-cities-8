import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Cities, DEFAULT_CITY_NAME } from '../../const';
import HomePageListConnected from '../home-page-list/home-page-list';
import HomePageMap from '../home-page-map/home-page-map';
import HomePageTabs from '../home-page-tabs/home-page-tabs';
import { OfferDataTypes } from '../../types/offer-data-types';
import { PointTypes, StateTypes } from '../../types/state-types';

type HomePageMainTypes = {
  offersData: OfferDataTypes[],
  activeCity: string,
  pointsForMap: PointTypes[],
}

const mapStateToProps = (state: StateTypes) => ({
  offersData: state.offersData,
  activeCity: state.activeCity.name,
  pointsForMap: state.pointsForMap,
});

const HomePageMainConnected = connect(mapStateToProps)(HomePageMain);

function HomePageMain(props: HomePageMainTypes): JSX.Element {
  const { offersData, activeCity, pointsForMap } = props;
  const [activeCardId, setActiveCardId] = useState('');

  const cityData = offersData.filter((offer) => (
    offer.city.name === activeCity
  ));

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <HomePageTabs />
      <div className="cities">
        <div className="cities__places-container container">
          <HomePageListConnected
            offersData={ cityData }
            onActiveCardChange={ (newId: string): void => (
              setActiveCardId(newId)
            ) }
          />
          <HomePageMap
            activeCardId={ activeCardId }
            city={ Cities[activeCity] }
            pointsForMap={ pointsForMap }
          />
        </div>
      </div>
    </main>
  );
}

export { HomePageMain };
export default HomePageMainConnected;
