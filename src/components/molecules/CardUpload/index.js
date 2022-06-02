import React from 'react';
import { EditIcon, DeleteIcon } from "../../../assets";
import "./cardUpload.css";

const CardUpload = ({src, alt, title, city, category}) => {
  return (
    <div>
        <div className="col">
            <div className="card-upload">
              <span className="card-categ">{category}</span>
                <img src={src} className="card-img-top" alt={alt}/>
                  <div className="card-body">
                      <h5 className="card-title"><a className="card-anchor" href="/detail-cagar">{title}</a></h5>
                      <p className="card-city mb-5">{city}</p>
                  </div>
                  <div className="card-action">
                      <a href="/edit"><img src={EditIcon} alt="edit" className="icon-card"/></a>
                      <a href="/#"><img src={DeleteIcon} alt="delete" className="icon-card"/></a>
                  </div>
            </div>
        </div>
      </div>
  )
}

export default CardUpload