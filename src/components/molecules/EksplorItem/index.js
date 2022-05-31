import React from 'react';
import "./eksplorItem.css";

const EksplorItem = ({provincename}) => {
  return (
    <div className="col-md-3 col-sm-3">
        <div className="province-card">
            <h6 className="province-name">{provincename}</h6>
        </div>
    </div>
  )
}

export default EksplorItem