import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getActiveCity } from '../../store/selectors';
import { initActiveCityAction } from '../../store/api-actions';

function HomePageTab(props: { name: string }): JSX.Element {
  const activeCityName= useSelector(getActiveCity).name;
  const dispatch = useDispatch();
  const { name } = props;
  const tabClass = name.toLowerCase() === activeCityName.toLowerCase()
    ? 'locations__item-link tabs__item tabs__item--active'
    : 'locations__item-link tabs__items';

  const handleTabClick = () => dispatch(initActiveCityAction(name));

  return (
    <Link className={ tabClass } to="/" onClick={ handleTabClick }>
      <span >
        { name }
      </span>
    </Link>
  );
}

export default HomePageTab;
