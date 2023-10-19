import React from 'react'
import CSS from './Box.module.css'
import { useState } from 'react';
import {Link} from 'react-router-dom';

const Box = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);

  };
  return (
    <Link to = '/experimental' id = {CSS.secondbigcard}      
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}>
        {!isHovering && <h1> I Stole This Hover Effect Off a Youtuber</h1>}
        {isHovering && <h1> Click to see what im working on right now</h1>}
    </Link>

  )
}

export default Box