import React from 'react';
import "./eksplorItem.css";

const EksplorItem = ({cityname}) => {
  return (
    <div class="col-md-3 col-sm-3">
        <div class="city-card">
            <h6 class="city-name">{cityname}</h6>
        </div>
    </div>
  )
}

export default EksplorItem