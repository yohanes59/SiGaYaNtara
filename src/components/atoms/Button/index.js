import React from 'react';
import "./button.css";

const Button = ({name}) => {
  return (
    <div class="button-bar">
        <a className="button" href="/upload" type="button">{name}</a>
    </div>
  )
}

export default Button