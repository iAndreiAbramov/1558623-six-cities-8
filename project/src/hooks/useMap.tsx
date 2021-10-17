import { City } from '../types/map-types';
import { Map, TileLayer } from 'leaflet';
import { MutableRefObject, useEffect, useState } from 'react';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: City,
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const { latitude, longitude, zoom } = city.location;

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = new Map(mapRef.current, {
        center: [latitude, longitude],
        zoom: zoom,
        scrollWheelZoom: false,
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a' +
            ' href="https://carto.com/attributions">CARTO</a>',
        },
      );

      instance.addLayer(layer);
      setMap(instance);
    }
  }, [mapRef, map, latitude, longitude, zoom]);

  return map;
}

export default useMap;
