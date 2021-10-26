import React, { useState } from 'react';
import { connect } from 'react-redux';
import HomePageListConnected from '../home-page-list/home-page-list';
import HomePageMap from '../home-page-map/home-page-map';
import HomePageTabs from '../home-page-tabs/home-page-tabs';
import { OfferDataTypes } from '../../types/offer-data-types';
import { CityLocationTypes, PointTypes, StateTypes } from '../../types/state-types';

type HomePageMainTypes = {
  offersData: OfferDataTypes[],
  activeCityName: string,
  activeCityLocation: CityLocationTypes,
  pointsForMap: PointTypes[],
}

const mapStateToProps = (state: StateTypes) => ({
  offersData: state.offersData,
  activeCityName: state.activeCity.name,
  activeCityLocation: state.activeCity.location,
  pointsForMap: state.pointsForMap,
});

const HomePageMainConnected = connect(mapStateToProps)(HomePageMain);

function HomePageMain(props: HomePageMainTypes): JSX.Element {
  const { offersData, pointsForMap, activeCityLocation } = props;
  const [activeCardId, setActiveCardId] = useState('');

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <HomePageTabs />
      <div className="cities">
        <div className="cities__places-container container">
          <HomePageListConnected
            offersData={ offersData }
            onActiveCardChange={ (newId: string): void => (
              setActiveCardId(newId)
            ) }
          />
          <HomePageMap
            activeCardId={ activeCardId }
            cityLocation={ activeCityLocation }
            pointsForMap={ pointsForMap }
          />
        </div>
      </div>
    </main>
  );
}

export { HomePageMain };
export default HomePageMainConnected;
