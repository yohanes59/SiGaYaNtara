import React from 'react';
import "./heroElement.css";


const HeroElement = ({src, alt}) => {
  return (
    <div className="jumbotron">
      <img src={src} alt={alt} />
    </div>
  )
}

export default HeroElement