import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import { Marker } from 'leaflet';
import { ACTIVE_CUSTOM_ICON, DEFAULT_CUSTOM_ICON } from '../../const';
import { CityLocationTypes, PointTypes } from '../../types/state-types';
import useMap from '../../hooks/use-map';

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
        nearbyMarker.setIcon(DEFAULT_CUSTOM_ICON).addTo(map);
      });

      const currentMarker = new Marker(
        [currentPoint.latitude, currentPoint.longitude],
      );
      currentMarker.setIcon(ACTIVE_CUSTOM_ICON).addTo(map);

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
