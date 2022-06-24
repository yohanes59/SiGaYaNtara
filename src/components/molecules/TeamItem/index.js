import React from 'react'
import './teamItem.css'

const TeamItem = ({ nama, section, src, alt, href }) => {
    return (
        <article className="team-body" tabIndex="0">
            <a className='link' target="_blank" rel="noopener noreferrer" href={href}>
                <section className="team-img">
                    <img className="member-img" src={src} alt={alt} />
                </section>
                <section className="member-info">
                    <p>{nama}</p>
                    <span>{section}</span>
                </section>
            </a>
        </article>
    )
}

export default TeamItem