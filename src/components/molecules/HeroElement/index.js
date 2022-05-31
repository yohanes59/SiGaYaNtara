import React from 'react';
import "./heroElement.css";


const HeroElement = ({src, alt}) => {
  return (
        <div className="jumbotron jumbotron-fluid">
            <img src={src} alt={alt} className="img-fluid"/>
        </div>
  )
}

export default HeroElement