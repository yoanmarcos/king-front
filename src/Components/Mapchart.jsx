import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Line,
  Marker,
} from 'react-simple-maps';
import { URL_API } from '../env';

const geoUrl =
  'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

const markers = [
  {
    markerOffset: -30,
    name: 'Vous étiez par là',
    coordinates: [42.27316793350277, 41.05379552986494],
  },
];

const lines = [
  { from: [2.3522, 48.8566] },
  { from: [26.085016707891654, 44.44166219473871] },
  { from: [23.72353058108028, 37.99768751356439] },
  { from: [2.3522, 48.8566] },
  { from: [2.3522, 48.8566] },
];

// eslint-disable-next-line react/prop-types
const MapChart = ({ setTooltipContent }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL_API}pays`)
      //   .then((res) => console.log(res.data))
      .then((res) => setData(res.data));
  }, []);

  return (
    <div style={{ marginLeft: 'auto', marginRight: 'auto', width: '65%' }}>
      <ComposableMap
        data-tip=""
        projectionConfig={{ rotate: [-25.0, -42.0, 0], scale: 950 }}
      >
        <Geographies
          geography={geoUrl}
          fill="#D6D6DA"
          stroke="#FFFFFF"
          strokeWidth={0.5}
        >
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
        {lines.map(({ from }) => (
          <Line
            from={from}
            to={[42.27316793350277, 42.05379552986494]}
            stroke="#FF5533"
            strokeWidth={4}
            strokeLinecap="round"
            onMouseEnter={() => {
              //   console.log(data?.Ressource?.Type);
              setTooltipContent(data?.Ressource?.Type);
            }}
            onMouseLeave={() => {
              setTooltipContent('');
            }}
          />
        ))}

        {markers.map(({ name, coordinates, markerOffset }) => (
          <Marker key={name} coordinates={coordinates}>
            <g
              fill="none"
              stroke="#FF5533"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(-12, -24)"
            >
              <circle cx="12" cy="10" r="40" />
            </g>
            <text
              textAnchor="middle"
              y={markerOffset}
              style={{ fontFamily: 'system-ui', fill: '#5D5A6D' }}
            >
              {name}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};

export default MapChart;
