import React from 'react';
import "./heroElement.css";


const HeroElement = ({src, alt, srcset}) => {
  return (
    <article className="jumbotron">
       <picture>
        <source type="images/webp" srcSet={srcset}/>
        <img fetchpriority="high" src={src} alt={alt} />
      </picture>
    </article>
  )
}

export default HeroElement