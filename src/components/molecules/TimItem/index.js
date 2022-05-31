import React from 'react'
import './TimItem.css'

const TimItem = ({nama, section, src}) => {
    return (
        <div className="col-md-3 col-sm-3">
            <div className="team-member">
                <div className="team-img">
                    <img src={src} alt="team member" className="img-fluid" />
                </div>
            </div>
            <div className="team-title">
                <h5>{nama}</h5>
                <h6>{section}</h6>
            </div>
        </div>
    )
}

export default TimItem