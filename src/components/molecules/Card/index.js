import React from 'react';
import "./card.css";

const Card = ({src, alt, title, city, category}) => {
  return (
    <div>
        <div className="col">
            <div className="card">
                <img src={src} className="card-img-top" alt={alt}/>
                <span className="card-category">{category}</span>
                  <div className="card-body">
                      <h5 className="card-title"><a class="card-anchor" href="/#">{title}</a></h5>
                      <p className="card-city">{city}</p>
                  </div>
            </div>
        </div>
      </div>
  )
}

export default Card