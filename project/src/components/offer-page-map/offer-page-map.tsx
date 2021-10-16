import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import { ActiveCustomIcon, DefaultCustomIcon } from '../../const';
import { City, Point } from '../../types/map-types';
import { Marker } from 'leaflet';
import useMap from '../../hooks/useMap';

type OfferPageMapTypes = {
  city: City,
  nearbyPoints: Point[],
  currentPoint: Point,
}

function OfferPageMap(props: OfferPageMapTypes): JSX.Element {
  const { city, nearbyPoints, currentPoint } = props;
  const offerMapRef = useRef(null);
  const map = useMap(offerMapRef, city);

  useEffect(() => {
    if (map) {
      nearbyPoints.forEach((point) => {
        const nearbyMarker = new Marker(
          [point.latitude, point.longitude],
        );
        nearbyMarker.setIcon(DefaultCustomIcon).addTo(map);
      });

      const currentMarker = new Marker(
        [currentPoint.latitude, currentPoint.longitude]
      );
      currentMarker.setIcon(ActiveCustomIcon).addTo(map);
    }
  });

  return (
    <section className="property__map map" ref={ offerMapRef } />
  );
}

export default OfferPageMap;
