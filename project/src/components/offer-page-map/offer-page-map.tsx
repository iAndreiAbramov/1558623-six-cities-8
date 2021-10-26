import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import { ActiveCustomIcon, DefaultCustomIcon } from '../../const';
import { Marker } from 'leaflet';
import useMap from '../../hooks/useMap';
import { CityLocationTypes, CityTypes, PointTypes } from '../../types/state-types';

type OfferPageMapTypes = {
  cityLocation: CityLocationTypes,
  nearbyPoints: PointTypes[],
  currentPoint: PointTypes,
}

function OfferPageMap(props: OfferPageMapTypes): JSX.Element {
  const { cityLocation, nearbyPoints, currentPoint } = props;
  const offerMapRef = useRef(null);
  const map = useMap(offerMapRef, cityLocation);

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
