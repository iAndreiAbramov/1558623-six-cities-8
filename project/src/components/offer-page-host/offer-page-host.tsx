import React from 'react';

type OfferPageHostTypes = {
  host: {
    avatarUrl: string,
    id: string,
    isPro: boolean,
    name: string,
  },
}

function OfferPageHost(props: OfferPageHostTypes): JSX.Element {
  const { host } = props;
  const { name, avatarUrl, isPro } = host;
  const proWrapperClass = isPro
    ? 'property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper'
    : 'property__avatar-wrapper user__avatar-wrapper';
  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div className={ proWrapperClass }>
          <img className="property__avatar user__avatar" src={ avatarUrl } width="74" height="74"
            alt="Host avatar"
          />
        </div>
        <span className="property__user-name">
          { name }
        </span>
        {
          isPro &&
          <span className="property__user-status">
            Pro
          </span>
        }
      </div>
      <div className="property__description">
        <p className="property__text">
          A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is
          green and from 18th century.
        </p>
        <p className="property__text">
          An independent House, strategically located between Rembrand Square and National Opera, but where the bustle
          of the city comes to rest in this alley flowery and colorful.
        </p>
      </div>
    </div>
  );
}

export default OfferPageHost;
