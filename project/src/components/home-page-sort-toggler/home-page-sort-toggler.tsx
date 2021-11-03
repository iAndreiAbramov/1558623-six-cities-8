import React from 'react';
import { SortOptions } from '../../const';

type HomePageSortTogglerTypes = {
  clickHandler: (sortOption: SortOptions) => void,
}

function HomePageSortToggler(props: HomePageSortTogglerTypes): JSX.Element {
  const { clickHandler } = props;
  return (
    <ul className="places__options places__options--custom places__options--opened">
      <li
        onClick={ () => clickHandler(SortOptions.Popular) }
        className="places__option places__option--active"
        tabIndex={ 0 }
      >
        Popular
      </li>
      <li
        onClick={ () => clickHandler(SortOptions.PriceUp) }
        className="places__option"
        tabIndex={ 0 }
      >
        Price: low to high
      </li>
      <li
        onClick={ () => clickHandler(SortOptions.PriceDown) }
        className="places__option"
        tabIndex={ 0 }
      >
        Price: high to low
      </li>
      <li
        onClick={ () => clickHandler(SortOptions.RatingDown) }
        className="places__option"
        tabIndex={ 0 }
      >
        Top rated first
      </li>
    </ul>
  );
}

export default HomePageSortToggler;
