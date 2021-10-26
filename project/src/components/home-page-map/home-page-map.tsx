import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import { ActiveCustomIcon, DefaultCustomIcon } from '../../const';
import { CityTypes, PointTypes } from '../../types/state-types';
import { Marker } from 'leaflet';
import useMap from '../../hooks/useMap';

type HomePageMapProps = {
  activeCardId: string,
  city: CityTypes,
  pointsForMap: PointTypes[],
}

function HomePageMap(props: HomePageMapProps): JSX.Element {
  const { activeCardId, city, pointsForMap } = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const markers: Marker[] = [];

  useEffect(() => {
    if (map) {
      pointsForMap.forEach((point) => {
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
  }, [map, pointsForMap, activeCardId]);

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
