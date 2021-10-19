import React, { useState } from 'react';
import { CardArticleClasses, CardImgWrapperClasses } from '../../const';
import OfferCard from '../offer-card/offer-card';
import { OfferDataTypes } from '../../types/offer-data-types';
import HomePageSortToggler from '../home-page-sort-toggler/home-page-sort-toggler';
import HomePageSortDropdown from '../home-page-sort-dropdown/home-page-sort-dropdown';

type HomePageListTypes = {
  offersData: OfferDataTypes[],
  onActiveCardChange?: (newId: string) => void,
}

function HomePageList(props: HomePageListTypes): JSX.Element {
  const { offersData, onActiveCardChange } = props;
  const [dropdownState, setDropdownState] = useState(false);

  const offerCards = offersData.map((cardItem) => {
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
    setDropdownState((prevState) => !prevState);
  }

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{ offersData.length } places to stay in Amsterdam</b>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <HomePageSortDropdown
          clickHandler={ handleDropdownClick }
        />
        { dropdownState && <HomePageSortToggler /> }
      </form>
      <div className="cities__places-list places__list tabs__content">
        { offerCards }
      </div>
    </section>
  );
}

export default HomePageList;
