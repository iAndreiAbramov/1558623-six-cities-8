import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import { Marker } from 'leaflet';
import { City, Point } from '../../types/map-types';
import { DefaultCustomIcon, ActiveCustomIcon } from '../../const';
import useMap from '../../hooks/useMap';

type HomePageMapProps = {
  activeCardId: string,
  city: City,
  points: Point[],
}

function HomePageMap(props: HomePageMapProps): JSX.Element {
  const { activeCardId, city, points } = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

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
      });
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
