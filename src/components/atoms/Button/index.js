import React from 'react';
import "./button.css";

const Button = ({name}) => {
  return (
    <div class="button-bar">
        <button type="button" class="button">{name}</button>
    </div>
  )
}

export default Button