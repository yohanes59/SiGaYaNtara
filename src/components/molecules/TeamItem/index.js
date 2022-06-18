import React from 'react'
import './teamItem.css'

const TeamItem = ({ nama, section, src, alt, href }) => {
    return (
        <section className="team-body" tabIndex="0">
            <a className='link' target="_blank" rel="noopener noreferrer" href={href}>
                <div className="team-img">
                    <img className="member-img" src={src} alt={alt} />
                </div>
                <div className="member-info">
                    <h5>{nama}</h5>
                    <span>{section}</span>
                </div>
            </a>
        </section>
    )
}

export default TeamItem