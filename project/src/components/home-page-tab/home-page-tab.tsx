import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch, bindActionCreators } from '@reduxjs/toolkit';
import { Link } from 'react-router-dom';
import { ActionTypes } from '../../types/action-types';
import { initActiveCityAction } from '../../store/api-actions';
import { StateTypes } from '../../types/state-types';

const mapStateToProps = (state: StateTypes) => ({
  activeCity: state.activeCity.name,
});
const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>) => bindActionCreators({
  setActiveCity: initActiveCityAction,
}, dispatch);

const homePageTabConnector = connect(mapStateToProps, mapDispatchToProps);
const HomePageTabConnected = homePageTabConnector(HomePageTab);

type HomePageTabTypes = { name: string } & ConnectedProps<typeof homePageTabConnector>;

function HomePageTab(props: HomePageTabTypes): JSX.Element {
  const { name, activeCity, setActiveCity } = props;
  const tabClass = name.toLowerCase() === activeCity.toLowerCase()
    ? 'locations__item-link tabs__item tabs__item--active'
    : 'locations__item-link tabs__items';

  return (
    <Link className={ tabClass } to="/">
      <span onClick={ () => setActiveCity(name) }>
        { name }
      </span>
    </Link>
  );
}

export { HomePageTab };
export default HomePageTabConnected;
