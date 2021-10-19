import React from 'react';
import { SortOptions } from '../../const';

type HomePageSortTogglerTypes = {
  clickHandler: (sortOption: string) => void,
}

function HomePageSortToggler(props: HomePageSortTogglerTypes): JSX.Element {
  const { clickHandler } = props;
  return (
    <ul className="places__options places__options--custom places__options--opened">
      <li
        onClick={ () => clickHandler(SortOptions.POPULAR) }
        className="places__option places__option--active"
        tabIndex={ 0 }>
        Popular
      </li>
      <li
        onClick={ () => clickHandler(SortOptions.PRICE_UP) }
        className="places__option"
        tabIndex={ 0 }>
        Price: low to high
      </li>
      <li
        onClick={ () => clickHandler(SortOptions.PRICE_DOWN) }
        className="places__option"
        tabIndex={ 0 }>
        Price: high to low
      </li>
      <li
        onClick={ () => clickHandler(SortOptions.RATING_DOWN) }
        className="places__option"
        tabIndex={ 0 }>Top rated first
      </li>
    </ul>
  );
}

export default HomePageSortToggler;
