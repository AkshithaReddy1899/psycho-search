/* eslint-disable func-names */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable new-cap */
import React from 'react';
import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { Icon, divIcon, point } from 'leaflet';
import { data } from '../assets/data';

function MapComponent() {
  const navigate = useNavigate();
  const customIcon = new Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/447/447031.png',
    iconSize: [38, 38],
  });

  // custom cluster icon
  const createClusterCustomIcon = function (cluster) {
    return new divIcon({
      html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
      className: 'custom-marker-cluster',
      iconSize: point(33, 33, true),
    });
  };

  return (
    <center>
      <div id="map" className="mx-2">
        <MapContainer className="leaflet-container" center={data[0].geocode} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            className="tile-layer-class"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MarkerClusterGroup
            chunkedLoading
            iconCreateFunction={createClusterCustomIcon}
          >
            {data.map((marker) => (
              <Marker
                key={marker.id}
                position={marker.geocode}
                icon={customIcon}
                onClick={navigate}
                eventHandlers={{
                  click: () => {
                    navigate('/person', { state: { id: marker.id } });
                  },
                }}
              >
                <Popup>{marker.name}</Popup>
              </Marker>
            ))}
          </MarkerClusterGroup>
        </MapContainer>
      </div>
    </center>
  );
}

export default MapComponent;
