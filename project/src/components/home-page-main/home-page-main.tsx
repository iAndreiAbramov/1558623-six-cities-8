import React, { useState } from 'react';
import { connect } from 'react-redux';
import HomePageListConnected from '../home-page-list/home-page-list';
import HomePageMap from '../home-page-map/home-page-map';
import HomePageTabs from '../home-page-tabs/home-page-tabs';
import { OfferDataTypes } from '../../types/offer-data-types';
import { CityLocationTypes, PointTypes, StateTypes } from '../../types/state-types';
import HomePageEmpty from '../home-page-empty/home-page-empty';
import { FetchStatus } from '../../const';

type HomePageMainTypes = {
  fetchStatus: string,
  offersData: OfferDataTypes[],
  activeCityName: string,
  activeCityLocation: CityLocationTypes,
  pointsForMap: PointTypes[],
}

const mapStateToProps = (state: StateTypes) => ({
  fetchStatus: state.fetchStatus,
  offersData: state.offersData,
  activeCityName: state.activeCity.name,
  activeCityLocation: state.activeCity.location,
  pointsForMap: state.pointsForMap,
});

const HomePageMainConnected = connect(mapStateToProps)(HomePageMain);

function HomePageMain(props: HomePageMainTypes): JSX.Element {
  const { offersData, pointsForMap, activeCityLocation, activeCityName, fetchStatus } = props;
  const [activeCardId, setActiveCardId] = useState('');
  const containerClass = offersData.length > 0
    ? 'cities__places-container container'
    : 'cities__places-container cities__places-container--empty container';
  const mainClass = offersData.length > 0
    ? 'page__main page__main--index'
    : 'page__main page__main--index page__main--index-empty';

  return (
    <main className={ mainClass }>
      <h1 className="visually-hidden">Cities</h1>
      <HomePageTabs />
      <div className="cities">
        <div className={ containerClass }>
          {
            offersData.length === 0 && fetchStatus === FetchStatus.Success
            && <HomePageEmpty activeCityName={ activeCityName } />
          }
          {
            offersData.length > 0
            &&
            <>
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
            </>
          }
        </div>
      </div>
    </main>
  );
}

export { HomePageMain };
export default HomePageMainConnected;
