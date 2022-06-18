import React from 'react';
import Image from 'next/image';
import map2 from '../photos/map2.jpg';



const Map = () => {
  return (
    <div>
      <Image height={500} width={400} alt='map' src={map2} />
    </div>
  )
}

export default Map;