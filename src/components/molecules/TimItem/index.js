import React from 'react'
import './TimItem.css'

const TimItem = ({nama, section, src}) => {
    return (
        <div class="col-md-3 col-sm-3">
            <div class="team-member">
                <div class="team-img">
                    <img src={src} alt="team member" class="img-fluid" />
                </div>
            </div>
            <div class="team-title">
                <h5>{nama}</h5>
                <h6>{section}</h6>
            </div>
        </div>
    )
}

export default TimItem