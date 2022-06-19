import React from 'react';
import "./heroElement.css";


const HeroElement = ({src, alt}) => {
  return (
    <article className="jumbotron">
      <img src={src} alt={alt} />
    </article>
  )
}

export default HeroElement