import React from 'react';
import "./menu.css";

const Menu = ({alt, src, href, title}) => {
  return (
      <div className="col-md-2 col-sm-2">
          <div className="menu-card">
            <a className="nav-menu" href={href} >
                <img className="img-fluid" src={src} alt={alt}/>
                <h6>{title}</h6>
            </a>
          </div>
      </div>
  )
}

export default Menu