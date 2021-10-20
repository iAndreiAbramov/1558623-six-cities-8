import React from 'react';
import { Link } from 'react-router-dom';

type HomePageTabTypes = {
  name: string,
}

function HomePageTab(props: HomePageTabTypes): JSX.Element {
  const { name } = props;
  return (
    <Link className="locations__item-link tabs__item" to={ `/${ name.toLowerCase() }` }>
      <span>{ name }</span>
    </Link>
  );
}

export default HomePageTab;
