import React from 'react';
import "./heroElement.css";


const HeroElement = ({src, alt}) => {
  return (
        <div class="jumbotron jumbotron-fluid">
            <img src={src} alt={alt} class="img-fluid"/>
        </div>
  )
}

export default HeroElement