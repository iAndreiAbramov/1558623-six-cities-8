import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { bindActionCreators, Dispatch } from '@reduxjs/toolkit';
import { Link } from 'react-router-dom';
import { initActiveCityAction } from '../../store/api-actions';
import { RootStateTypes } from '../../store/reducers/root-reducer';
import { getActiveCity } from '../../store/selectors';

const mapStateToProps = (state: RootStateTypes) => ({
  activeCityName: getActiveCity(state).name,
});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  setActiveCity: initActiveCityAction,
}, dispatch);

const homePageTabConnector = connect(mapStateToProps, mapDispatchToProps);
const HomePageTabConnected = homePageTabConnector(HomePageTab);

type HomePageTabTypes = { name: string } & ConnectedProps<typeof homePageTabConnector>;

function HomePageTab(props: HomePageTabTypes): JSX.Element {
  const { name, activeCityName, setActiveCity } = props;
  const tabClass = name.toLowerCase() === activeCityName.toLowerCase()
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
