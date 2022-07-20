import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const geoUrl = 'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json';

function Map(props) {
  const { markers, setTooltipContent } = props;
  return (
    <div className="container-lg">
      <ComposableMap projection="geoMercator" width={950} height={650} projectionConfig={{ rotate: [-10, 0, 0], scale: 147 }} data-tip="">
        <Geographies geography={geoUrl}>
          {({ geographies }) => geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#EAEAEC"
              stroke="#D6D6DA"
            />
          ))}
        </Geographies>
        {markers.map(({ id, name, coordinates }) => (
          <Link to="/person" className="border" key={id} state={{ id }}>
            <Marker
              className="m-2 border"
              coordinates={coordinates}
              onMouseEnter={() => {
                setTooltipContent(name);
              }}
              onMouseLeave={() => {
                setTooltipContent('');
              }}
            >
              <circle r={5} fill="#FF5533" />
            </Marker>
          </Link>
        ))}
      </ComposableMap>
    </div>
  );
}

Map.defaultProps = {
  markers: [
    {
      coordinates: [],
      name: 'Name',
      id: 0,
    },
  ],
  setTooltipContent: '',
};

Map.propTypes = {
  markers: PropTypes.arrayOf(PropTypes.shape({
    coordinates: PropTypes.arrayOf,
    name: PropTypes.string,
    id: PropTypes.number,
  })),
  setTooltipContent: PropTypes.func,
};

export default Map;
