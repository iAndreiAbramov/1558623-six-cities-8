import React, { useCallback, useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { bindActionCreators, Dispatch } from '@reduxjs/toolkit';
import { FetchStatus } from '../../const';
import HomePageListConnected from '../home-page-list/home-page-list';
import HomePageMap from '../home-page-map/home-page-map';
import HomePageTabs from '../home-page-tabs/home-page-tabs';
import HomePageEmpty from '../home-page-empty/home-page-empty';
import { initActiveCityAction } from '../../store/api-actions';
import { getActiveCity, getFetchStatus, getOffersData, getPointsForMap } from '../../store/selectors';
import { RootStateTypes } from '../../store/reducers/root-reducer';

const mapStateToProps = ( state: RootStateTypes) => ({
  fetchStatus: getFetchStatus(state),
  offersData: getOffersData(state),
  activeCityName: getActiveCity(state).name,
  activeCityLocation: getActiveCity(state).location,
  pointsForMap: getPointsForMap(state),
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

  const handleActiveCardChange = useCallback((newId: string): void => (
    setActiveCardId(newId)
  ), []);

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
                onActiveCardChange={ handleActiveCardChange }
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
