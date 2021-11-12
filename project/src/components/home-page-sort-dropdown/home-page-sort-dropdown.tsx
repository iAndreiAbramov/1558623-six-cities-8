import React from 'react';

type HomePageSortDropdownTypes = {
  sortOption: string,
  clickHandler: () => void,
}

function HomePageSortDropdown(props: HomePageSortDropdownTypes): JSX.Element {
  const { clickHandler, sortOption } = props;
  return (
    <span
      onClick={ clickHandler }
      className="places__sorting-type"
      tabIndex={ 0 }
      data-testid="home-list-sort-dropdown"
    >
      { sortOption }
      <svg className="places__sorting-arrow" width="7" height="4">
        <use xlinkHref="#icon-arrow-select" />
      </svg>
    </span>
  );
}

export default React.memo(HomePageSortDropdown);
