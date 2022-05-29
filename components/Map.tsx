import React from 'react';
import Image from 'next/image';
import map from '../photos/map.jpg';



const Map = () => {
  return (
    <div>
      <Image height={400} width={400} alt='map' src={map} />
    </div>
  )
}

export default Map;