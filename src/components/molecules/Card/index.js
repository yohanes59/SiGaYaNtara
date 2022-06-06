/* eslint-disable no-template-curly-in-string */
import React from 'react';
import "./card.css";

const Card = (props) => {
  const { src, alt, title, city, category } = props;
  return (
    <a href={`/detail/${props._id}`}>
      <div className="col">
        <div className="card">
          <img src={src} className="card-img-top" alt={alt} />
          <span className="card-category">{category}</span>
          <div className="card-body">
            <h5 className="card-title"><p className="card-anchor">{title}</p></h5>
            <p className="card-city">{city}</p>
          </div>
        </div>
      </div>
    </a>
  )
}

export default Card