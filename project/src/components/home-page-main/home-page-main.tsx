import React, { useCallback, useEffect, useState } from 'react';
import { connect, ConnectedProps, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators, Dispatch } from '@reduxjs/toolkit';
import { FetchStatus } from '../../const';
import { getActiveCity, getFetchStatus, getOffersData, getPointsForMap } from '../../store/selectors';
import HomePageListConnected from '../home-page-list/home-page-list';
import HomePageMap from '../home-page-map/home-page-map';
import HomePageTabs from '../home-page-tabs/home-page-tabs';
import HomePageEmpty from '../home-page-empty/home-page-empty';
import { initActiveCityAction } from '../../store/api-actions';

function HomePageMainConnected(): JSX.Element {
  const fetchStatus = useSelector(getFetchStatus);
  const offersData = useSelector(getOffersData);
  const activeCityName = useSelector(getActiveCity).name;
  const activeCityLocation = useSelector(getActiveCity).location;
  const pointsForMap = useSelector(getPointsForMap);

  const dispatch = useDispatch();

  const [activeCardId, setActiveCardId] = useState('');
  const containerClass = offersData.length > 0
    ? 'cities__places-container container'
    : 'cities__places-container cities__places-container--empty container';
  const mainClass = offersData.length > 0
    ? 'page__main page__main--index'
    : 'page__main page__main--index page__main--index-empty';

  useEffect(() => {
    dispatch(initActiveCityAction(activeCityName));
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

export default HomePageMainConnected;
