import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { bindActionCreators, Dispatch } from '@reduxjs/toolkit';
import { ActionTypes } from '../../types/action-types';
import { CardArticleClasses, CardImgWrapperClasses, FetchStatus, SortOptions } from '../../const';
import FetchFailMessage from '../fetch-fail-message/fetch-fail-message';
import HomePageSortDropdown from '../home-page-sort-dropdown/home-page-sort-dropdown';
import HomePageSortToggler from '../home-page-sort-toggler/home-page-sort-toggler';
import OfferCard from '../offer-card/offer-card';
import { OfferDataTypes } from '../../types/offer-data-types';
import { setIsFavoriteAction } from '../../store/api-actions';
import Spinner from '../spinner/spinner';
import { StateTypes } from '../../types/state-types';

const mapStateToProps = (state: StateTypes) => ({
  isFetching: state.fetchStatus,
  activeCity: state.activeCity.name,
});
const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>) => bindActionCreators({
  handleBookmarkClick: setIsFavoriteAction
}, dispatch);

const homePageListConnect = connect(mapStateToProps, mapDispatchToProps);
const HomePageListConnected = homePageListConnect(HomePageList);

type HomePageListTypes = {
  offersData: OfferDataTypes[],
  onActiveCardChange?: (newId: string) => void,
} & ConnectedProps<typeof homePageListConnect>

function HomePageList(props: HomePageListTypes): JSX.Element {
  const { offersData, onActiveCardChange, activeCity, isFetching, handleBookmarkClick } = props;
  const [dropdownState, setDropdownState] = useState(false);
  const [sortOption, setSortOption] = useState(SortOptions.POPULAR);
  const [sortedData, setSortedData] = useState([...offersData]);

  useEffect(() => {
    switch (sortOption) {
      case SortOptions.PRICE_UP:
        setSortedData(() => [...offersData].sort((a, b) => a.price - b.price));
        break;
      case SortOptions.PRICE_DOWN:
        setSortedData(() => [...offersData].sort((a, b) => b.price - a.price));
        break;
      case SortOptions.RATING_DOWN:
        setSortedData(() => [...offersData].sort((a, b) => b.rating - a.rating));
        break;
      default:
        setSortedData([...offersData]);
        break;
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
        handleBookmarkClick={ handleBookmarkClick }
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

export { HomePageList };
export default HomePageListConnected;
