import { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import MapChart from '../Components/Mapchart';

const Map = () => {
  const [content, setContent] = useState('');
  return (
    <div>
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
};

export default Map;
