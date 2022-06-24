import React from 'react';
import { MapIcon } from '../../../assets';
import "./card.css";

const Card = (props) => {
const { src, alt, title, city, category } = props;
  return (
    <a className="card-anchor text-decoration-none" href={`/detail/${props._id}`}>
    <section className="card shadow h-100">
      <img src={src} className="photo w-100" alt={alt} />
      <span className="card-category position-absolute rounded fw-bold">{category}</span>
      <section className="card-body d-flex flex-column">
        <p className="card-title text-uppercase fs-5 fw-bold">{title}</p>
          <section className="city-container d-flex flex-row w-100 mt-auto">
            <img className="city-map" src={MapIcon} alt="Icon Map"></img>
            <p className="card-city text-capitalize ml-1 mb-0">{city}</p>
          </section>
      </section>
    </section>
    </a>
  )
}

export default Card