import { memo } from "react";
import React, { useEffect } from 'react';

function MegaBoost({ handleClick }) {
  useEffect(()=>{
    console.log('Render MegaBoost');
  })

  
  return (
    <button
      className="mega-boost-button"
      onClick={handleClick}
    >
      MEGA BOOST!
    </button>
  );
}

export default memo(MegaBoost);