/* eslint-disable no-template-curly-in-string */
import React from 'react';
import "./card.css";
import { MapIcon } from '../../../assets';

const Card = (props) => {
  const { src, alt, title, city, category } = props;
  return (
    <a className="card-anchor" href={`/detail/${props._id}`}>
      <div className="col">
        <div className="card">
          <img src={src} className="photo" alt={alt} />
          <span className="card-category">{category}</span>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
              <div className="city-container">
                <img className="city-map" src={MapIcon} alt="Icon Map"></img>
                <p className="card-city">{city}</p>
              </div>
          </div>
        </div>
      </div>
    </a>
  )
}

export default Card