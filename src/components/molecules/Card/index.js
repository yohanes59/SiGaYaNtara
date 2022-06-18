/* eslint-disable no-template-curly-in-string */
import React from 'react';
import "./card.css";
import { MapIcon } from '../../../assets';

const Card = (props) => {
  const { src, alt, title, city, category } = props;
  return (
    <a className="card-anchor" href={`/detail/${props._id}`}>
      <section className="col">
        <article className="card">
          <img src={src} className="photo" alt={alt} />
          <label className="card-category">{category}</label>
          <section className="card-body">
            <h5 className="card-title">{title}</h5>
              <section className="city-container">
                <img className="city-map" src={MapIcon} alt="Icon Map"></img>
                <p className="card-city">{city}</p>
              </section>
          </section>
        </article>
      </section>
    </a>
  )
}

export default Card