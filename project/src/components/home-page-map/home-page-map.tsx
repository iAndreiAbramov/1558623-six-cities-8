import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import { Marker } from 'leaflet';
import { DefaultCustomIcon, ActiveCustomIcon } from '../../const';
import useMap from '../../hooks/useMap';
import { CityTypes, PointTypes } from '../../types/state-types';

type HomePageMapProps = {
  activeCardId: string,
  city: CityTypes,
  points: PointTypes[],
}

function HomePageMap(props: HomePageMapProps): JSX.Element {
  const { activeCardId, city, points } = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const markers: Marker[] = [];

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude,
        });

        marker
          .setIcon(
            activeCardId && activeCardId === point.offerId
              ? ActiveCustomIcon
              : DefaultCustomIcon,
          )
          .addTo(map);
        markers.push(marker);
      });
      return () => markers.forEach((marker) => marker.removeFrom(map));
    }
  }, [map, points, activeCardId]);

  return (
    <div className="cities__right-section">
      <section
        className="cities__map map"
        ref={ mapRef }
      />
    </div>
  );
}

export default HomePageMap;
