import React from 'react';
import "./heroElement.css";


const HeroElement = ({src, alt}) => {
  return (
    <figure className="jumbotron">
      <img src={src} alt={alt} />
    </figure>
  )
}

export default HeroElement