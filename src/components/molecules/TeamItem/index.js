import React from 'react'
import './teamItem.css'

const TeamItem = ({nama, section, src, alt}) => {
    return (
        <div className="team-body" tabIndex="0">
            <div className="team-img">
                <img className="member-img" src={src} alt={alt} />
            </div>
            <div className="member-info">
                <h5>{nama}</h5>
                <span>{section}</span>
            </div>
        </div>
    )
}

export default TeamItem