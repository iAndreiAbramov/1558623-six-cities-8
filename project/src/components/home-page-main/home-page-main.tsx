import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch, bindActionCreators } from '@reduxjs/toolkit';
import { FetchStatus } from '../../const';
import HomePageListConnected from '../home-page-list/home-page-list';
import HomePageMap from '../home-page-map/home-page-map';
import HomePageTabs from '../home-page-tabs/home-page-tabs';
import HomePageEmpty from '../home-page-empty/home-page-empty';
import { initActiveCityAction } from '../../store/api-actions';
import { StateTypes } from '../../types/state-types';

const mapStateToProps = (state: StateTypes) => ({
  fetchStatus: state.fetchStatus,
  offersData: state.offersData,
  activeCityName: state.activeCity.name,
  activeCityLocation: state.activeCity.location,
  pointsForMap: state.pointsForMap,
});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  refreshPageData: initActiveCityAction,
}, dispatch);

const homePageMainConnector = connect(mapStateToProps, mapDispatchToProps);
const HomePageMainConnected = homePageMainConnector(HomePageMain);

type HomePageMainTypes = ConnectedProps<typeof homePageMainConnector>;

function HomePageMain(props: HomePageMainTypes): JSX.Element {
  const { offersData, pointsForMap, activeCityLocation, activeCityName, fetchStatus, refreshPageData } = props;
  const [activeCardId, setActiveCardId] = useState('');
  const containerClass = offersData.length > 0
    ? 'cities__places-container container'
    : 'cities__places-container cities__places-container--empty container';
  const mainClass = offersData.length > 0
    ? 'page__main page__main--index'
    : 'page__main page__main--index page__main--index-empty';

  useEffect(() => {
    refreshPageData(activeCityName);
  }, []);

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
