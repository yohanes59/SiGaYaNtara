import React from 'react';
import "./menu.css";

const Menu = ({alt, src, href, title}) => {
  return (
      <div class="col-md-2 col-sm-2">
          <div class="menu-card">
            <a class="nav-menu" href={href} >
                <img class="img-fluid" src={src} alt={alt}/>
                <h6>{title}</h6>
            </a>
          </div>
      </div>
  )
}

export default Menu