import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CardArticleClasses, CardImgWrapperClasses, FetchStatus, SortOptions } from '../../const';
import { getActiveCity, getFetchStatus } from '../../store/selectors';
import FetchFailMessage from '../fetch-fail-message/fetch-fail-message';
import HomePageSortDropdown from '../home-page-sort-dropdown/home-page-sort-dropdown';
import HomePageSortToggler from '../home-page-sort-toggler/home-page-sort-toggler';
import { OfferDataTypes } from '../../types/offer-data-types';
import OfferCard from '../offer-card/offer-card';
import SpinnerHome from '../spinner-home/spinner-home';
import { getSortedOffers } from '../../utils/project-specific-utils';

type HomePageListTypes = {
  offersData: OfferDataTypes[],
  onActiveCardChange?: (newId: string) => void,
};

function HomePageList(props: HomePageListTypes): JSX.Element {
  const isFetching = useSelector(getFetchStatus);
  const activeCityName = useSelector(getActiveCity).name;
  const { offersData, onActiveCardChange } = props;

  const [dropdownState, setDropdownState] = useState(false);
  const [sortOption, setSortOption] = useState(SortOptions.Popular);
  const [sortedData, setSortedData] = useState([...offersData]);

  useEffect(() => {
    setSortedData(getSortedOffers([...offersData], sortOption));
  }, [offersData, sortOption]);

  const offerCards = sortedData.map((cardItem) => {
    const { id } = cardItem;
    return (
      <OfferCard
        key={ id }
        data={ cardItem }
        onActiveCardChange={ onActiveCardChange }
        articleClass={ CardArticleClasses.MAIN_PAGE_LIST }
        imgWrapperClass={ CardImgWrapperClasses.MAIN_PAGE_LIST }
      />
    );
  });

  const handleDropdownClick = useCallback((): void => {
    setDropdownState((prevState: boolean) => !prevState);
  }, []);

  const handleSortToggle = (option: SortOptions) => {
    setDropdownState((prevState: boolean) => !prevState);
    setSortOption(option);
  };

  return (
    <section className="cities__places places" data-testid="home-list">
      { isFetching === FetchStatus.InProgress && <SpinnerHome /> }
      { isFetching === FetchStatus.Error && <FetchFailMessage /> }
      {
        isFetching === FetchStatus.Success
        &&
        <>
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{ offersData.length } places to stay in { activeCityName }</b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <HomePageSortDropdown
              sortOption={ sortOption }
              clickHandler={ handleDropdownClick }
            />
            {
              dropdownState
              &&
              <HomePageSortToggler
                clickHandler={ handleSortToggle }
              />
            }
          </form>
          <div className="cities__places-list places__list tabs__content" style={ { position: 'relative' } }>
            { offerCards }
          </div>
        </>
      }
    </section>
  );
}

export default HomePageList;
