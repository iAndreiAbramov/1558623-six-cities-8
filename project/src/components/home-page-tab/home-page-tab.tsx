import React from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from '@reduxjs/toolkit';
import { Link } from 'react-router-dom';
import { ActionTypes } from '../../types/action-types';
import { changeCityAction } from '../../store/actions';
import { State } from '../../types/state';

type HomePageTabTypes = {
  name: string,
  currentCity: string,
  setActiveCity: (newName: string) => ActionTypes,
}

const mapStateToProps = (state: State) => ({
  currentCity: state.cityName,
});
const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>) => bindActionCreators({
  setActiveCity: changeCityAction,
}, dispatch as Dispatch);

const HomePageTabConnected = connect(mapStateToProps, mapDispatchToProps)(HomePageTab);

function HomePageTab(props: HomePageTabTypes): JSX.Element {
  const { name, currentCity, setActiveCity } = props;
  const tabClass = name.toLowerCase() === currentCity.toLowerCase()
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
