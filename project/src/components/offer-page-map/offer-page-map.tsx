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
      const nearbyMarkers: Marker[] = [];
      nearbyPoints.forEach((point) => {
        const nearbyMarker = new Marker(
          [point.latitude, point.longitude],
        );
        nearbyMarkers.push(nearbyMarker);
        nearbyMarker.setIcon(DefaultCustomIcon).addTo(map);
      });

      const currentMarker = new Marker(
        [currentPoint.latitude, currentPoint.longitude],
      );
      currentMarker.setIcon(ActiveCustomIcon).addTo(map);

      return () => {
        nearbyMarkers.forEach((marker: Marker) => marker.removeFrom(map));
        currentMarker.removeFrom(map);
      };
    }
  });

  return (
    <section className="property__map map" ref={ offerMapRef } />
  );
}

export default OfferPageMap;
