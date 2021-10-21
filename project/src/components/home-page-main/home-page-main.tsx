import React, { useState } from 'react';
import { DEFAULT_CITY } from '../../const';
import HomePageListConnected from '../home-page-list/home-page-list';
import HomePageMap from '../home-page-map/home-page-map';
import HomePageTabs from '../home-page-tabs/home-page-tabs';
import { OfferDataTypes } from '../../types/offer-data-types';
import { State } from '../../types/state';
import { connect } from 'react-redux';

type HomePageMainTypes = {
  offersData: OfferDataTypes[],
}

const mapStateToProps = (state: State) => ({
  offersData: state.offersList,
});

const HomePageMainConnected = connect(mapStateToProps)(HomePageMain);

function HomePageMain(props: HomePageMainTypes): JSX.Element {
  const { offersData } = props;
  const [activeCardId, setActiveCardId] = useState('');

  const points = offersData.map((item) => {
    const { id } = item;
    const { latitude, longitude } = item.location;
    return {
      latitude: latitude,
      longitude: longitude,
      offerId: id,
    };
  });

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
            city={ DEFAULT_CITY }
            points={ points }
          />
        </div>
      </div>
    </main>
  );
}

export { HomePageMain };
export default HomePageMainConnected;
