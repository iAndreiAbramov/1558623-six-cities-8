import React from 'react';

type HomePageSortDropdownTypes = {
  clickHandler: () => void,
}

function HomePageSortDropdown(props: HomePageSortDropdownTypes): JSX.Element {
  const { clickHandler } = props;
  return (
    <span
      onClick={ clickHandler }
      className="places__sorting-type"
      tabIndex={ 0 }
    >
      Popular
      <svg className="places__sorting-arrow" width="7" height="4">
        <use xlinkHref="#icon-arrow-select" />
      </svg>
    </span>
  );
}

export default HomePageSortDropdown;
