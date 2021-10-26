import React, { useEffect, useState } from 'react';
import { CardArticleClasses, CardImgWrapperClasses, FetchStatus, SortOptions } from '../../const';
import HomePageSortDropdown from '../home-page-sort-dropdown/home-page-sort-dropdown';
import HomePageSortToggler from '../home-page-sort-toggler/home-page-sort-toggler';
import OfferCard from '../offer-card/offer-card';
import { OfferDataTypes } from '../../types/offer-data-types';
import { connect } from 'react-redux';
import { StateTypes } from '../../types/state-types';
import Spinner from '../spinner/spinner';
import FetchFailMessage from '../fetch-fail-message/fetch-fail-message';

type HomePageListTypes = {
  isFetching: string,
  offersData: OfferDataTypes[],
  onActiveCardChange?: (newId: string) => void,
  activeCity: string,
}

const mapStateToProps = (state: StateTypes) => ({
  isFetching: state.isFetching,
  activeCity: state.activeCity.name,
});

const HomePageListConnected = connect(mapStateToProps)(HomePageList);

function HomePageList(props: HomePageListTypes): JSX.Element {
  const { offersData, onActiveCardChange, activeCity, isFetching } = props;
  const [dropdownState, setDropdownState] = useState(false);
  const [sortOption, setSortOption] = useState(SortOptions.POPULAR);
  const [sortedData, setSortedData] = useState([...offersData]);

  useEffect(() => {
    if (sortOption === SortOptions.PRICE_UP) {
      setSortedData(() => (
        [...offersData].sort((a, b) => (
          a.price - b.price
        ))));
    } else if (sortOption === SortOptions.PRICE_DOWN) {
      setSortedData(() => (
        [...offersData].sort((a, b) => (
          b.price - a.price
        ))));
    } else if (sortOption === SortOptions.RATING_DOWN) {
      setSortedData(() => (
        [...offersData].sort((a, b) => (
          b.rating - a.rating
        ))));
    } else {
      setSortedData([...offersData]);
    }
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

  const handleDropdownClick = (): void => {
    setDropdownState((prevState: boolean) => !prevState);
  };

  const handleSortToggle = (option: string) => {
    setDropdownState((prevState: boolean) => !prevState);
    setSortOption(option);
  };

  return (
    <section className="cities__places places">
      { isFetching === FetchStatus.InProgress && <Spinner /> }
      { isFetching === FetchStatus.Error && <FetchFailMessage /> }
      {
        isFetching === FetchStatus.Success
        &&
        <>
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{ offersData.length } places to stay in { activeCity }</b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <HomePageSortDropdown
              sortOption={ sortOption }
              clickHandler={ handleDropdownClick }
            />
            {
              dropdownState &&
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

export { HomePageList };
export default HomePageListConnected;
