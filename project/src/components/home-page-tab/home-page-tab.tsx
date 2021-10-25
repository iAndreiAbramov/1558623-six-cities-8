import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch, bindActionCreators } from '@reduxjs/toolkit';
import { Link } from 'react-router-dom';
import { ActionTypes } from '../../types/action-types';
import { changeCityAction } from '../../store/actions';
import { StateTypes } from '../../types/state-types';

const mapStateToProps = (state: StateTypes) => ({
  currentCity: state.activeCity.name,
});
const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>) => bindActionCreators({
  setActiveCity: changeCityAction,
}, dispatch);

const HomePageTabConnected = connect(mapStateToProps, mapDispatchToProps);

type HomePageTabTypes = { name: string } & ConnectedProps<typeof HomePageTabConnected>;

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
export default HomePageTabConnected(HomePageTab);
